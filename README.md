# k8s-configuration-manager

Manage in a better way multiple kubernetes config.

This tiny cli creates in your home directory the folder `.kcm`, to store multiples `.kubes` configs. So you can switch configurations of kubernetes as easiest as ever. Also it stores the last config used in the file `.kcm/kcm_config.json`. 

## Install

npm i -g k8s-config-management

## Commands

```
$ ./bin/kcm -h

  Usage: kcm [options] [command]

  Multiple k8s configuration manager


  Options:

    -V, --version  output the version number
    -h, --help     output usage information


  Commands:

    add|a <folder_path> [name]  Add a config with a defined name
    use [name]                  Put the config you want in `.kube` to use it with `kubectl`
    now                         Shows actual config
    ls                          Show stored config in `.kcm`
```


- **add** `folder_path` `name`: Add `folder_path` to the `.kcm` directory with the `name` you want. If you dont put name it uses `default`

- **use** `name`: Copy the `name` config to the `.kube` directory. If you dont use a name it uses `default`.

- **now**: Show configuration that you are using, it is stored in `.kcm/kcm_config.json` file

- **ls**: Show a list of the predefined configurations, basically a ls -l of the `.kcm` excluding files.

## Example

As an example imagine you have 2 kubernetes configurations: `client-1` and `personal`.

```
> tree -L 1 ~/.kcm

/Users/USER/.kcm
├── ...
└── kcm_config.json
```

Then you add both files with kcm

```
> kcm add ./kube-folder-of-client-1 client-1
> tree -L 1 ~/.kcm
/Users/USER/.kcm
├── client-1
└── kcm_config.json

> kcm add ./kube-folder-of-personal personal
/Users/USER/.kcm
├── personal
├── client-1
└── kcm_config.json
```

Now you already have both configuration to be managed by `kcm`. Now type `kcm use personal` or `kcm use client-1` to copy the content to your `.kube` and here we go, your kubectl now use the config you want.

Then you can use `kcm use client-1` or `kcm use personal` to make your `.kube` change. Easy!

## License
Licensed under the MIT license. 2017

## Contibute
PR are welcome, thanks!

## Notes

When you use `kcm use ...` it always make a backup of your actual config (but only stores 1 backup, so be care about it)

Its a simple tool, if you copy manually to your `.kube` there is no way that `kcm` will know about it.
