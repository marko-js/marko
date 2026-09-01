// components/class-layout.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-layout.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, [state.count, "hello"], null, _componentDef, "2");
	out.w("</div>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-layout.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $multiplier__closures = new Set();
	let multiplier = 1;
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, _content_resume("__tests__/template.marko_1*content", (baseCount, message) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<h1>${_text_resume($scope1_id, "#text/0", message, _serialize_guard($scope1_reason, 1))}</h1><button id=tags>${_text_resume($scope1_id, "#text/2", multiplier)} * ${_text_resume($scope1_id, "#text/3", baseCount, _serialize_guard($scope1_reason, 0) * 2)} = ${_text_resume($scope1_id, "#text/4", multiplier * baseCount, 2)}</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($multiplier__closures, _scope($scope1_id, {
			baseCount,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { baseCount: "2:15" }));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, 0);
	_scope($scope0_id, {
		multiplier,
		"ClosureScopes:multiplier": $multiplier__closures
	}, "__tests__/template.marko", 0, { multiplier: "1:6" });
	_resume_branch($scope0_id);
}, 1);
