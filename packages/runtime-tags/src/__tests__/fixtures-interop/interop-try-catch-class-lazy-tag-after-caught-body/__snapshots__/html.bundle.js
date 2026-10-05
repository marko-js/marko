// components/child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span class=child>${(0, import_escape_xml.x)(input.value)}</span>`);
}, { t: _marko_componentType$1 }, {});

// components/class-wrap.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "c";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("b", _marko_template$1, flush);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div class=wrap>");
	(0, import_render_tag.default)(_marko_load_Child, { "value": 1 }, out, _componentDef, "1");
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
		_html(_escape((() => {
			throw new Error("S");
		})()));
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "a", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {});
	}, void 0, "a0");
	_dynamic_tag($scope0_id, "b", _marko_template, {}, 0, 0, 0);
}, 1);
