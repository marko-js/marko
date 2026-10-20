// components/class-leaf.marko
var import_attr_tag = require_attr_tag();
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "__tests__/components/class-leaf.marko";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { k: 0 };
	},
	increment() {
		this.state.k++;
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class-leaf>");
	out.w("class leaf");
	out.w("</button>");
	out.w("<span>");
	out.w((0, import_escape_xml.x)(input.label));
	out.w(" ");
	out.w((0, import_escape_xml.x)(state.k));
	out.w("</span>");
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);

// components/tags-child.marko
s("__tests__/components/class-leaf.marko", _marko_template$1);
var tags_child_default = _template("__tests__/components/tags-child.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let m = 0;
	_html(`<button id=tags-child>tags child</button>${_el_resume($scope0_id, "#button/0")}<div`);
	_attrs_content(input.foo, "#div/1", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/1")}`);
	_dynamic_tag($scope0_id, "#text/2", _marko_template$1, { label: `${input.count} ${input.n} ${m}` });
	_script($scope0_id, "__tests__/components/tags-child.marko_0_input_foo#5");
	_script($scope0_id, "__tests__/components/tags-child.marko_0");
	_scope($scope0_id, {
		input_count: input.count,
		input_n: input.n,
		m
	}, "__tests__/components/tags-child.marko", 0, {
		input_count: ["input.count"],
		input_n: ["input.n"],
		m: "2:6",
		"EventAttributes:#div/1": ["...input.foo", "4:9"]
	});
});

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "__tests__/components/class-child.marko";
const _marko_template = (0, import_html.t)(_marko_componentType);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	increment() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>");
	out.w("class");
	out.w("</button>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w("content ");
			out.w((0, import_escape_xml.x)(input.count));
			out.w(" ");
			out.w((0, import_escape_xml.x)(state.n));
		} });
	}, {
		"count": input.count,
		"n": state.n
	}), null, null, null, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);

// template.marko
s("__tests__/components/class-child.marko", _marko_template);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>tags</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", _marko_template, { count });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
