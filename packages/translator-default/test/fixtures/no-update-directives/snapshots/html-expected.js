const _marko_template = _t();

export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/src/runtime/helpers/render-tag";
import _preserve from "marko/src/core-tags/components/preserve-tag.js";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "packages/translator-default/test/fixtures/no-update-directives/template.marko",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "1");

          out.w("<div></div>");
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

          out.w("<div></div>");
        }
      }, out, _component, "3");
    }
  }, out, _component, "p_3");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "7");

          out.w("<div></div>");
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

  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "12");

          out.w("<div></div>");
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

          out.w("<div></div>");
        }
      }, out, _component, "@b");
    }
  }, out, _component, "p_@b");

  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _component, "15");

          out.w("<div></div>");
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

  _marko_tag(_preserve, {
    "n": true,
    "renderBody": out => {
      out.w("<div class=test></div>");
    }
  }, out, _component, "18");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);