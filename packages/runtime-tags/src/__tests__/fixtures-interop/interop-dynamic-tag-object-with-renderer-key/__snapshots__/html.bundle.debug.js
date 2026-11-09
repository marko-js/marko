// components/class-thing.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-thing.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<b>");
	out.w("class");
	out.w("</b>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-thing.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_debugKey = _write_guard($scope0_reason, 1), $wg__input_optimizeKey = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "#text/1", input.debugKey, {}, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<span>debug key</span>");
	}, $scope0_id), 0, $wg__input_debugKey);
	_dynamic_tag($scope0_id, "#text/2", input.optimizeKey, {}, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html("<span>optimize key</span>");
	}, $scope0_id), 0, $wg__input_optimizeKey);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
