const _marko_template = _t(__filename);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _hello_tag = _marko_load_tag(_hello);

import _preserve from "../../../../marko/src/core-tags/components/preserve-tag.js";

const _preserve_tag = _marko_load_tag(_preserve);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "rVSetn_I",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _preserve_tag({
    "renderBody": out => {
      _hello_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "1");

          out.w("<div></div>");
        }
      }, out, _component, "0");
    }
  }, out, _component, "p_0");

  _preserve_tag({
    "if": x,
    "renderBody": out => {
      _hello_tag({
        "renderBody": out => {
          _preserve_tag({
            "if": (a, b),
            "renderBody": out => {
              _hello_tag({}, out, _component, "4");
            }
          }, out, _component, "p_4");

          out.w("<div></div>");
        }
      }, out, _component, "3");
    }
  }, out, _component, "p_3");

  _hello_tag({
    "renderBody": out => {
      _preserve_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "7");

          out.w("<div></div>");
        }
      }, out, _component, "p_6");
    }
  }, out, _component, "6");

  _hello_tag({
    "renderBody": out => {
      _preserve_tag({
        "if": x,
        "renderBody": out => {
          _hello_tag({
            "renderBody": out => {
              _preserve_tag({
                "if": (a, b),
                "renderBody": out => {
                  out.w("Again");
                }
              }, out, _component, "p_10");
            }
          }, out, _component, "10");

          out.w("<div></div>");
        }
      }, out, _component, "p_9");
    }
  }, out, _component, "9");

  _preserve_tag({
    "renderBody": out => {
      _hello_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "12");

          out.w("<div></div>");
        }
      }, out, _component, "@a");
    }
  }, out, _component, "p_@a");

  _preserve_tag({
    "if": x,
    "renderBody": out => {
      _hello_tag({
        "renderBody": out => {
          _preserve_tag({
            "if": (a, b),
            "renderBody": out => {
              _hello_tag({}, out, _component, "@c");
            }
          }, out, _component, "p_@c");

          out.w("<div></div>");
        }
      }, out, _component, "@b");
    }
  }, out, _component, "p_@b");

  _hello_tag({
    "renderBody": out => {
      _preserve_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "15");

          out.w("<div></div>");
        }
      }, out, _component, "p_@d");
    }
  }, out, _component, "@d");

  _hello_tag({
    "renderBody": out => {
      _preserve_tag({
        "if": x,
        "renderBody": out => {
          _hello_tag({
            "renderBody": out => {
              _preserve_tag({
                "if": (a, b),
                "renderBody": out => {
                  out.w("Again");
                }
              }, out, _component, "p_@f");
            }
          }, out, _component, "@f");

          out.w("<div></div>");
        }
      }, out, _component, "p_@e");
    }
  }, out, _component, "@e");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);