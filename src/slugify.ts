import * as R from "ramda";
import dasherize from "./dasherize";
import latinise from "./latinise";

export default (value: string): string | null => {
  if (R.isNil(value)) {
    return null;
  }

  const latinised = latinise(value);

  if (latinised === null) {
    return null;
  }

  const newValue = dasherize(latinised.replace(/[^\w\s-]/g, "").toLowerCase());

  if (newValue === null) {
    return null;
  }

  if (newValue.charAt(0) === "-") {
    return newValue.substr(1);
  }

  return newValue;
};
