import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "qUg9ApxN",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _hello from "./components/hello/index.marko";
import _marko_tag from "marko/dist/runtime/helpers/render-tag.js";
import _preserve from "marko/dist/core-tags/components/preserve-tag";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "1");
          out.w("<div></div>");
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
          out.w("<div></div>");
        }
      }, out, _componentDef, "3");
    }
  }, out, _componentDef, "p_3");
  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "7");
          out.w("<div></div>");
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
                  out.w("Again");
                }
              }, out, _componentDef, "p_10");
            }
          }, out, _componentDef, "10");
          out.w("<div></div>");
        }
      }, out, _componentDef, "p_9");
    }
  }, out, _componentDef, "9");
  _marko_tag(_preserve, {
    "renderBody": out => {
      _marko_tag(_hello, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "12");
          out.w("<div></div>");
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
          out.w("<div></div>");
        }
      }, out, _componentDef, "@b");
    }
  }, out, _componentDef, "p_@b");
  _marko_tag(_hello, {
    "renderBody": out => {
      _marko_tag(_preserve, {
        "renderBody": out => {
          _marko_tag(_hello, {}, out, _componentDef, "15");
          out.w("<div></div>");
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
                  out.w("Again");
                }
              }, out, _componentDef, "p_@f");
            }
          }, out, _componentDef, "@f");
          out.w("<div></div>");
        }
      }, out, _componentDef, "p_@e");
    }
  }, out, _componentDef, "@e");
  _marko_tag(_preserve, {
    "n": true,
    "renderBody": out => {
      out.w("<div class=test></div>");
    }
  }, out, _componentDef, "18");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);