// template.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button>${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});
