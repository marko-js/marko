// components/tags-child.marko
var import_escape_xml = require_escape_xml();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var tags_child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", rejectAfter(/* @__PURE__ */ new Error("x"), 1), (value) => {
			_scope_id();
			_html(`<div id=tags>${_escape(value)}</div>`);
		}, 0);
	}, void 0, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", resolveAfter("caught", 2), (v) => {
			_scope_id();
			_html("<div id=caught>CAUGHT</div>");
		}, 0);
	}, void 0, "b0");
});

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
const _marko_componentType = "a";
const _marko_template = (0, import_html.t)(_marko_componentType);
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
			out.w(`<div id=first>${(0, import_escape_xml.x)(value)}</div>`);
		} });
	}, {
		"_provider": resolveAfter("first", 3),
		"_name": "resolveAfter(\"first\", 3)"
	}), out, _componentDef, "0");
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
			out.w(`<div id=slow>${(0, import_escape_xml.x)(value)}</div>`);
		} });
	}, {
		"_provider": resolveAfter("slow", 5),
		"_name": "resolveAfter(\"slow\", 5)"
	}), out, _componentDef, "2");
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("then", { "renderBody": (out) => {
			(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "5");
		} });
	}, {
		"_provider": resolveAfter("fast", 1),
		"_name": "resolveAfter(\"fast\", 1)"
	}), out, _componentDef, "4");
}, {
	t: _marko_componentType,
	i: true
}, {});
