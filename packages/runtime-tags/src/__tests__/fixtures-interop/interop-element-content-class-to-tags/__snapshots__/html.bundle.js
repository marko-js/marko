// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_html = require_html();
var import_attr_tag = require_attr_tag();
var tags_child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div");
	_attrs_content(input.foo, "a", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "a")}<span>`);
	_attr_content("b", $scope0_id, input.content, $wg__input_content);
	_html(`</span>${_el_resume($scope0_id, "b", $wg__input_content)}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// components/tags-dynamic-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var tags_dynamic_child_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_tag__OR__input_foo = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.tag, input.foo, 0, 0, $wg__input_tag__OR__input_foo);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.tag,
		e: _write_if($scope0_reason, 1) && input.foo
	});
});

// template.marko
var import_init_components_tag = /* @__PURE__ */ __toESM(require_init_components_tag());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.w("<button id=class>increment</button>");
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w(`body text ${(0, import_escape_xml.x)(state.count)}`);
		} });
		return (out) => {
			out.w(`outer text ${(0, import_escape_xml.x)(state.count)}`);
		};
	}), null, null, null, _componentDef, "1");
	(0, import_dynamic_tag.default)(out, tags_dynamic_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.w(`dynamic text ${(0, import_escape_xml.x)(state.count)}`);
		} });
	}, { "tag": "section" }), null, null, null, _componentDef, "2");
	(0, import_render_tag.default)(import_init_components_tag.default, {}, out, _componentDef, "3");
}, { t: _marko_componentType }, {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
});
