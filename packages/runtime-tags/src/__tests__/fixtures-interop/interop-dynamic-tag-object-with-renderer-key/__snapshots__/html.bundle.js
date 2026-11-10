// components/class-thing.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<b>class</b>");
}, { t: _marko_componentType }, {});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_debugKey = _write_guard($scope0_reason, 1), $wg__input_optimizeKey = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", _marko_template, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "b", input.debugKey, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<span>debug key</span>");
	}, $scope0_id), 0, $wg__input_debugKey);
	_dynamic_tag($scope0_id, "c", input.optimizeKey, {}, _content_resume("a1", () => {
		_scope_id();
		_scope_reason();
		_html("<span>optimize key</span>");
	}, $scope0_id), 0, $wg__input_optimizeKey);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
