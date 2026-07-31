// components/class-inner.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-inner.marko", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { m: 0 };
	},
	handleClick() {
		this.state.m++;
		this.emit("change");
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "inner" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "handleClick", false) });
	out.t(state.m, _component);
	(0, import_dynamic_tag.default)(out, input.renderBody, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-mid.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const $template = "<button id=tags> </button><!><!>";
const $walks = " D l%c";
_resume("__tests__/components/class-inner.marko", _marko_template$1);
const $classinner_content = _content_resume("__tests__/components/tags-mid.marko_1*content", "<span>deep body</span>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $classinner_content);
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope, "#text/1", $scope.count);
	$dynamicTag($scope, _marko_template$1, () => ({ onChange: $onChange($scope) }));
});
const $setup__script = _script("__tests__/components/tags-mid.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $onChange = ($scope) => function() {
	$count($scope, +$scope.count + 1);
};
_resume("__tests__/components/tags-mid.marko_0/onChange", $onChange);
var tags_mid_default = /*@__PURE__*/ _template("__tests__/components/tags-mid.marko", $template, $walks, $setup);

// template.marko
const _marko_componentType = "__tests__/template.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	handleClick() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "outer" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "handleClick", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_mid_default, null, (out) => {
		(0, import_render_tag.default)(_marko_template$1, { "renderBody": (out) => {
			out.be("span", null, "3", _component, null, 0);
			out.t("deep body", _component);
			out.ee();
		} }, out, _componentDef, "2");
	}, null, null, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
