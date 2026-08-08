// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = () => init$1();

// v:template.marko.hydrate-5.js
var import_components = require_components();
var v_template_marko_hydrate_5_default = () => (0, import_components.init)();

// components/class-list.marko
var import_vdom = require_vdom();
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_of_fallback = /* @__PURE__ */ __toESM(require_of_fallback());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/class-list.marko", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { active: 0 };
	},
	handleClick(i) {
		this.state.active = i;
		this.emit("select");
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("ul", { "id": "list" }, "0", _component, null, 1);
	{
		let _i = 0;
		for (const item of (0, import_of_fallback.default)(input.item || [])) {
			let i = _i++;
			const _keyScope = `[${i}]`;
			out.be("li", null, "1" + _keyScope, _component, null, 0);
			out.be("button", null, "2" + _keyScope, _component, null, 0, { "onclick": _componentDef.d("click", "handleClick", false, [i]) });
			out.t(item.title, _component);
			out.t(i === state.active ? "*" : "", _component);
			out.ee();
			(0, import_dynamic_tag.default)(out, item.renderBody, null, null, null, null, _componentDef, "3" + _keyScope);
			out.ee();
		}
	}
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// template.marko
const $template = "<button id=tags> </button><!><!>";
const $walks = " D l%c";
_resume("__tests__/components/class-list.marko", _marko_template);
const $item_content2 = _content_resume("__tests__/template.marko_2_content", "<em>second</em>");
const $item_content = _content_resume("__tests__/template.marko_1_content", "<em>first</em>");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2");
const $count = /*@__PURE__*/ _let("count/3", ($scope) => {
	_text($scope["#text/1"], $scope.count);
	$dynamicTag($scope, _marko_template, () => ({
		onSelect: $onSelect($scope),
		item: attrTags(attrTag({
			title: "one",
			renderBody: $item_content($scope)
		}), {
			title: "two",
			renderBody: $item_content2($scope)
		})
	}));
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, $scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
function $onSelect($scope) {
	return function() {
		$count($scope, $scope.count + 1);
	};
}
_resume("__tests__/template.marko_0/onSelect", $onSelect);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
