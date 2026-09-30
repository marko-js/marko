// components/tags-grandchild.marko
var import_html = require_html();
var tags_grandchild_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", resolveAfter("child", 2), (v) => {
		const $scope1_id = _scope_id();
		console.log("child rendered");
		let value = v;
		_html(`<button>${_text_resume($scope1_id, "b", value)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "c0");
		_scope($scope1_id, { e: value });
	});
});

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	(0, import_dynamic_tag.default)(out, tags_grandchild_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType,
	i: true
}, {});

// template.marko
s("b", _marko_template, "preserve");
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", _marko_template, {}, 0, 0, 0);
		_await($scope1_id, "b", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $sg__err_message = _serialize_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $sg__err_message * 2)}`);
		_serialize_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a0");
	_await($scope0_id, "b", resolveAfter("done", 3), (done) => {
		_scope_id();
		_html(_escape(done));
	}, 0);
}, 1);
