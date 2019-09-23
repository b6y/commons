"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var R = __importStar(require("ramda"));
exports.default = (function (value) {
    if (R.isNil(value)) {
        return null;
    }
    return value
        .trim()
        .replace(/[_\s]+/g, "-")
        .replace(/([A-Z])/g, "-$1")
        .replace(/-+/g, "-")
        .toLowerCase();
});
//# sourceMappingURL=dasherize.js.map