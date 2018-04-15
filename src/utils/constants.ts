import * as path from 'path'

export const KCM_DIR = '.kcm'
export const BACK_DIR = '_backup'
export const KUBE_DIR = '.kube'
export const KCM_FILE = 'kcm_config.json'

export const HOME_PATH =
    process.env[process.platform === 'win32' ? 'USERPROFILE' : 'HOME']

export const KCM_PATH = path.join(HOME_PATH, KCM_DIR)
export const kmcPath = (...dirs) => path.resolve(KCM_PATH, ...dirs)

export const KUBE_PATH = path.resolve(HOME_PATH, KUBE_DIR)

export const BACK_PATH = kmcPath(BACK_DIR)
export const KCM_CONFIG_PATH = kmcPath(KCM_FILE)
