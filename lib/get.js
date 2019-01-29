import R from "ramda";
export default (path, obj, defaultValue) => R.pathOr(defaultValue, path.split("."), defaultValue);
//# sourceMappingURL=get.js.map