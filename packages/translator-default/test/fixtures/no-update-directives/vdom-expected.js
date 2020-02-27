const _marko_template = _t(__filename);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _hello_tag = _marko_load_tag(_hello);

import _preserve from "../../../../marko/src/core-tags/components/preserve-tag.js";

const _preserve_tag = _marko_load_tag(_preserve);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("rVSetn_I", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _preserve_tag({
    "renderBody": out => {
      _hello_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "1");

          out.be("div", null, "2", component, 0, 0);
          out.ee();
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

          out.be("div", null, "5", component, 0, 0);
          out.ee();
        }
      }, out, _component, "3");
    }
  }, out, _component, "p_3");

  _hello_tag({
    "renderBody": out => {
      _preserve_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "7");

          out.be("div", null, "8", component, 0, 0);
          out.ee();
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
                  out.t("Again", component);
                }
              }, out, _component, "p_10");
            }
          }, out, _component, "10");

          out.be("div", null, "11", component, 0, 0);
          out.ee();
        }
      }, out, _component, "p_9");
    }
  }, out, _component, "9");

  _preserve_tag({
    "renderBody": out => {
      _hello_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "12");

          out.be("div", null, "13", component, 0, 0);
          out.ee();
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

          out.be("div", null, "14", component, 0, 0);
          out.ee();
        }
      }, out, _component, "@b");
    }
  }, out, _component, "p_@b");

  _hello_tag({
    "renderBody": out => {
      _preserve_tag({
        "renderBody": out => {
          _hello_tag({}, out, _component, "15");

          out.be("div", null, "16", component, 0, 0);
          out.ee();
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
                  out.t("Again", component);
                }
              }, out, _component, "p_@f");
            }
          }, out, _component, "@f");

          out.be("div", null, "17", component, 0, 0);
          out.ee();
        }
      }, out, _component, "p_@e");
    }
  }, out, _component, "@e");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);