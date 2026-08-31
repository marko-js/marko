// components/class-layout.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-layout.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=class>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</div>");
	out.w("<div>");
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, [state.count, () => _component.increment()], null, _componentDef, "2");
	out.w("</div>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-layout.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {}, _content_resume("__tests__/template.marko_1*content", (count, onBump) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button id=tags>${_text_resume($scope1_id, "#text/1", count, _serialize_guard($scope1_reason, 0))}</button>${_el_resume($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		writeScope($scope1_id, { onBump }, "__tests__/template.marko", "2:2", { onBump: "2:22" });
	}, $scope0_id), 0, 0);
}, 1);
