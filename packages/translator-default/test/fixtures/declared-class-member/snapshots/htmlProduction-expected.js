function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "xmfoovwT",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
class MyClass {
  constructor() {
    _defineProperty(this, "y", 2);
  }
}
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {
  onCreate() {
    this.y = 2
  }
};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {}, {
  t: _marko_componentType
}, _marko_component);