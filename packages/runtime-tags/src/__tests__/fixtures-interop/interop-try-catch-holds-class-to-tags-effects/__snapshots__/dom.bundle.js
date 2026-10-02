// components/tags-grandchild.marko
var import_vdom = require_vdom();
var import_const_element = /* @__PURE__ */ __toESM(require_const_element());
const $template = "<div>grandchild</div>";
const $walks = "b";
const $setup__script = _script("c0", ($scope) => console.log("caught body effect"));
const $setup = $setup__script;
var tags_grandchild_default = /*@__PURE__*/ _template("c", $template, "b", $setup);

// components/class-child.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "b";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_node = (0, import_const_element.default)("div", { "id": "class" }, 1).t("class");
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.n(_marko_node, _component);
	(0, import_dynamic_tag.default)(out, tags_grandchild_default, null, null, null, null, _componentDef, "1");
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
