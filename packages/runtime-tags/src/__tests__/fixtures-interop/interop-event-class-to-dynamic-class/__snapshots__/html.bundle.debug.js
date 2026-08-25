// components/class-child/component.js
var require_component = /* @__PURE__ */ __commonJSMin(((exports, module) => {
	module.exports = class {
		emitClick() {
			this.emit("click");
		}
	};
}));

// components/class-child/index.marko
var import_html = require_html();
var import_merge_attrs = /* @__PURE__ */ __toESM(require_merge_attrs());
var import_component = /* @__PURE__ */ __toESM(require_component());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-child/index.marko", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component2 = import_component.default;
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	const { renderBody, ...attrs } = input;
	out.w(`<button${(0, import_merge_attrs.default)({ "id": "child" }, attrs)}>`);
	out.w("child");
	out.w("</button>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component2);

// template.marko
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { clicked: 0 };
	},
	handleClick() {
		this.state.clicked++;
	},
	getChild() {
		return _marko_template$1;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=count>");
	out.w((0, import_escape_xml.x)(state.clicked));
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, _component.getChild(), null, null, null, null, _componentDef, "1", [[
		"click",
		"handleClick",
		false
	]]);
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
