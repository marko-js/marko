// components/message.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "__tests__/components/message.marko", _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
const _marko_component$2 = {};
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=message>");
	out.w((0, import_escape_xml.x)(input.value));
	out.w("</div>");
}, {
	t: _marko_componentType$2,
	i: true,
	d: true
}, _marko_component$2);

// components/class-counter.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType$1 = "__tests__/components/class-counter.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/wrapper.marko
const _marko_componentType = "__tests__/components/wrapper.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<section id=wrapper>");
	(0, import_render_tag.default)(_marko_template$2, { "value": "Hello World" }, out, _componentDef, "1");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "2");
	out.w("</section>");
}, {
	t: _marko_componentType,
	i: true,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/wrapper.marko", _marko_template, "preserve");
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, 0, 0, 0);
}, 1);
