import noUpdateTransform from "./no-update";

export default {
  exit(tag, attr, value) {
    noUpdateTransform.exit(tag, attr, value, { bodyOnly: true });
  }
};
