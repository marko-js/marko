// v:template.marko.hydrate-6.js
var v_template_marko_hydrate_6_default = ($_) => init();

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
const _marko_componentType = "__tests__/components/class-list.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("ul", { "id": "list" }, "0", _component, null, 1);
	{
		let _keyValue = 0;
		for (const item of (0, import_of_fallback.default)(input.item || [])) {
			const _keyScope = `[${_keyValue++}]`;
			out.be("li", null, "1" + _keyScope, _component, null, 0);
			(0, import_dynamic_tag.default)(out, item.renderBody, null, null, null, null, _componentDef, "2" + _keyScope);
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
const $template = "<button>translate</button><!><!>";
const $walks = " b%c";
_resumed["__tests__/components/class-list.marko"] = _marko_template;
const $item_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_1*content", "<em> </em>", "D "), { label: ($scope) => _text($scope["#text/0"], $scope.label) });
_resumed["__tests__/template.marko_1*content"] = $item_content;
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/1");
const $labels = /*@__PURE__*/ _let("labels/2", ($scope) => $dynamicTag($scope, _marko_template, ($_) => {
	let $item;
	forOf($scope.labels, (label) => {
		$item = attrTags($item, { renderBody: $item_content($scope, { label }) });
	});
	return { item: $item };
}));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$labels($scope, ["uno", "dos"]);
}));
function $setup($scope) {
	$labels($scope, ["one", "two"]);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
