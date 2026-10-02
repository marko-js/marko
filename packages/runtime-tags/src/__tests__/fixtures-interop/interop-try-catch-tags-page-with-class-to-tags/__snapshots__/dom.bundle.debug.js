// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
const $await_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content2__setup = ($scope) => $await_content2__dynamicTag($scope, _marko_template);
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $catch_content = _content("__tests__/template.marko_2*content", "<div id=page-caught>page caught</div>");
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<div id=page> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("x"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content2__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
function $setup($scope) {
	$await_content2($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("v", 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => {};

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// tags/tags-child.marko
var import_vdom = require_vdom();
const $template = "<div id=tags>tags</div>";
const $walks = "b";
const $setup = () => {};
var tags_child_default = /*@__PURE__*/ _template("__tests__/tags/tags-child.marko", $template, "b");

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-wrap.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
