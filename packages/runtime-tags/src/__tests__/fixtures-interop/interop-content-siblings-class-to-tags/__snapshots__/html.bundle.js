// components/tags-spread.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_spread_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "d0");
	_scope($scope0_id, {});
});

// components/tags-passthrough.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_passthrough_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div${_attrs(input, "a", $scope0_id, "div")}>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 0, 0, _serialize_guard($scope0_reason, 0));
	_html(`</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, {});
});

// components/class-thing.marko
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button class=thing>thing ${(0, import_escape_xml.x)(state.clicks)}</button>`);
}, { t: _marko_componentType$1 }, {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
});

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.n)}</button>`);
	(0, import_dynamic_tag.default)(out, tags_spread_default, () => ({ "id": "spread" }), (out) => {
		out.w(`Spread ${(0, import_escape_xml.x)(state.n)}`);
	}, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_passthrough_default, () => ({ "id": "passthrough" }), (out) => {
		out.w(`Passthrough ${(0, import_escape_xml.x)(state.n)}`);
	}, null, null, _componentDef, "2");
	(0, import_dynamic_tag.default)(out, tags_spread_default, () => ({ "id": "thing" }), (out) => {
		(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "4");
	}, null, null, _componentDef, "3");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "5");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
});
