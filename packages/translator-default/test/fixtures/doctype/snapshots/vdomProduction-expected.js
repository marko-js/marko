import { t as _t } from "marko/dist/runtime/vdom";

const _marko_componentType = "VJrYycFN",
      _marko_template = _t(_marko_componentType);

export default _marko_template;
import _marko_createElement from "marko/dist/runtime/vdom/helpers/v-element";

const _marko_node = _marko_createElement("head", null, "1", null, 1, 0).e("title", null, null, null, 1, 0).t("Title of the document");

import _marko_renderer from "marko/dist/runtime/components/renderer";
import { r as _marko_registerComponent } from "marko/dist/runtime/components/registry";

_marko_registerComponent(_marko_componentType, () => _marko_template);

const _marko_component = {};
_marko_template._ = _marko_renderer(function (input, out, _componentDef, _component, state) {
  out.be("html", null, "0", _component, null, 0);
  out.n(_marko_node, _component);
  out.be("body", null, "2", _component, null, 0);
  out.t("The content of the document......", _component);
  out.ee();
  out.ee();
}, {
  t: _marko_componentType,
  i: true
}, _marko_component);
import _marko_defineComponent from "marko/dist/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);