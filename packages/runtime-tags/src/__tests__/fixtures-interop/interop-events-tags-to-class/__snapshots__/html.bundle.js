// components/class-counter.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class-api>${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	handleClick() {
		this.state.count++;
		this.emit("count", this.state.count);
	}
});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_dynamic_tag($scope0_id, "a", _marko_template, { onCount: _resume(function(newCount) {
		count = newCount;
	}, "a0", $scope0_id) }, 0, 0, 0);
	_html(`<div id=tags-api>${_escape(count)}${_el_resume($scope0_id, "b")}</div>`);
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
