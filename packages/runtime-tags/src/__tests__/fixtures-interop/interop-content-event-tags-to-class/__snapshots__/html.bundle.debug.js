// components/class-inner.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-inner.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { m: 0 };
	},
	handleClick() {
		this.state.m++;
		this.emit("change");
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=inner>");
	out.w((0, import_escape_xml.x)(state.m));
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.w("</div>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/tags-mid.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
s("__tests__/components/class-inner.marko", _marko_template$1);
var tags_mid_default = _template("__tests__/components/tags-mid.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_text_resume($scope0_id, "#text/1", count)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/2", _marko_template$1, { onChange: _resume(function() {
		count++;
	}, "__tests__/components/tags-mid.marko_0/onChange", $scope0_id) }, _content_resume("__tests__/components/tags-mid.marko_1*content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html("<span>deep body</span>");
	}, $scope0_id));
	_script($scope0_id, "__tests__/components/tags-mid.marko_0");
	_scope($scope0_id, { count }, "__tests__/components/tags-mid.marko", 0, { count: "2:6" });
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	handleClick() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=outer>");
	out.w((0, import_escape_xml.x)(state.n));
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, tags_mid_default, null, (out) => {
		(0, import_render_tag.default)(_marko_template$1, { "renderBody": (out) => {
			out.w("<span>");
			out.w("deep body");
			out.w("</span>");
		} }, out, _componentDef, "2");
	}, null, null, _componentDef, "1");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "4");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
