// components/class-greeting.marko
var import_html = require_html();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "c", _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<div id=greeting>Hello from class</div>");
}, {
	t: _marko_componentType$1,
	i: true
}, {});

// components/class-counter.marko
var import_escape_xml = require_escape_xml();
const _marko_componentType = "b", _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class>${(0, import_escape_xml.x)(state.count)}</button>`);
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>Tags <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", _marko_template$1, {}, 0, 0, 0);
	_dynamic_tag($scope0_id, "d", _marko_template, {}, 0, 0, 0);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: count });
	_resume_branch($scope0_id);
}, 1);
