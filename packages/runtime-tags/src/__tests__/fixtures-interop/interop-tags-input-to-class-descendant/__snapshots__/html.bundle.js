// components/self-counter.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "c";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class-api>${(0, import_escape_xml.x)(input.label)}: ${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType$1 }, {
	onCreate() {
		this.state = { count: 0 };
	},
	handleClick() {
		this.state.count++;
	}
});

// components/class-wrapper.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<section>");
	(0, import_render_tag.default)(_marko_template$1, { "label": input.label }, out, _componentDef, "1");
	out.w("</section>");
}, {
	t: _marko_componentType,
	i: true
}, {});

// template.marko
function label() {
	return "hi";
}
s("b", _marko_template, "preserve");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div id=tags-api>tags</div>");
	_dynamic_tag($scope0_id, "a", _marko_template, { label: label() }, 0, 0, 0);
}, 1);
