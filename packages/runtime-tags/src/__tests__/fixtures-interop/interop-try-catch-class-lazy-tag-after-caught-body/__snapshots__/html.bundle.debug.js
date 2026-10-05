// components/child.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/child.marko";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span class=child>");
	out.w((0, import_escape_xml.x)(input.value));
	out.w("</span>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/class-wrap.marko
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/components/class-wrap.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_load_Child = (0, import_load_tag.withLoadAssets)("__tests__/components/child.marko", _marko_template$1, flush);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div class=wrap>");
	(0, import_render_tag.default)(_marko_load_Child, { "value": 1 }, out, _componentDef, "1");
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
		_dynamic_tag($scope1_id, "#text/0", _marko_template, {}, 0, 0, 0);
		_html(_escape((() => {
			throw new Error("S");
		})()));
	}, void 0, (err) => {
		const $scope2_reason = _scope_reason(), $wg__err_message = _write_guard($scope2_reason, 0);
		const $scope2_id = _scope_id();
		_html(`caught ${_text_resume($scope2_id, "#text/0", err.message, $wg__err_message * 2)}`);
		_write_if($scope2_reason, 0) && _scope($scope2_id, {}, "__tests__/template.marko", "5:4");
	}, void 0, "__tests__/template.marko_2*content");
	_dynamic_tag($scope0_id, "#text/1", _marko_template, {}, 0, 0, 0);
}, 1);
