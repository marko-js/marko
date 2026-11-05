// components/my-button.marko
var import_html = require_html();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_data_marko = /* @__PURE__ */ __toESM(require_data_marko());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_skip_serialize = /* @__PURE__ */ __toESM(require_skip_serialize());
const _marko_componentType = "__tests__/components/my-button.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(_input, out, _componentDef, _component, state, $global) {
	const input = (0, import_skip_serialize.default)(_input);
	out.w(`<button${(0, import_data_marko.default)(out, _componentDef, { "onclick": _componentDef.d("click", "emit", false, ["click"]) })}>`);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</button>");
}, {
	t: _marko_componentType,
	s: true,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/my-button.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	const $show__closures = new Set();
	let count = 0;
	let show = true;
	_dynamic_tag($scope0_id, "#text/0", _marko_template, { onClick: _resume(function() {
		count++;
		show = !show;
	}, "__tests__/template.marko_0/onClick", $scope0_id) }, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_if(() => {
			if (show) {
				const $scope2_id = _scope_id();
				_html(`${_text_mark($scope2_id, "#text/0", count)}<i></i>`);
				_subscribe($count__closures, _scope($scope2_id, {}, "__tests__/template.marko", "7:4"), "__tests__/template.marko_2_count#0:1/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0");
		_subscribe($show__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_show#0:2/subscribe");
	}, $scope0_id));
	_scope($scope0_id, {
		count,
		show,
		"ClosureScopes:count/4": $count__closures,
		"ClosureScopes:show/5": $show__closures
	}, "__tests__/template.marko", 0, {
		count: "1:6",
		show: "2:6"
	});
}, 1);
