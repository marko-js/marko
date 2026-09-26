// components/tags-return.marko
var import_vdom = require_vdom();
const $input_x$1 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));

// components/tags-child.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("");
const $v = _var_resume("b0", ($scope, v) => _text($scope.c, v));
function $setup($scope) {
	_var($scope, 0, $v);
}
const $input_x = ($scope, input_x) => $input_x$1($scope.a, input_x);
const $input = ($scope, input) => $input_x($scope, input.x);
var tags_child_default = /*@__PURE__*/ _template("b", $template, $walks, $setup, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { count: 0 };
	},
	increment() {
		this.state.count++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "increment", false) });
	out.t(state.count, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_child_default, () => ({ "x": state.count }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
