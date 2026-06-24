// components/message.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "c", _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div id=message>${(0, import_escape_xml.x)(input.value)}</div>`);
}, {
	t: _marko_componentType$2,
	i: true
}, {});

// components/class-counter.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType$1 }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});

// components/wrapper.marko
const _marko_componentType = "d", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<section id=wrapper>");
	(0, import_render_tag.default)(_marko_template$2, { "value": "Hello World" }, out, _componentDef, "1");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "2");
	out.w("</section>");
}, {
	t: _marko_componentType,
	i: true
}, {});

// template.marko
s("d", _marko_template, "preserve");
var template_default = _template("a", (input) => {
	_scope_reason();
	_dynamic_tag(_scope_id(), "a", _marko_template, {}, 0, 0, 0);
}, 1);
