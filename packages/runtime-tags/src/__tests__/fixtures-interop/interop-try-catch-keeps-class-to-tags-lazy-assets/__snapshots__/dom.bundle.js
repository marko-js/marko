// tags/tags-child.marko
var import_vdom = require_vdom();
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Lazy_setup$1 = /*@__PURE__*/ _load_setup(() => import("./v:lazy-child.marko.setup.mjs"));
let $load_Lazy_tag_input_value$1 = /*@__PURE__*/ _load_signal(() => import("./v:lazy-child.marko.input_value.mjs"));
function $setup($scope) {
	$load_Lazy_setup$1($scope, $scope.b, $scope.a);
	$load_Lazy_tag_input_value$1($scope.b, "class");
}
var tags_child_default = /*@__PURE__*/ _template("d", $template, $walks, $setup);

// components/class-wrap.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(() => import("./v:lazy-child.marko.setup.mjs"));
let $load_Lazy_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:lazy-child.marko.input_value.mjs"));
const $catch_content__setup = ($scope) => {
	$load_Lazy_setup($scope, $scope.b, $scope.a);
	$load_Lazy_tag_input_value($scope.b, "catch");
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.c, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a0", "<!><!> caught <!>", "b%/&c%", $catch_content__setup, $catch_content__$params);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// tags/lazy-child.marko
const $template = "<span> </span>";
const $setup = () => {};
const $input_value__script = _script("c0", ($scope) => console.log("loaded " + $scope.d));
const $input_value = /*@__PURE__*/ _const(3, ($scope) => {
	_text($scope.a, $scope.d);
	$input_value__script($scope);
});

// tags/v:lazy-child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
