// tags/lazy.marko
const $template = "<span id=lazy> </span>";
const $walks = "D l";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope["#text/0"], input_value);
const $input = ($scope, input) => $input_value($scope, input.value);
var lazy_default = /*@__PURE__*/ _template("__tests__/tags/lazy.marko", $template, "D l", 0, $input);

// components/tags-child.marko
var import_vdom = require_vdom();
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(() => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:lazy.marko.input_value.mjs"));
function $setup($scope) {
	$load_Lazy_setup($scope, $scope["#childScope/1"], $scope["#text/0"]);
	$load_Lazy_tag_input_value($scope["#childScope/1"], "x");
}
var tags_child_default = /*@__PURE__*/ _template("__tests__/components/tags-child.marko", $template, $walks, $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "page" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// tags/v:lazy.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
