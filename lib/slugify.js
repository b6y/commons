"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var R = __importStar(require("ramda"));
var dasherize_1 = __importDefault(require("./dasherize"));
var latinise_1 = __importDefault(require("./latinise"));
exports.default = (function (value) {
    if (R.isNil(value)) {
        return null;
    }
    var latinised = latinise_1.default(value);
    if (latinised === null) {
        return null;
    }
    var newValue = dasherize_1.default(latinised.replace(/[^\w\s-]/g, "").toLowerCase());
    if (newValue === null) {
        return null;
    }
    if (newValue.charAt(0) === "-") {
        return newValue.substr(1);
    }
    return newValue;
});
//# sourceMappingURL=slugify.js.map