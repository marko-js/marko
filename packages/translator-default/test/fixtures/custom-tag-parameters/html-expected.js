const _marko_template = _t(__filename);

export default _marko_template;
import { x as _marko_escapeXml } from "marko/src/runtime/html/helpers/escape-xml";
import _customTag from "./components/custom-tag.marko";
import _marko_load_tag from "marko/src/runtime/helpers/load-tag";

const _customTag_tag = _marko_load_tag(_customTag);

import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "bs1OMu7X",
      _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  _customTag_tag({
    "renderBody": (out, a, b, {
      c
    }) => {
      out.w(`<div>${_marko_escapeXml(a)} ${_marko_escapeXml(b)} ${_marko_escapeXml(c)}</div>`);
    }
  }, out, _component, "0");
}, {
  ___type: _marko_componentType
}, _marko_component);