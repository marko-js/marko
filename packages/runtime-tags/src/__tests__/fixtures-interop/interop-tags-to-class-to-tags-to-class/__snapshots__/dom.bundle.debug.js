// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/class-leaf.marko
var import_attr_tag = require_attr_tag();
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-leaf.marko";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { k: 0 };
	},
	increment() {
		this.state.k++;
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class-leaf" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t("class leaf", _component);
	out.ee();
	out.be("span", null, "1", _component, null, 0);
	out.t(input.label, _component);
	out.t(" ", _component);
	out.t(state.k, _component);
	out.ee();
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-child.marko
const $template$1 = "<button id=tags-child>tags child</button><div></div><!><!>";
const $walks$1 = " b b%c";
_resumed["__tests__/components/class-leaf.marko"] = _marko_template$1;
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag("#text/2");
const $input_count__OR__input_n__OR__m = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag$1($scope, _marko_template$1, ($_) => ({ label: `${$scope.input_count} ${$scope.input_n} ${$scope.m}` })), 2);
const $m = /*@__PURE__*/ _let("m/8", $input_count__OR__input_n__OR__m);
const $setup__script$1 = _script("__tests__/components/tags-child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$m($scope, +$scope.m + 1);
}));
function $setup$1($scope) {
	$m($scope, 0);
	$setup__script$1($scope);
}
const $input_foo__script = _script("__tests__/components/tags-child.marko_0_input_foo#5", ($scope) => _attrs_script($scope, "#div/1"));
const $input_foo = /*@__PURE__*/ _const("input_foo", ($scope) => {
	_attrs_content($scope, "#div/1", $scope.input_foo);
	$input_foo__script($scope);
});
const $input_count = /*@__PURE__*/ _const("input_count", $input_count__OR__input_n__OR__m);
const $input_n = /*@__PURE__*/ _const("input_n", $input_count__OR__input_n__OR__m);
const $input = ($scope, input) => {
	$input_foo($scope, input.foo);
	$input_count($scope, input.count);
	$input_n($scope, input.n);
};
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template$1, $walks$1, $setup$1, $input);

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "__tests__/components/class-child.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	increment() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t("class", _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("foo", { "content": (out) => {
			out.t("content ", _component);
			out.t(input.count, _component);
			out.t(" ", _component);
			out.t(state.n, _component);
		} });
	}, {
		"count": input.count,
		"n": state.n
	}), null, null, null, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button id=tags>tags</button><!><!>";
const $walks = " b%c";
_resumed["__tests__/components/class-child.marko"] = _marko_template;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $count = /*@__PURE__*/ _let("count/2", ($scope) => $dynamicTag($scope, _marko_template, ($_) => ({ count: $scope.count })));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
