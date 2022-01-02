import { t as _t } from "marko/dist/runtime/html/index.js";

const _marko_componentType = "jxXJawbJ",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/dist/runtime/html/helpers/escape-xml.js";
import _marko_to_string from "marko/dist/runtime/helpers/to-string.js";
import _marko_renderer from "marko/dist/runtime/components/renderer.js";
const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.w(`<div>${_marko_escapeXml(input.x)}Hello world &lt;a/>${_marko_to_string(input.x)}Hello world <a/><script>\n    Hello <b> \\u003C/script>\n  </script><style>\n    Hello <b> \\003C/style>\n  </style></div>`);
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);