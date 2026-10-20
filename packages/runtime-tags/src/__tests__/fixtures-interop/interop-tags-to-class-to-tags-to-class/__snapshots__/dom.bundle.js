// components/class-leaf.marko
var import_attr_tag = require_attr_tag();
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "c";
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
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-child.marko
const $template = "<button id=tags-child>tags child</button><div></div><!><!>";
const $walks = " b b%c";
_resumed.c = _marko_template$1;
const $dynamicTag$1 = /*@__PURE__*/ _dynamic_tag(2);
const $input_count__OR__input_n__OR__m = /*@__PURE__*/ _or(9, ($scope) => $dynamicTag$1($scope, _marko_template$1, ($_) => ({ label: `${$scope.g} ${$scope.h} ${$scope.i}` })), 2);
const $m = /*@__PURE__*/ _let(8, $input_count__OR__input_n__OR__m);
const $setup__script$1 = _script("d1", ($scope) => _on($scope.a, "click", function() {
	$m($scope, +$scope.i + 1);
}));
function $setup($scope) {
	$m($scope, 0);
	$setup__script$1($scope);
}
const $input_foo__script = _script("d0", ($scope) => _attrs_script($scope, "b"));
const $input_foo = /*@__PURE__*/ _const(5, ($scope) => {
	_attrs_content($scope, "b", $scope.f);
	$input_foo__script($scope);
});
const $input_count = /*@__PURE__*/ _const(6, $input_count__OR__input_n__OR__m);
const $input_n = /*@__PURE__*/ _const(7, $input_count__OR__input_n__OR__m);
const $input = ($scope, input) => {
	$input_foo($scope, input.foo);
	$input_count($scope, input.count);
	$input_n($scope, input.n);
};
var tags_child_default = /*@__PURE__*/ _template("d", $template, $walks, $setup, $input);

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "b";
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
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
_resumed.b = _marko_template;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $count = /*@__PURE__*/ _let(2, ($scope) => $dynamicTag($scope, _marko_template, ($_) => ({ count: $scope.c })));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.c + 1);
}));

// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();
