import * as program from 'commander'
import * as json from 'jsonfile'
import * as path from 'path'
import * as shell from 'shelljs'
import * as updateNotifier from 'update-notifier'
import * as PKG from '../package.json'
import {
    BACK_PATH,
    exec,
    KCM_CONFIG_PATH,
    KCM_FILE,
    KCM_PATH,
    kmcPath,
    KUBE_PATH
} from './utils'

const pkg: any = PKG

updateNotifier({ pkg }).notify()

if (!shell.test('-d', KCM_PATH)) {
    shell.mkdir(KCM_PATH)
}

if (!shell.test('-d', BACK_PATH)) {
    shell.mkdir(BACK_PATH)
}

if (!shell.test('-e', KCM_CONFIG_PATH)) {
    console.log('No kcm config, creating one.')
    json.writeFileSync(KCM_CONFIG_PATH, {})
}

const CFG = json.readFileSync(KCM_CONFIG_PATH)

program.version(pkg.version).description('Multiple k8s configuration manager')

program
    .command('add <fileOrFolderPath> [name]')
    .description(
        `Copy contained config or file config with the specified with the folder name under 'kcm' folder`
    )
    .alias('a')
    .action((fileOrFolderPath, name) => {
        name = name ? (Array.isArray(name) ? name.join(' ') : name) : 'default'

        if (shell.test('-d', path.resolve(fileOrFolderPath))) {
            shell.cp('-R', path.resolve(fileOrFolderPath), kmcPath(name))
            console.log(`Copied config folder to ${kmcPath(name)}`)
        } else if (shell.test('-d', path.resolve(fileOrFolderPath))) {
            shell.cp(path.resolve(fileOrFolderPath), kmcPath(name))
            console.log(`Copied config file to ${kmcPath(name)}`)
        } else {
            console.log(`Cant resolve path of the folder ${fileOrFolderPath}`)
        }

        exec.on()
    })

program
    .command('use [name]')
    .description('Put the config you want in `.kube` to use it with `kubectl`')
    .action(name => {
        name = name ? (Array.isArray(name) ? name.join(' ') : name) : 'default'

        if (!shell.test('-d', kmcPath(name))) {
            console.log(`Cant resolve path of the folder ${kmcPath(name)}`)
            exec.on()
            return
        }

        const files = shell.ls(KUBE_PATH).map(f => f)

        if (files.length > 0) {
            console.log(
                `Warning: '.kube' is not empty, making a backup in ${BACK_PATH}`
            )
            shell.cp('-R', path.resolve(KUBE_PATH, '*'), BACK_PATH)
        }

        console.log(`${name} config actived`)
        shell.cp('-R', kmcPath(name, '*'), KUBE_PATH)
        CFG.using = name
        json.writeFileSync(KCM_CONFIG_PATH, CFG)

        exec.on()
    })

program
    .command('now')
    .description('Shows actual config')
    .action(name => {
        if (CFG.using) {
            console.log(`Using config: ${CFG.using}`)
            exec.on()
            return
        }
        console.log(`Any kcm predefined config is using rigth now.`)

        const files = shell.ls(KUBE_PATH).map(f => f)

        if (files.length > 0) {
            console.log(`Your .kube folder have a config right now. Remember that you can save it doing:
> 'kcm add ${KUBE_PATH} <name_you_want>'
`)
        }

        exec.on()
    })

program
    .command('ls')
    .description('Show stored config in `.kcm`')
    .action(() => {
        const files = shell
            .ls(KCM_PATH)
            .map(f => f)
            .filter(f => f !== KCM_FILE)

        if (files.length === 0) {
            console.log(
                `You dont have any predefined config in kcm, lets add one with 'kcm add PATH_OF_KUBE NAME'`
            )
        } else {
            console.log('You this config availables:')
            files.forEach(name => {
                console.log(
                    ` - ${name} ${CFG.using === name ? '(actual)' : ''}`
                )
            })
        }

        exec.on()
    })

program.parse(process.argv)

if (!exec.is()) {
    console.log('You must use a valid command.')
    program.outputHelp()
    process.exit(1)
}
