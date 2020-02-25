const _marko_template = _t(__filename);

export default _marko_template;
import _marko_dynamic_tag from "marko/src/runtime/helpers/dynamic-tag";
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/dom";
import { r as _marko_registerComponent } from "marko/src/runtime/components/registry-browser";

const _marko_componentType = _marko_registerComponent("uRMbWunz", () => _marko_template),
      _marko_component = {};

_marko_template._ = _marko_renderer(function (input, out, _component, component, state) {
  function _renderTree(out, node) {
    out.t("Name: ");
    out.t(node.name);
    out.t(" Children: ");

    if (node.children) {
      out.be("ul", null, "1", component, null, 0);
      {
        let _keyValue = 0;

        for (const child of node.children) {
          const _keyScope = `[${_keyValue++}]`;
          out.be("li", null, "2" + _keyScope, component, null, 0);

          _marko_dynamic_tag(out, _renderTree, () => child, null, null, null, _component, "3" + _keyScope);

          out.ee();
        }
      }
      out.ee();
    }
  }

  _marko_dynamic_tag(out, _renderTree, () => input.node, null, null, null, _component, "4");
}, {
  ___type: _marko_componentType,
  ___implicit: true
}, _marko_component);
import _marko_defineComponent from "marko/src/runtime/components/defineComponent";
_marko_template.Component = _marko_defineComponent(_marko_component, _marko_template._);