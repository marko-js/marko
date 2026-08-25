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
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	const { renderBody, ...attrs } = input;
	out.w(`<button${(0, import_merge_attrs.default)({ "id": "child" }, attrs)}>child</button>`);
}, { t: _marko_componentType$1 }, import_component.default);

// template.marko
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "a", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<div id=count>${(0, import_escape_xml.x)(state.clicked)}</div>`);
	(0, import_dynamic_tag.default)(out, _component.getChild(), null, null, null, null, _componentDef, "1", [[
		"click",
		"handleClick",
		false
	]]);
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "2");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { clicked: 0 };
	},
	handleClick() {
		this.state.clicked++;
	},
	getChild() {
		return _marko_template$1;
	}
});
