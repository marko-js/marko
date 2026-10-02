// components/tags-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__value = ($scope, value) => _text($scope.a, value);
const $await_content2__$params = ($scope, $params3) => $await_content2__value($scope, $params3[0]);
const $await_content = /*@__PURE__*/ _await_content(0, "<div id=caught>CAUGHT</div>");
const $catch_content__await_promise = /*@__PURE__*/ _await_promise(0);
const $catch_content__setup = ($scope) => {
	$await_content($scope);
	$catch_content__await_promise($scope, resolveAfter("caught", 2));
};
const $catch_content = _content("b0", "<!><!><!>", "b%", $catch_content__setup);
const $await_content2 = /*@__PURE__*/ _await_content(0, "<div id=tags> </div>", "D ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, rejectAfter(/* @__PURE__ */ new Error("x"), 1));
};
const $try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var tags_child_default = /*@__PURE__*/ _template("b", $template, "b%c", $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_node = (0, import_const_element.default)("div", { "id": "class" }, 1).t("class");
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.n(_marko_node, _component);
	(0, import_dynamic_tag.default)(out, tags_child_default, null, null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
