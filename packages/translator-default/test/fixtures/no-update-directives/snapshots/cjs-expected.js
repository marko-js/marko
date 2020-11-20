"use strict";

exports.__esModule = true;
exports.default = void 0;

var _index = _interopRequireDefault(require("./components/hello/index.marko"));

var _renderTag = _interopRequireDefault(require("marko/src/runtime/helpers/render-tag"));

var _preserveTag = _interopRequireDefault(require("../../../../marko/src/core-tags/components/preserve-tag.js"));

var _renderer = _interopRequireDefault(require("marko/src/runtime/components/renderer"));

var _html = require("marko/src/runtime/html");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const _marko_template = (0, _html.t)();

var _default = _marko_template;
exports.default = _default;
const _marko_componentType = "packages/translator-default/test/fixtures/no-update-directives/template.marko",
      _marko_component = {};
_marko_template._ = (0, _renderer.default)(function (input, out, _component, component, state) {
  (0, _renderTag.default)(_preserveTag.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_index.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index.default, {}, out, _component, "1");
          out.w("<div></div>");
        }
      }, out, _component, "0");
    }
  }, out, _component, "p_0");
  (0, _renderTag.default)(_preserveTag.default, {
    "i": x,
    "renderBody": out => {
      (0, _renderTag.default)(_index.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_preserveTag.default, {
            "i": (a, b),
            "renderBody": out => {
              (0, _renderTag.default)(_index.default, {}, out, _component, "4");
            }
          }, out, _component, "p_4");
          out.w("<div></div>");
        }
      }, out, _component, "3");
    }
  }, out, _component, "p_3");
  (0, _renderTag.default)(_index.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index.default, {}, out, _component, "7");
          out.w("<div></div>");
        }
      }, out, _component, "p_6");
    }
  }, out, _component, "6");
  (0, _renderTag.default)(_index.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "i": x,
        "renderBody": out => {
          (0, _renderTag.default)(_index.default, {
            "renderBody": out => {
              (0, _renderTag.default)(_preserveTag.default, {
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
  (0, _renderTag.default)(_preserveTag.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_index.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index.default, {}, out, _component, "12");
          out.w("<div></div>");
        }
      }, out, _component, "@a");
    }
  }, out, _component, "p_@a");
  (0, _renderTag.default)(_preserveTag.default, {
    "i": x,
    "renderBody": out => {
      (0, _renderTag.default)(_index.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_preserveTag.default, {
            "i": (a, b),
            "renderBody": out => {
              (0, _renderTag.default)(_index.default, {}, out, _component, "@c");
            }
          }, out, _component, "p_@c");
          out.w("<div></div>");
        }
      }, out, _component, "@b");
    }
  }, out, _component, "p_@b");
  (0, _renderTag.default)(_index.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "renderBody": out => {
          (0, _renderTag.default)(_index.default, {}, out, _component, "15");
          out.w("<div></div>");
        }
      }, out, _component, "p_@d");
    }
  }, out, _component, "@d");
  (0, _renderTag.default)(_index.default, {
    "renderBody": out => {
      (0, _renderTag.default)(_preserveTag.default, {
        "i": x,
        "renderBody": out => {
          (0, _renderTag.default)(_index.default, {
            "renderBody": out => {
              (0, _renderTag.default)(_preserveTag.default, {
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
  (0, _renderTag.default)(_preserveTag.default, {
    "n": true,
    "renderBody": out => {
      out.w("<div class=test></div>");
    }
  }, out, _component, "18");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);