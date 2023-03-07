import { t as _t } from "marko/dist/runtime/vdom/index.js";
const _marko_componentType = "qUg9ApxN",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element.js";
const _marko_node = _marko_createElement("div", null, "2", null, 0, 0);
import _preserve from "marko/dist/core-tags/components/preserve-tag";
const _marko_node2 = _marko_createElement("div", null, "5", null, 0, 0);
const _marko_node3 = _marko_createElement("div", null, "8", null, 0, 0);
const _marko_node4 = _marko_createElement("div", null, "11", null, 0, 0);
const _marko_node5 = _marko_createElement("div", null, "13", null, 0, 0);
const _marko_node6 = _marko_createElement("div", null, "14", null, 0, 0);
const _marko_node7 = _marko_createElement("div", null, "16", null, 0, 0);
const _marko_node8 = _marko_createElement("div", null, "17", null, 0, 0);
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";
_marko_registerComponent(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "1");
          out.n(_marko_node, _component);
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
          out.n(_marko_node2, _component);
        }
      }, out, _componentDef, "3");
    }
  }, out, _componentDef, "p_3");
  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "7");
          out.n(_marko_node3, _component);
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
          out.n(_marko_node4, _component);
        }
      }, out, _componentDef, "p_9");
    }
  }, out, _componentDef, "9");
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "12");
          out.n(_marko_node5, _component);
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
          out.n(_marko_node6, _component);
        }
      }, out, _componentDef, "@b");
    }
  }, out, _componentDef, "p_@b");
  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "15");
          out.n(_marko_node7, _component);
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
          out.n(_marko_node8, _component);
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
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent.js";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);