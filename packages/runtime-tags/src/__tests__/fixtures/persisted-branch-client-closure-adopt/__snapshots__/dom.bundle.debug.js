// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $if_content3__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "z:" + $scope._._._.input_title), ($scope) => $scope._._._), 1);
const $if_content3__setup = $if_content3__input_title;
const $if_content2__input_title = /*@__PURE__*/ _fill_join_closure("__tests__/template.marko0", "input_title", /*@__PURE__*/ _closure_get("input_title", ($scope) => _text($scope["#text/0"], "y:" + $scope._._.input_title), ($scope) => $scope._._), 0);
const $if_content2__setup = ($scope) => {
	$if_content2__input_title($scope);
	$if_content2__open($scope);
};
const $if_content2__if = /*@__PURE__*/ _if("#text/1", "<u> </u>", "D ", $if_content3__setup);
const $if_content2__open = /*@__PURE__*/ _closure_get("open", ($scope) => $if_content2__if($scope, $scope._._.open ? 0 : 1), ($scope) => $scope._._);
const $if_content__input_title = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "input_title", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], "x:" + $scope._.input_title)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$if_content__open._($scope);
};
const $if_content__if = /*@__PURE__*/ _if("#text/1", "<i> </i><!><!>", "D l%", $if_content2__setup);
const $if_content__open = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $if_content__if($scope, $scope._.open ? 0 : 1));
const $if = /*@__PURE__*/ _if("#text/0", "<b> </b><!><!>", "D l%", $if_content__setup);
const $open__closure = /*@__PURE__*/ _closure($if_content2__open);
const $open = /*@__PURE__*/ _let("open/5", ($scope) => {
	$if($scope, $scope.open ? 0 : 1);
	$if_content__open($scope);
	$open__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, true);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $input_title__closure = /*@__PURE__*/ _closure($if_content2__input_title, $if_content3__input_title);
const $input_title = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "input_title", ($scope) => {
	$if_content__input_title($scope);
	$input_title__closure($scope);
});
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
