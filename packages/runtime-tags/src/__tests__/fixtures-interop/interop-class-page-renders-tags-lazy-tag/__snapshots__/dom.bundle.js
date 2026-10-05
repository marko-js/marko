// components/tags-child.marko
const $template = "<!><!><!>";
const $walks = "b%/&c";
let $load_Lazy_setup = /*@__PURE__*/ _load_setup(() => import("./v:lazy.marko.setup.mjs"));
let $load_Lazy_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:lazy.marko.input_value.mjs"));
function $setup($scope) {
	$load_Lazy_setup($scope, $scope.b, $scope.a);
	$load_Lazy_tag_input_value($scope.b, "x");
}
var tags_child_default = /*@__PURE__*/ _template("b", $template, $walks, $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "page" }, "0", _component, null, 1);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
	out.ee();
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// tags/lazy.marko
const $template = "<span id=lazy> </span>";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// tags/v:lazy.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
