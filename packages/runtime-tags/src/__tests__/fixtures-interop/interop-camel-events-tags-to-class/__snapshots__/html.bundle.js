// components/class-widget.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class-api>${(0, import_escape_xml.x)(input.onLabel)}</button>`);
}, { t: _marko_componentType }, { handleClick() {
	this.emit("value-changed", "changed");
} });

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let received = "none";
	_dynamic_tag($scope0_id, "a", _marko_template, {
		onLabel: "the-label",
		onValueChanged: _resume(function(value) {
			received = value;
		}, "a0", $scope0_id)
	}, 0, 0, 0);
	_html(`<div id=tags-api>${_escape(received)}${_el_resume($scope0_id, "b")}</div>`);
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
