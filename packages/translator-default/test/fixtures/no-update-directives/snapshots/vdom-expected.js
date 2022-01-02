import { t as _t } from "marko/src/runtime/vdom/index.js";

const _marko_componentType = "packages/translator-default/test/fixtures/no-update-directives/template.marko",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag.js";
import _preserve from "marko/src/core-tags/components/preserve-tag";
import _marko_renderer from "marko/src/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "1");

          out.e("div", null, "2", _component, 0, 0);
        }
      }, out, _componentDef, "0");
    }
  }, out, _componentDef, "p_0");

  _marko_tag(_preserve, {
    "i": x,
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_preserve, {
            "i": (a, b),
            "renderBody": out => {
              _marko_tag(_hello, {}, out, _componentDef, "4");
            }
          }, out, _componentDef, "p_4");

          out.e("div", null, "5", _component, 0, 0);
        }
      }, out, _componentDef, "3");
    }
  }, out, _componentDef, "p_3");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "7");

          out.e("div", null, "8", _component, 0, 0);
        }
      }, out, _componentDef, "p_6");
    }
  }, out, _componentDef, "6");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "i": x,
        "renderBody": out => {
          _marko_tag(_hello, {
            "renderBody": out => {
              _marko_tag(_preserve, {
                "i": (a, b),
                "renderBody": out => {
                  out.t("Again", _component);
                }
              }, out, _componentDef, "p_10");
            }
          }, out, _componentDef, "10");

          out.e("div", null, "11", _component, 0, 0);
        }
      }, out, _componentDef, "p_9");
    }
  }, out, _componentDef, "9");

  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "12");

          out.e("div", null, "13", _component, 0, 0);
        }
      }, out, _componentDef, "@a");
    }
  }, out, _componentDef, "p_@a");

  _marko_tag(_preserve, {
    "i": x,
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_preserve, {
            "i": (a, b),
            "renderBody": out => {
              _marko_tag(_hello, {}, out, _componentDef, "@c");
            }
          }, out, _componentDef, "p_@c");

          out.e("div", null, "14", _component, 0, 0);
        }
      }, out, _componentDef, "@b");
    }
  }, out, _componentDef, "p_@b");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "15");

          out.e("div", null, "16", _component, 0, 0);
        }
      }, out, _componentDef, "p_@d");
    }
  }, out, _componentDef, "@d");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "i": x,
        "renderBody": out => {
          _marko_tag(_hello, {
            "renderBody": out => {
              _marko_tag(_preserve, {
                "i": (a, b),
                "renderBody": out => {
                  out.t("Again", _component);
                }
              }, out, _componentDef, "p_@f");
            }
          }, out, _componentDef, "@f");

          out.e("div", null, "17", _component, 0, 0);
        }
      }, out, _componentDef, "p_@e");
    }
  }, out, _componentDef, "@e");

  _marko_tag(_preserve, {
    "n": true,
    "renderBody": out => {
      out.e("div", {
        "class": "test"
      }, "18", _component, 0, 1);
    }
  }, out, _componentDef, "18");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);