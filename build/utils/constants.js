"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
exports.KCM_DIR = '.kcm';
exports.KUBE_DIR = '.kube';
exports.KCM_FILE = 'kcm_config.json';
exports.HOME_PATH = process.env[(process.platform === 'win32') ? 'USERPROFILE' : 'HOME'];
exports.KCM_PATH = path.join(exports.HOME_PATH, exports.KCM_DIR);
exports.kmcPath = function () {
    var dirs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        dirs[_i] = arguments[_i];
    }
    return path.resolve.apply(path, [exports.KCM_PATH].concat(dirs));
};
exports.KUBE_PATH = path.resolve(exports.HOME_PATH, exports.KUBE_DIR);
exports.KCM_CONFIG_PATH = path.join(exports.HOME_PATH, exports.KCM_DIR, exports.KCM_FILE);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uc3RhbnRzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3V0aWxzL2NvbnN0YW50cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJCQUE0QjtBQUVmLFFBQUEsT0FBTyxHQUFHLE1BQU0sQ0FBQTtBQUNoQixRQUFBLFFBQVEsR0FBRyxPQUFPLENBQUE7QUFDbEIsUUFBQSxRQUFRLEdBQUcsaUJBQWlCLENBQUE7QUFFNUIsUUFBQSxTQUFTLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxDQUFDLENBQUMsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUE7QUFFaEYsUUFBQSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBUyxFQUFFLGVBQU8sQ0FBQyxDQUFBO0FBQ3hDLFFBQUEsT0FBTyxHQUFHO0lBQUMsY0FBTztTQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87UUFBUCx5QkFBTzs7SUFBSyxPQUFBLElBQUksQ0FBQyxPQUFPLE9BQVosSUFBSSxHQUFTLGdCQUFRLFNBQUssSUFBSTtBQUE5QixDQUErQixDQUFBO0FBQ3RELFFBQUEsU0FBUyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsaUJBQVMsRUFBRSxnQkFBUSxDQUFDLENBQUE7QUFDN0MsUUFBQSxlQUFlLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBUyxFQUFFLGVBQU8sRUFBRSxnQkFBUSxDQUFDLENBQUEifQ==