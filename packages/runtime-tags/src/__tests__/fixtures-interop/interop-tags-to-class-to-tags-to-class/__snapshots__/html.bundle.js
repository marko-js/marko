// components/class-leaf.marko
var import_attr_tag = require_attr_tag();
var import_html = require_html();
var import_escape_xml = require_escape_xml();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType$1 = "c";
const _marko_template$1 = (0, import_html.t)(_marko_componentType$1);
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w(`<button id=class-leaf>class leaf</button><span>${(0, import_escape_xml.x)(input.label)} ${(0, import_escape_xml.x)(state.k)}</span>`);
}, { t: _marko_componentType$1 }, {
	onCreate() {
		this.state = { k: 0 };
	},
	increment() {
		this.state.k++;
	}
});

// components/tags-child.marko
s("c", _marko_template$1);
var tags_child_default = _template("d", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let m = 0;
	_html(`<button id=tags-child>tags child</button>${_el_resume($scope0_id, "a")}<div`);
	_attrs_content(input.foo, "b", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "b")}`);
	_dynamic_tag($scope0_id, "c", _marko_template$1, { label: `${input.count} ${input.n} ${m}` });
	_script($scope0_id, "d0");
	_script($scope0_id, "d1");
	_scope($scope0_id, {
		g: input.count,
		h: input.n,
		i: m
	});
});

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "b";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>class</button>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w(`content ${(0, import_escape_xml.x)(input.count)} ${(0, import_escape_xml.x)(state.n)}`);
		} });
	}, {
		"count": input.count,
		"n": state.n
	}), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { n: 0 };
	},
	increment() {
		this.state.n++;
	}
});

// template.marko
s("b", _marko_template);
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>tags</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", _marko_template, { count });
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: count });
}, 1);
