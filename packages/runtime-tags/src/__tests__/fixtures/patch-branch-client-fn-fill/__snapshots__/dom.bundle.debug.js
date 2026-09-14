// template.marko
const $template = "<main><!><button>show</button></main>";
const $walks = "D%b l";
const $if_content__getTitle = /*@__PURE__*/ _fill_join("__tests__/template.marko0", "getTitle", /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.getTitle())));
const $if_content__setup = $if_content__getTitle;
const $getTitle2 = /*@__PURE__*/ _fill_const("__tests__/template.marko0", "getTitle", $if_content__getTitle);
const $input_title = /*@__PURE__*/ _const("input_title", ($scope) => $getTitle2($scope, $getTitle($scope)));
const $if = /*@__PURE__*/ _if("#text/0", "<p> </p>", "D ", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/6", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, true);
}));
function $setup($scope) {
	$show($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_title($scope, input.title);
const $getTitle = ($scope) => () => $scope.input_title;
_resume("__tests__/template.marko_0/getTitle", $getTitle);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
