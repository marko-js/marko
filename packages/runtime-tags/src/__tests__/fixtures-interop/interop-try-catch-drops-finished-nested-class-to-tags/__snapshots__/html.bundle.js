// components/tags-leaf.marko
var import_html = require_html();
var tags_leaf_default = _template("e", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "e0");
	_scope($scope0_id, { c: count });
});

// components/class-inner.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=inner>");
	(0, import_dynamic_tag.default)(out, tags_leaf_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, { t: _marko_componentType$1 }, {});

// components/tags-child.marko
s("b", _marko_template$1);
var tags_child_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", _marko_template$1, {}, 0, 0, 0);
});

// components/class-wrap.marko
const _marko_componentType = "c";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, { t: _marko_componentType }, {});

// template.marko
s("c", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", _marko_template, {}, 0, 0, 0);
		_await($scope1_id, "b", rejectAfter(/* @__PURE__ */ new Error("ERROR!"), 0), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a0");
	_await($scope0_id, "b", resolveAfter("done", 1), (done) => {
		_scope_id();
		_html(_escape(done));
	}, 0);
}, 1);
