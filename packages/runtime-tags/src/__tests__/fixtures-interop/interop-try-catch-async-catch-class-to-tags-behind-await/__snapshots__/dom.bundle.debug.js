// components/tags-child.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=caught>CAUGHT</div>");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__await_promise($scope, resolveAfter("caught", 2));
};
const $catch_content = _content("__tests__/components/tags-child.marko_2*content", "<!><!><!>", "b%", $catch_content__setup);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<div id=tags> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("x"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, "b%c", $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer$1 = /* @__PURE__ */ __toESM(require_renderer$1());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer$1.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
			out.be("div", { "id": "first" }, "1", _component, null, 1);
			out.t(value, _component);
			out.ee();
		} });
	}, {
		"_provider": resolveAfter("first", 3),
		"_name": "resolveAfter(\"first\", 3)"
	}), out, _componentDef, "0");
	(0, import_render_tag.default)(import_renderer.default, (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("then", { "renderBody": (out, value) => {
			out.be("div", { "id": "slow" }, "3", _component, null, 1);
			out.t(value, _component);
			out.ee();
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
	i: true,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
