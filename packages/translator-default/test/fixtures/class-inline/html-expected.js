const _marko_template = _t(__filename);

export default _marko_template;
import _marko_renderer from "marko/src/runtime/components/renderer";
import { t as _t } from "marko/src/runtime/html";
const _marko_componentType = "6r3w2Ocu",
  _marko_component = {
    onCreate() {
      this.x = 1;
      this.y = 2;
      this.stuff();
    }
  };
_marko_template._ = _marko_renderer(
  function(input, out, _component, component, state) {
    out.w("<div></div>");
  },
  {
    ___type: _marko_componentType
  },
  _marko_component
);
_marko_template.meta = {
  id: _marko_componentType
};
