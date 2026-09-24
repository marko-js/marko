// components/tags-list.marko
var import_vdom = require_vdom();
var import_attr_tag = require_attr_tag();
const $template = "<section></section>";
const $walks = " b";
const $for_content__item__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $for_content__item = /*@__PURE__*/ _const(2, ($scope) => {
	_attrs_content($scope, "a", $scope.c);
	$for_content__item__script($scope);
});
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $input_id = ($scope, input_id) => _attr($scope.a, "id", input_id);
const $for = /*@__PURE__*/ _for_of_unkeyed(0, "<div></div>", " ", 0, $for_content__$params);
const $input_item = ($scope, input_item) => $for($scope, [input_item]);
const $input = ($scope, input) => {
	$input_id($scope, input.id);
	$input_item($scope, input.item);
};
var tags_list_default = /*@__PURE__*/ _template("b", $template, " b", 0, $input);

// template.marko
var import_dynamic_tag = /* @__PURE__ */ __toESM(require_dynamic_tag());
var import_renderer = /* @__PURE__ */ __toESM(require_renderer());
var import_registry = require_registry();
var import_defineComponent = /* @__PURE__ */ __toESM(require_defineComponent());
const _marko_componentType = "a", _marko_template = (0, import_vdom.t)(_marko_componentType);
(0, import_registry.r)(_marko_componentType, () => _marko_template);
const _marko_component = {
	onCreate() {
		this.state = { n: 0 };
	},
	inc() {
		this.state.n++;
	}
};
_marko_template._ = (0, import_renderer.default)(function(input, out, _componentDef, _component, state, $global) {
	out.be("button", { "id": "class" }, "0", _component, null, 1, { "onclick": _componentDef.d("click", "inc", false) });
	out.t(state.n, _component);
	out.ee();
	(0, import_dynamic_tag.default)(out, tags_list_default, () => (0, import_attr_tag.i)(() => {
		(0, import_attr_tag.a)("item", {
			"class": "first",
			"content": (0, import_runtime_dom.c)((out) => {
				out.t("One ", _component);
				out.t(state.n, _component);
			})
		});
		(0, import_attr_tag.a)("item", { "content": (0, import_runtime_dom.c)((out) => {
			out.t("Two", _component);
		}) });
	}, { "id": "items" }), null, null, null, _componentDef, "1");
}, { t: _marko_componentType }, _marko_component);
_marko_template.Component = (0, import_defineComponent.default)(_marko_component, _marko_template._);
