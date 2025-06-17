import { t as _t } from "marko/dist/runtime/html/index.js";
const _marko_componentType = "XrquASE",
  _marko_template = _t(_marko_componentType);
export default _marko_template;
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state, $global) {
  out.w("<svg height=100 width=100><circle cx=50 cy=50 r=40 stroke=black stroke-width=3 fill=red /><a></a><style>div { color: green }</style><script>alert(\"Hello\");</script><title>Test</title><a xlink:href=\"https://developer.mozilla.org/\"><text x=10 y=25>MDN Web Docs</text></a></svg><a></a>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);