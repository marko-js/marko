// components/class-counter.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-counter.marko", _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	handleClick() {
		this.state.count++;
		this.emit("count", this.state.count);
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class-api>");
	out.w((0, import_escape_xml.x)(state.count));
	out.w("</button>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_dynamic_tag($scope0_id, "#text/0", _marko_template, { onCount: _resume(function(newCount) {
		count = newCount;
	}, "__tests__/template.marko_0/onCount", $scope0_id) }, 0, 0, 0);
	_html(`<div id=tags-api>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</div>`);
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
