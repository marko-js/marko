import classPlugin from "./class";
import noUpdatePlugin from "./no-update";
import noUpdateBodyPlugin from "./no-update-body";
import noUpdateBodyIfPlugin from "./no-update-body-if";
import noUpdateIfPlugin from "./no-update-if";
import stylePlugin from "./style";

export default {
  class: classPlugin,
  style: stylePlugin,
  "no-update": noUpdatePlugin,
  "no-update-if": noUpdateIfPlugin,
  "no-update-body": noUpdateBodyPlugin,
  "no-update-body-if": noUpdateBodyIfPlugin,
};
