// components/tags-child.marko
var import_html = require_html();
var tags_child_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, { t: _marko_componentType }, {});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (v) => {
				_scope_id();
				_html(_escape(v));
			}, 0);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("loading");
		}, void 0, "a1");
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_script($scope2_id, "a0", 0);
	}, void 0, "a2");
	_await($scope0_id, "b", resolveAfter("v", 1), (v) => {
		const $scope6_id = _scope_id();
		_dynamic_tag($scope6_id, "a", _marko_template, {}, 0, 0, 0);
	}, 0);
	_await($scope0_id, "c", resolveAfter("slow", 3), (v) => {
		_scope_id();
		_html(`<div id=slow>${_escape(v)}</div>`);
	}, 0);
}, 1);
