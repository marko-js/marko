// components/class-layout.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-layout.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
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
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "2");
	out.w("</div>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/class-static.marko
const _marko_componentType = "__tests__/components/class-static.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span id=static>");
	out.w("class");
	out.w("</span>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-static.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_useClass = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, 0, 0, 0);
	let count = 0;
	_dynamic_tag($scope0_id, "#text/1", input.useClass ? _marko_template$1 : "section", {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=tags>${_text_resume($scope1_id, "#text/1", count)}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:4"), "__tests__/template.marko_1_count#5/subscribe");
	}, $scope0_id), 0, $sg__input_useClass);
	_scope($scope0_id, {
		count,
		"ClosureScopes:count": $count__closures
	}, "__tests__/template.marko", 0, { count: "7:6" });
	$sg__input_useClass || _resume_branch($scope0_id);
}, 1);
