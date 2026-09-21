// components/class-layout.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button><div>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "2");
	out.w("</div>");
}, { t: _marko_componentType$1 }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});

// components/class-static.marko
const _marko_componentType = "c", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span id=static>class</span>");
}, { t: _marko_componentType }, {});

// template.marko
s("c", _marko_template);
var template_default = _template("a", (input) => {
	const $sg__input_useClass = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", _marko_template, {}, 0, 0, 0);
	let count = 0;
	_dynamic_tag($scope0_id, "b", input.useClass ? _marko_template$1 : "section", {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button id=tags>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a1");
		_subscribe($count__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $sg__input_useClass);
	_scope($scope0_id, {
		f: count,
		g: $count__closures
	});
	$sg__input_useClass || _resume_branch($scope0_id);
}, 1);
