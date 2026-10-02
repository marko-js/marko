// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/tags-child.marko
var import_vdom = require_vdom();
const $template$1 = "<span>child</span>";
const $walks$1 = "b";
const $setup$1 = () => {};
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template$1, "b");

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

// template.marko
const $template = "<!><!><!><!><!>";
const $walks = "b%b%b%c";
const $await_content3__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content3__$params = ($scope, $params4) => $await_content3__v($scope, $params4[0]);
const $await_content2__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content2__setup = ($scope) => $await_content2__dynamicTag($scope, _marko_template);
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $placeholder_content = _content("__tests__/template.marko_4*content", "loading");
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content2__setup = ($scope) => {
	$await_content($scope);
	$try_content2__await_promise($scope, rejectAfter(new Error("ERROR!"), 1));
};
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => console.log("catch effect"));
const $catch_content__setup = $catch_content__setup__script;
const $catch_content = _content("__tests__/template.marko_2*content", 0, 0, $catch_content__setup);
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $try_content__setup = ($scope) => $try_content__try($scope);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", "<!><!><!>", "b%", $await_content2__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/1");
const $await_content3 = /*@__PURE__*/ _await_content("#text/2", "<div id=slow> </div>", "D ");
const $await_promise2 = /*@__PURE__*/ _await_promise("#text/2", $await_content3__$params);
function $setup($scope) {
	$await_content2($scope);
	$await_content3($scope);
	$try($scope);
	$await_promise($scope, resolveAfter("v", 1));
	$await_promise2($scope, resolveAfter("slow", 3));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
