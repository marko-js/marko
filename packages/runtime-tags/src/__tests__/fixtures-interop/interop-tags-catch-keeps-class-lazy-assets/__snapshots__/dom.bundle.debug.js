// components/child.marko
var child_exports = /* @__PURE__ */ __exportAll({ default: () => _marko_template });
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "__tests__/components/child.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = { onMount() {
	console.log("loaded");
} };
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("span", { "class": "child" }, "0", _component, null, 1);
	out.t(input.value, _component);
	out.ee();
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);

// components/class-wrap.marko
var import_vdom = require_vdom();
var import_load_tag_browser = /* @__PURE__ */ __toESM(require_load_tag_browser());
var import_load_tag_event_trigger = /* @__PURE__ */ __toESM(require_load_tag_event_trigger());
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-wrap.marko";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
const _marko_load_Child = (0, import_load_tag_browser.default)("__tests__/components/child.marko", () => import("./child.mjs").then((n) => n.t), (0, import_load_tag_event_trigger.default)("mouseover", "body"));
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "class": "wrap" }, "0", _component, null, 1);
	(0, import_render_tag.default)(_marko_load_Child, { "value": 1 }, out, _componentDef, "1");
	out.ee();
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-try.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params3) => $await_content__v($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/components/tags-try.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $await_content = /*@__PURE__*/ _await_content("#text/1", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/1", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__dynamicTag($scope, _marko_template$1);
	$try_content__await_promise($scope, rejectAfter(new Error("S"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
function $setup($scope) {
	$try($scope);
}
var tags_try_default = /*@__PURE__*/ _template("__tests__/components/tags-try.marko", $template, "b%c", $setup);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	(0, import_dynamic_tag.default)(out, tags_try_default, null, null, null, null, _componentDef, "0");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "1");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
