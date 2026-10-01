// template.marko
const $template = "<button>toggle</button><div></div><div></div><!><!><!><span>show input</span><!><!><span>show state</span><!><!>";
const $walks = " b b b%b%b%c%b%c%c";
const $for_content2__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content2__$params = ($scope, $params3) => $for_content2__item($scope, $params3[0]);
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $if2 = /*@__PURE__*/ _if("#div/2", "<span>if state</span>");
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/4", "<p> </p>", "D ", 0, $for_content2__$params);
const $show2 = /*@__PURE__*/ _show("#text/8", "#text/7");
const $open = /*@__PURE__*/ _let("open/13", ($scope) => {
	$if2($scope, $scope.open ? 0 : 1);
	$for2($scope, [$scope.open ? ["x", "y"] : ["x"]]);
	$show2($scope, $scope.open);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
const $if = /*@__PURE__*/ _if("#div/1", "<span>if input</span>");
const $show = /*@__PURE__*/ _show("#text/6", "#text/5");
const $input_show = ($scope, input_show) => {
	$if($scope, input_show ? 0 : 1);
	$show($scope, input_show);
};
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/3", "<p> </p>", "D ", 0, $for_content__$params);
const $input_items = ($scope, input_items) => $for($scope, [input_items]);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_items($scope, input.items);
};
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
