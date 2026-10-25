// a.marko
var import_escape_xml = require_escape_xml();
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "__tests__/a.marko";
const _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
const _marko_load_B = (0, import_load_tag.withLoadAssets)("__tests__/b.marko", () => _marko_template$1, flush);
const _marko_component$2 = {};
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span>");
	out.w("a ");
	out.w((0, import_escape_xml.x)(input.depth));
	out.w("</span>");
	if (input.depth > 0) {
		(0, import_render_tag.default)(_marko_load_B, { "depth": input.depth - 1 }, out, _componentDef, "1");
	}
}, {
	t: _marko_componentType$2,
	d: true
}, _marko_component$2);

// t.marko
s("__tests__/a.marko", _marko_template$2);
var t_default = _template("__tests__/t.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>t ${_text_resume($scope0_id, "#text/0", input.depth, $wg__input_depth * 2)}</span>`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", _marko_template$2, { depth: input.depth - 1 }, 0, 0, $wg__input_depth);
			$wi__input_depth && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/t.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", $wg__input_depth, $wg__input_depth);
	$wi__input_depth && _scope($scope0_id, {}, "__tests__/t.marko", 0);
});

// b.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType$1 = "__tests__/b.marko";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<span>");
	out.w("b ");
	out.w((0, import_escape_xml.x)(input.depth));
	out.w("</span>");
	if (input.depth > 0) {
		(0, import_dynamic_tag.default)(out, t_default, () => ({ "depth": input.depth - 1 }), null, null, null, _componentDef, "1");
	}
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_render_tag.default)(_marko_template$1, { "depth": 4 }, out, _componentDef, "1");
	out.w("</div>");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
