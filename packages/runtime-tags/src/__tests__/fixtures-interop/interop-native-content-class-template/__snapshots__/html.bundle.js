// components/class-thing.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button class=thing>thing ${(0, import_escape_xml.x)(state.clicks)}</button>`);
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let n = 0;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "a")}<button id=tags>${_text_mark($scope0_id, "c", n)}</button>${_el_mark($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "d", _marko_template, {}, 0, 0, 0);
	const attrs = {
		"data-n": n,
		content: _marko_template
	};
	_html("<div");
	_attrs_content(attrs, "e", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "e")}`);
	_if(() => {}, $scope0_id, "f", 1, 1, 0, 0, 1);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: show,
		h: n
	});
}, 1);
