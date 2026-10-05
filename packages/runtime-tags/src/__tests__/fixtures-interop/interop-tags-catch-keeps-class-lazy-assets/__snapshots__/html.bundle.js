// components/child.marko
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "b";
const _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span class=child>${(0, import_escape_xml.x)(input.value)}</span>`);
}, { t: _marko_componentType$2 }, { onMount() {
	console.log("loaded");
} });

// components/class-wrap.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType$1 = "c";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("b", _marko_template$2, flush$1, [{
	type: "on-mouseover",
	selector: "body"
}]);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div class=wrap>");
	(0, import_render_tag.default)(_marko_load_Child, { "value": 1 }, out, _componentDef, "1");
	out.w("</div>");
}, { t: _marko_componentType$1 }, {});

// components/tags-try.marko
s("c", _marko_template$1);
var tags_try_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", _marko_template$1, {}, 0, 0, 0);
		_await($scope1_id, "b", rejectAfter(/* @__PURE__ */ new Error("S"), 1), (v) => {
			_scope_id();
			_html(_escape(v));
		}, 0);
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "d0");
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_try_default, null, null, null, null, _componentDef, "0");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {});
