const _marko_template = _t();

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _preserve from "../../../../marko/src/core-tags/components/preserve-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("packages/translator-default/test/fixtures/no-update-directives/template.marko", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "1");

          out.e("div", null, "2", component, 0, 0);
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

          out.e("div", null, "5", component, 0, 0);
        }
      }, out, _component, "3");
    }
  }, out, _component, "p_3");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "7");

          out.e("div", null, "8", component, 0, 0);
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

          out.e("div", null, "11", component, 0, 0);
        }
      }, out, _component, "p_9");
    }
  }, out, _component, "9");

  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "12");

          out.e("div", null, "13", component, 0, 0);
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

          out.e("div", null, "14", component, 0, 0);
        }
      }, out, _component, "@b");
    }
  }, out, _component, "p_@b");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "15");

          out.e("div", null, "16", component, 0, 0);
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

          out.e("div", null, "17", component, 0, 0);
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
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);