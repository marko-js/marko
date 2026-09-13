// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $if_content__input_attrs__script = _script("__tests__/template.marko_1_input_attrs#4", ($scope) => _attrs_script($scope, "#a/0"));
const $if_content__input_attrs = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_attrs", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => {
	_attrs($scope, "#a/0", $scope._.input_attrs);
	$if_content__input_attrs__script($scope);
}));
const $if_content__setup = $if_content__input_attrs;
const $if = /*@__PURE__*/ _if("#text/0", "<a>x</a>", " ", $if_content__setup);
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $if($scope, $scope.on ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$on($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_attrs($scope, input.attrs);
const $input_attrs = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_attrs", $if_content__input_attrs);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
