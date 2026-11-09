// components/tags-if.marko
var import_vdom = require_vdom();
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__input_content = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _attr_content($scope, "#div/0", $scope._.input_content));
const $if_content__setup = $if_content__input_content;
const $if = /*@__PURE__*/ _if("#text/0", "<div></div>", " ", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_content($scope, input.content);
};
const $input_content = /*@__PURE__*/ _const("input_content", $if_content__input_content);
var tags_if_default = /*@__PURE__*/ _template("__tests__/components/tags-if.marko", $template, "b%c", 0, $input);

// components/class-thing.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType$1 = "__tests__/components/class-thing.marko";
const _marko_template$1 = (0, import_vdom.t)(_marko_componentType$1);
(0, import_registry.r)(_marko_componentType$1, () => _marko_template$1);
const _marko_component$1 = {
	onCreate() {
		this.state = { clicks: 0 };
	},
	inc() {
		this.state.clicks++;
	}
};
_marko_template$1._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "class": "thing" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t("thing ", _component);
	out.t(state.clicks, _component);
	out.ee();
}, {
	t: _marko_componentType$1,
	d: true
}, _marko_component$1);
_marko_template$1.Component = (0, import_defineComponent.default)(_marko_component$1, _marko_template$1._);

// template.marko
var import_render_tag = /* @__PURE__ */ __toESM(require_render_tag());
const _marko_componentType = "__tests__/template.marko";
const _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { show: false };
	},
	show() {
		this.state.show = true;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "show", false) });
	out.t("show", _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_if_default, () => ({ "show": state.show }), (out) => {
		out.t("Content", _component);
	}, null, null, _componentDef, "1");
	(0, import_render_tag.default)(_marko_template$1, {}, out, _componentDef, "2");
}, {
	t: _marko_componentType,
	d: true
}, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
