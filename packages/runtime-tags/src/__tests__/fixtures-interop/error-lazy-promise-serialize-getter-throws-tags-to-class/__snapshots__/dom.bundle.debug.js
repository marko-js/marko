// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// child.marko
const $template = "";
const $walks = "";
const $promise__script = _script("__tests__/child.marko_0_promise#0", ($scope) => (async () => {
	console.log(await $scope.promise);
})());
const $promise = /*@__PURE__*/ _const("promise", $promise__script);
function $setup($scope) {
	$promise($scope, resolveAfter({ get bad() {
		throw new Error("getter failed");
	} }, 1));
}
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", "", "", $setup);

// components/class-counter.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-counter.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<!><!><!><!>";
const $walks = "b%/&b%c";
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content__setup = ($scope) => $await_content__dynamicTag($scope, _marko_template);
const $await_content = /*@__PURE__*/ _await_content("#text/2", "<!><!><!>", "b%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/2");
function $setup($scope) {
	$load_Child_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$await_content($scope);
	$await_promise($scope, resolveAfter(1, 1));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);

// v:child.marko.setup.js
const _ = [
	"",
	"",
	$setup
];
