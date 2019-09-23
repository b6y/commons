"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (function (start, stop, step) {
    if (stop == null) {
        stop = start || 0;
        start = 0;
    }
    if (!step) {
        step = stop < start ? -1 : 1;
    }
    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = new Array(length);
    for (var idx = 0; idx < length; idx += 1, start += step) {
        range[idx] = start;
    }
    return range;
});
//# sourceMappingURL=range.js.map