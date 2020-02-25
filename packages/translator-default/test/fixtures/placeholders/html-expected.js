const _marko_template = _t(__filename);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _marko_to_string from "marko/src/runtime/helpers/to-string";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "eeAe9IyY",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  out.w(`<div>${_marko_escapeXml(input.x)}Hello world &lt;a/>${_marko_to_string(input.x)}Hello world <a/><script>\n    Hello <b> \\u003C/script>\n  </script><style>\n    Hello <b> \\003C/style>\n  </style></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);