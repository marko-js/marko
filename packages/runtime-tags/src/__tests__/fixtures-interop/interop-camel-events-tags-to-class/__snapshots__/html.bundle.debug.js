// components/class-widget.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-widget.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = { handleClick() {
	this.emit("value-changed", "changed");
} };
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class-api>");
	out.w((0, import_escape_xml.x)(input.onLabel));
	out.w("</button>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-widget.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let received = "none";
	_dynamic_tag($scope0_id, "#text/0", _marko_template, {
		onLabel: "the-label",
		onValueChanged: _resume(function(value) {
			received = value;
		}, "__tests__/template.marko_0/onValueChanged", $scope0_id)
	}, 0, 0, 0);
	_html(`<div id=tags-api>${_escape(received)}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
