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
    return value.replace(/(^[A-zÀ-ú]| [A-zÀ-ú]|-[A-zÀ-ú]|_[A-zÀ-ú])/g, function ($1) { return $1.toUpperCase(); });
});
//# sourceMappingURL=titleCase.js.map