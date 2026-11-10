// components/class-thing.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span>class</span>");
}, { t: _marko_componentType }, {});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", _marko_template, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "b", { render: "not a function" }, {}, _content_resume("a0", () => {
		_scope_id();
		_scope_reason();
		_html("<span>body</span>");
	}, $scope0_id), 0, 0);
}, 1);
