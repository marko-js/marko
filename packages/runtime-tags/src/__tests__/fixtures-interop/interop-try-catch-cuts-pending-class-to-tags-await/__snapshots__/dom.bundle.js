// components/tags-grandchild.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__setup__script = _script("c0", ($scope) => {
	_on($scope.a, "click", function() {
		$await_content__value($scope, $scope.e + "!");
	});
	console.log("child init effect");
});
const $await_content__setup = ($scope) => {
	console.log("child rendered");
	$await_content__setup__script($scope);
};
const $await_content__value = /*@__PURE__*/ _let(4, ($scope) => _text($scope.b, $scope.e));
const $await_content__v = $await_content__value;
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<button> </button>", " D ", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
function $setup($scope) {
	$await_content($scope);
	$await_promise($scope, resolveAfter("child", 2));
}
var tags_grandchild_default = /*@__PURE__*/ _template("c", $template, "b%c", $setup);

// components/class-child.marko
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
	(0, import_dynamic_tag.default)(out, tags_grandchild_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	i: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("a0", "caught <!>", "b%", 0, $catch_content__$params);

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var v_template_marko_hydrate_5_default = () => {};
