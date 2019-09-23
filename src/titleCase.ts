import * as R from "ramda";

export default (value: string): string | null => {
  if (R.isNil(value)) {
    return null;
  }

  return value.replace(
    /(^[A-zÀ-ú]| [A-zÀ-ú]|-[A-zÀ-ú]|_[A-zÀ-ú])/g,
    ($1) => $1.toUpperCase(),
  );
};
