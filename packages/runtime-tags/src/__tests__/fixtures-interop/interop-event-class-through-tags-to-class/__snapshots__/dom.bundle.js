// components/class-child.marko
var import_vdom = require_vdom();
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "b", _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = { handleClick() {
	this.emit("change");
} };
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class-child" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "handleClick", false) });
	out.t("Change", _component);
	out.ee();
}, { t: _marko_componentType$1 }, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// components/tags-child.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_resume("b", _marko_template$1);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_onChange = /*@__PURE__*/ _const(3, ($scope) => $dynamicTag($scope, _marko_template$1, () => ({ "on-change": $onchange($scope) })));
const $input = ($scope, input) => $input_onChange($scope, input.onChange);
const $onchange = ($scope) => function() {
	$scope.d?.();
};
_resume("c0", $onchange);
var tags_child_default = /*@__PURE__*/ _template("c", $template, "b%c", 0, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
const _marko_class_fn = (_component) => function() {
	_component.handleChange();
};
(0, import_runtime_dom.f)("a/h0", _marko_class_fn);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { changed: 0 };
	},
	handleChange() {
		this.state.changed++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("div", { "id": "class-parent" }, "0", _component, null, 1);
	out.t(state.changed, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "onChange": _marko_class_fn(_component) }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
