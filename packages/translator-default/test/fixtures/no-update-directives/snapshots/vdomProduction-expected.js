const _marko_template = _t();

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag";
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("div", null, "2", null, 0, 0);

import _preserve from "marko/dist/core-tags/components/preserve-tag.js";

const _marko_node2 = _marko_createElement("div", null, "5", null, 0, 0);

const _marko_node3 = _marko_createElement("div", null, "8", null, 0, 0);

const _marko_node4 = _marko_createElement("div", null, "11", null, 0, 0);

const _marko_node5 = _marko_createElement("div", null, "13", null, 0, 0);

const _marko_node6 = _marko_createElement("div", null, "14", null, 0, 0);

const _marko_node7 = _marko_createElement("div", null, "16", null, 0, 0);

const _marko_node8 = _marko_createElement("div", null, "17", null, 0, 0);

import _marko_renderer from "marko/dist/runtime/components/renderer";
import { t as _t } from "marko/dist/runtime/vdom";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("qUg9ApxN", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "1");

          out.n(_marko_node, component);
        }
      }, out, _component, "0");
    }
  }, out, _component, "p_0");

  _marko_tag(_preserve, {
    "i": x,
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_preserve, {
            "i": (a, b),
            "renderBody": out => {
              _marko_tag(_hello, {}, out, _component, "4");
            }
          }, out, _component, "p_4");

          out.n(_marko_node2, component);
        }
      }, out, _component, "3");
    }
  }, out, _component, "p_3");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "7");

          out.n(_marko_node3, component);
        }
      }, out, _component, "p_6");
    }
  }, out, _component, "6");

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
                  out.t("Again", component);
                }
              }, out, _component, "p_10");
            }
          }, out, _component, "10");

          out.n(_marko_node4, component);
        }
      }, out, _component, "p_9");
    }
  }, out, _component, "9");

  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "12");

          out.n(_marko_node5, component);
        }
      }, out, _component, "@a");
    }
  }, out, _component, "p_@a");

  _marko_tag(_preserve, {
    "i": x,
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_preserve, {
            "i": (a, b),
            "renderBody": out => {
              _marko_tag(_hello, {}, out, _component, "@c");
            }
          }, out, _component, "p_@c");

          out.n(_marko_node6, component);
        }
      }, out, _component, "@b");
    }
  }, out, _component, "p_@b");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "15");

          out.n(_marko_node7, component);
        }
      }, out, _component, "p_@d");
    }
  }, out, _component, "@d");

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
                  out.t("Again", component);
                }
              }, out, _component, "p_@f");
            }
          }, out, _component, "@f");

          out.n(_marko_node8, component);
        }
      }, out, _component, "p_@e");
    }
  }, out, _component, "@e");

  _marko_tag(_preserve, {
    "n": true,
    "renderBody": out => {
      out.e("div", {
        "class": "test"
      }, "18", component, 0, 1);
    }
  }, out, _component, "18");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);