// template.marko
const $template = "<!><!><button></button>";
const $walks = "b%b b";
const $if_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#0:4", ($scope) => _attrs_script($scope, "#input/2"));
const $if_content__input_attrs = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	$signalReset($scope, 2);
	_attrs($scope, "#input/2", {
		type: "checkbox",
		...$scope._.input_attrs,
		checked: $signal($scope, 2)
	}, _controllable_input);
	$if_content__input_attrs__script($scope);
});
const $if_content__setup = ($scope) => {
	$signalReset($scope, 0);
	$signalReset($scope, 1);
	$if_content__input_attrs._($scope);
	_attr_class_item($scope["#div/0"], "live", $signal($scope, 0));
	_attr_input_checked_default($scope, "#input/1", $signal($scope, 1));
};
const $if = /*@__PURE__*/ _if("#text/0", "<div></div><input type=checkbox><input>", " b b ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, true);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $if_content__input_attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
