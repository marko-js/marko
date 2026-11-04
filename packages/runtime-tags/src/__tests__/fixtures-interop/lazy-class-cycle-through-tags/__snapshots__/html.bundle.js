// a.marko
var import_escape_xml = require_escape_xml();
var import_load_tag = require_load_tag();
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$2 = "a";
const _marko_template$2 = (0, import_html.t)(_marko_componentType$2);
const _marko_load_B = (0, import_load_tag.withLoadAssets)("b", () => _marko_template$1, flush);
_marko_template$2._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span>a ${(0, import_escape_xml.x)(input.depth)}</span>`);
	if (input.depth > 0) (0, import_render_tag.default)(_marko_load_B, { "depth": input.depth - 1 }, out, _componentDef, "1");
}, { t: _marko_componentType$2 }, {});

// t.marko
s("a", _marko_template$2);
var t_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_depth = _write_guard($scope0_reason, 0), $wi__input_depth = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<span>t ${_text_resume($scope0_id, "a", input.depth, $wg__input_depth * 2)}</span>`);
	_if(() => {
		if (input.depth > 0) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", _marko_template$2, { depth: input.depth - 1 }, 0, 0, $wg__input_depth);
			$wi__input_depth && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", $wg__input_depth, $wg__input_depth);
	$wi__input_depth && _scope($scope0_id, {});
});

// b.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType$1 = "b";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<span>b ${(0, import_escape_xml.x)(input.depth)}</span>`);
	if (input.depth > 0) (0, import_dynamic_tag.default)(out, t_default, () => ({ "depth": input.depth - 1 }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType$1 }, {});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "d";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div>");
	(0, import_render_tag.default)(_marko_template$1, { "depth": 4 }, out, _componentDef, "1");
	out.w("</div>");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {});
