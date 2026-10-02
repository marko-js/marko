// components/tags-child.marko
var import_html = require_html();
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>child</span>");
});

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-wrap.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-wrap.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "#text/0", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "#text/0", rejectAfter(new Error("ERROR!"), 1), (v) => {
				const $scope5_id = _scope_id();
				_html(_escape(v));
			}, 0);
		}, () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html("loading");
		}, void 0, "__tests__/template.marko_4*content");
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_script($scope2_id, "__tests__/template.marko_2", 0);
	}, void 0, "__tests__/template.marko_2*content");
	_await($scope0_id, "#text/1", resolveAfter("v", 1), (v) => {
		const $scope6_id = _scope_id();
		_dynamic_tag($scope6_id, "#text/0", _marko_template, {}, 0, 0, 0);
	}, 0);
	_await($scope0_id, "#text/2", resolveAfter("slow", 3), (v) => {
		const $scope7_id = _scope_id();
		_html(`<div id=slow>${_escape(v)}</div>`);
	}, 0);
}, 1);
