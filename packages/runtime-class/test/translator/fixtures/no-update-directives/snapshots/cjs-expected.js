"use strict";

exports.__esModule = true;
exports.default = void 0;
var _index = require("marko/src/runtime/html/index.js");
var _index2 = _interopRequireDefault(require("./components/hello/index.marko"));
var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag.js"));
var _preserveTag = _interopRequireDefault(require("marko/src/core-tags/components/preserve-tag.js"));
var _dataMarko = _interopRequireDefault(require("marko/src/runtime/html/helpers/data-marko.js"));
var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer.js"));
function _interopRequireDefault(e) { return (e && e.__esModule ? e : { default: e }); }
const _marko_componentType = "__tests__/template.marko",
  _marko_template = (0, _index.t)(_marko_componentType);
var _default = exports.default = _marko_template;
const _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _componentDef, _component, state, $global) {
  (0, _renderTag.default)(_preserveTag.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_index2.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "1");
          out.w("<div></div>");
        }
      }, out, _componentDef, "0");
    }
  }, out, _componentDef, "p_0");
  (0, _renderTag.default)(_preserveTag.default, {
    "i": x,
    "renderBody": out => {
      (0, _renderTag.default)(_index2.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_preserveTag.default, {
            "i": (a, b),
            "renderBody": out => {
              (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "4");
            }
          }, out, _componentDef, "p_4");
          out.w("<div></div>");
        }
      }, out, _componentDef, "3");
    }
  }, out, _componentDef, "p_3");
  (0, _renderTag.default)(_index2.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "7");
          out.w("<div></div>");
        }
      }, out, _componentDef, "p_6");
    }
  }, out, _componentDef, "6");
  (0, _renderTag.default)(_index2.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "i": x,
        "renderBody": out => {
          (0, _renderTag.default)(_index2.default, {
            "renderBody": out => {
              (0, _renderTag.default)(_preserveTag.default, {
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
  (0, _renderTag.default)(_preserveTag.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_index2.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "12");
          out.w("<div></div>");
        }
      }, out, _componentDef, "@a");
    }
  }, out, _componentDef, "p_@a");
  (0, _renderTag.default)(_preserveTag.default, {
    "i": x,
    "renderBody": out => {
      (0, _renderTag.default)(_index2.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_preserveTag.default, {
            "i": (a, b),
            "renderBody": out => {
              (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "@c");
            }
          }, out, _componentDef, "p_@c");
          out.w("<div></div>");
        }
      }, out, _componentDef, "@b");
    }
  }, out, _componentDef, "p_@b");
  (0, _renderTag.default)(_index2.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index2.default, {}, out, _componentDef, "15");
          out.w("<div></div>");
        }
      }, out, _componentDef, "p_@d");
    }
  }, out, _componentDef, "@d");
  (0, _renderTag.default)(_index2.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "i": x,
        "renderBody": out => {
          (0, _renderTag.default)(_index2.default, {
            "renderBody": out => {
              (0, _renderTag.default)(_preserveTag.default, {
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
  (0, _renderTag.default)(_preserveTag.default, {
    "n": true,
    "renderBody": out => {
      out.w(`<div${(0, _dataMarko.default)(out, _componentDef, 0, "18")} class=test></div>`);
    }
  }, out, _componentDef, "18");
}, {
  t: _marko_componentType,
  i: true,
  d: true
}, _marko_component);