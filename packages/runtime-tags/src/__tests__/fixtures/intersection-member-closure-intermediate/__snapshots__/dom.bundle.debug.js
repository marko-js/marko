// template.marko
const $template = "<p> </p><!><button class=same-length></button><button class=toggle></button>";
const $walks = "D l%b b b";
const $if_content__list_length = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => _text($scope["#text/0"], $scope._.list_length));
const $if_content__setup = $if_content__list_length;
const $list__OR__show = ($scope) => {
	_text($scope["#text/0"], $scope.show ? $scope.list.join() : "none");
};
const $list = /*@__PURE__*/ _let("list/4", ($scope) => {
	$list_length($scope, $scope.list?.length);
	$list__OR__show($scope);
});
const $show = /*@__PURE__*/ _const("show");
const $list_length = /*@__PURE__*/ _const("list_length", ($scope) => {
	$show($scope, $scope.list_length > 1);
	$if_content__list_length($scope);
});
const $if = /*@__PURE__*/ _if("#text/1", "<span> </span>", "D ", $if_content__setup);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => $if($scope, $scope.open ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/2"], "click", function() {
		$list($scope, [...$scope.list]);
	});
	_on($scope["#button/3"], "click", function() {
		$open($scope, !$scope.open);
	});
});
function $setup($scope) {
	$list($scope, [1, 2]);
	$open($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
