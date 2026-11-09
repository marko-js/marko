// components/class-thing.marko
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "__tests__/components/class-thing.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button class=thing>");
	out.w("thing ");
	out.w((0, import_escape_xml.x)(state.clicks));
	out.w("</button>");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-thing.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = false;
	let n = 0;
	_html(`<button id=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<button id=tags>${_text_mark($scope0_id, "#text/2", n)}</button>${_el_mark($scope0_id, "#button/1")}`);
	_dynamic_tag($scope0_id, "#text/3", _marko_template, {}, 0, 0, 0);
	const attrs = {
		"data-n": n,
		content: _marko_template
	};
	_html("<div");
	_attrs_content(attrs, "#div/4", $scope0_id, "div");
	_html(`</div>${_el_mark($scope0_id, "#div/4")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_attr_content("#section/0", $scope1_id, _marko_template, 0);
			_html("</section>");
			_scope($scope1_id, {}, "__tests__/template.marko", "11:2");
			return 0;
		}
	}, $scope0_id, "#text/5", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0_attrs#8");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		show,
		n
	}, "__tests__/template.marko", 0, {
		show: "4:6",
		n: "5:6",
		"EventAttributes:#div/4": ["...attrs", "10:9"]
	});
}, 1);
