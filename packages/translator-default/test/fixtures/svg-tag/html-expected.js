const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "hdShPuzM",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w("<svg height=\"100\" width=\"100\"><circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\"><a></a><style>div { color: green }</style><script>alert(\"Hello\");</script><title>Test</title></svg><a></a>");
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);