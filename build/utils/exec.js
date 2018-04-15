"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Exec = /** @class */ (function () {
    function Exec() {
        var _this = this;
        this.on = function () { return (_this.executed = true); };
        this.is = function () { return _this.executed; };
        this.executed = false;
    }
    return Exec;
}());
exports.exec = new Exec();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlscy9leGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7SUFFSTtRQUFBLGlCQUVDO1FBRU0sT0FBRSxHQUFHLGNBQVcsT0FBQSxDQUFDLEtBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLEVBQXRCLENBQXNCLENBQUE7UUFDdEMsT0FBRSxHQUFHLGNBQWUsT0FBQSxLQUFJLENBQUMsUUFBUSxFQUFiLENBQWEsQ0FBQTtRQUpwQyxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssQ0FBQTtJQUN6QixDQUFDO0lBSUwsV0FBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBRVksUUFBQSxJQUFJLEdBQVEsSUFBSSxJQUFJLEVBQUUsQ0FBQSJ9