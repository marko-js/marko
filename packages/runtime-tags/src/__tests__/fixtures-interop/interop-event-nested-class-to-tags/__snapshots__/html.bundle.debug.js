// components/tags-pinger.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var tags_pinger_default = _template("__tests__/components/tags-pinger.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/components/tags-pinger.marko_0");
	writeScope($scope0_id, {
		input_handlers: input.handlers,
		count
	}, "__tests__/components/tags-pinger.marko", 0, {
		input_handlers: ["input.handlers"],
		count: "2:6"
	});
	_resume_branch($scope0_id);
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_class_fn = (_component) => (count) => _component.handlePing(count);
const _marko_class_fn3 = (_component) => function(count) {
	_component.handleBump(count);
};
const _marko_component = {
	onCreate() {
		this.state = {
			pinged: "none",
			bumped: "none"
		};
	},
	handlePing(count) {
		this.state.pinged = count;
	},
	handleBump(count) {
		this.state.bumped = count;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	out.w((0, import_escape_xml.x)(state.pinged));
	out.w("</div>");
	out.w("<div id=class-bump>");
	out.w((0, import_escape_xml.x)(state.bumped));
	out.w("</div>");
	(0, import_dynamic_tag.default)(out, tags_pinger_default, () => ({ "handlers": {
		nested: { ping: f("__tests__/template.marko/h0", _marko_class_fn(_component), _component, out) },
		bump: f("__tests__/template.marko/h1", _marko_class_fn3(_component), _component, out)
	} }), null, null, null, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
