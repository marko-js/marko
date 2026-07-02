// components/message.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/message.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=message>");
	out.w((0, import_escape_xml.x)(input.value));
	out.w("</div>");
}, {
	t: _marko_componentType$1,
	i: true,
	d: true
}, _marko_component$1);

// components/class-counter.marko
var import_attr = /* @__PURE__ */ __toESM(require_attr());
const _marko_componentType = "__tests__/components/class-counter.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class${(0, import_attr.default)("data-parent", input.count)}>`);
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-counter.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", _marko_template$1, { value: "Hello World" }, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/3", _marko_template, { count });
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
