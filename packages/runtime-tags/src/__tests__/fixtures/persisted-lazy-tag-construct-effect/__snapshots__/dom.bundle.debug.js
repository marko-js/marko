// child.marko
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/child.marko0", "count/6", ($scope) => _text($scope["#text/2"], $scope.count));
const $setup__script = _script("__tests__/child.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope["#text/1"], input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var child_default = /*@__PURE__*/ _template("__tests__/child.marko", $template, $walks, $setup, $input);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
_load_lazy("ready:__tests__/child.marko", () => import("./child.mjs").then(() => {}));
const $if_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#4", ($scope) => _attrs_script($scope, "#div/0"));
const $if_content__input_attrs = /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => {
	_attrs($scope, "#div/0", $scope._.input_attrs);
	$if_content__input_attrs__script($scope);
});
const $if_content__setup = ($scope) => {
	$if_content__input_attrs._($scope);
	$if_content__input_label._($scope);
};
const $if_content__input_label = /*@__PURE__*/ _if_closure("#main/0", 0);
const $if = /*@__PURE__*/ _if("#main/0", "<div>x</div><!><!>", " b%/&", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_attrs($scope, input.attrs);
	$input_label($scope, input.label);
	$input_show($scope, input.show);
};
const $input_attrs = /*@__PURE__*/ _const("input_attrs", $if_content__input_attrs);
const $input_label = /*@__PURE__*/ _const("input_label", $if_content__input_label);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);
