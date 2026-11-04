// template.marko
const $template = "<main><!><button>show</button></main>";
const $walks = "D%b l";
const $if_content__api = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_api#0:6/setup", "#text/0", 0, ($scope) => _text($scope["#text/1"], [...$scope._.api].length));
const $if_content__setup = ($scope) => {
	$if_content__api._($scope);
	$if_content__api_label._($scope);
};
const $if_content__api_label = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_api_label#0:7/setup", "#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.api_label));
const $getTitle2 = /*@__PURE__*/ _const("getTitle");
const $api2 = /*@__PURE__*/ _const("api", ($scope) => {
	$api_label($scope, $scope.api.label);
	$if_content__api($scope);
});
const $input_title__OR__getTitle = ($scope) => $api2($scope, {
	label: $scope.input_title,
	[Symbol.iterator]: $api($scope)
});
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => {
	$getTitle2($scope, $getTitle($scope));
	$input_title__OR__getTitle($scope);
});
const $api_label = /*@__PURE__*/ _const("api_label", $if_content__api_label);
const $if = /*@__PURE__*/ _if("#text/0", "<p><!>:<!></p>", "D%c%", $if_content__setup);
const $show = _let("show/8", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $getTitle = ($scope) => () => $scope.input_title;
const $api = ($scope) => function* () {
	yield $scope.getTitle;
};
_bind_resume("__tests__/template.marko_0/getTitle input_title", $getTitle);
_bind_resume("__tests__/template.marko_0/api getTitle", $api);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
