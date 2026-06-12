// components/my-button.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_data_marko = /* @__PURE__ */ __toESM(require_data_marko());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_skip_serialize = /* @__PURE__ */ __toESM(require_skip_serialize());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(_input, out, _componentDef, _component, state, $global) {
	const input = (0, import_skip_serialize.default)(_input);
	out.w(`<button${(0, import_data_marko.default)(out, _componentDef, { "onclick": _componentDef.d("click", "emit", false, ["click"]) })}>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</button>");
}, {
	t: _marko_componentType,
	s: true
}, _marko_component);

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_dynamic_tag($scope0_id, "a", _marko_template, { onClick: _resume(function() {
		count++;
	}, "a0", $scope0_id) }, _content_resume("a1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`${_escape(count)}${_el_resume($scope1_id, "a")}`);
		_subscribe($count__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id));
	writeScope($scope0_id, {
		b: count,
		Bb: $count__closures
	});
	_resume_branch($scope0_id);
}, 1);
