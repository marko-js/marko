import classPlugin from "./class";
import stylePlugin from "./style";
import noUpdatePlugin from "./no-update";
import noUpdateIfPlugin from "./no-update-if";
import noUpdateBodyPlugin from "./no-update-body";
import noUpdateBodyIfPlugin from "./no-update-body-if";

export default {
  class: classPlugin,
  style: stylePlugin,
  "no-update": noUpdatePlugin,
  "no-update-if": noUpdateIfPlugin,
  "no-update-body": noUpdateBodyPlugin,
  "no-update-body-if": noUpdateBodyIfPlugin
};
