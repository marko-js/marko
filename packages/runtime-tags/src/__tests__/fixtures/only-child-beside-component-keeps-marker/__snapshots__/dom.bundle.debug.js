// tags/noop.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = () => {};
const $input_v__script = _script("__tests__/tags/noop.marko_0_input_v#2", ($scope) => void $scope.input_v);
const $input_v = /*@__PURE__*/ _const("input_v", $input_v__script);
const $input = ($scope, input) => $input_v($scope, input.v);
var noop_default = /*@__PURE__*/ _template("__tests__/tags/noop.marko", "", "", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<div>${_w0}<!>${_w1}</div><ul><!></ul><button>toggle</button>`)("", "");
const $walks = /*@__PURE__*/ ((_w0, _w1) => `/${_w0}&D%/${_w1}&/&lD%l b`)("", "");
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__$params = ($scope, $params3) => $for_content__item($scope, $params3[0]);
const $Nothing_content__v__script = _script("__tests__/template.marko_1_v#2", ($scope) => void $scope.v);
const $Nothing_content__v = /*@__PURE__*/ _const("v", $Nothing_content__v__script);
const $Nothing_content__$params = ($scope, $params2) => $Nothing_content__$temp($scope, $params2?.[0]);
const $Nothing_content__$temp = ($scope, $temp) => $Nothing_content__v($scope, $temp.v);
const $if = /*@__PURE__*/ _if("#text/1", "<span>on</span>");
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/4", "<li> </li>", "D ", 0, $for_content__$params);
const $open = /*@__PURE__*/ _let("open/6", ($scope) => {
	$input_v($scope["#childScope/0"], $scope.open);
	$input_v($scope["#childScope/2"], !$scope.open);
	$Nothing_content__v($scope["#childScope/3"], $scope.open);
	$if($scope, $scope.open ? 0 : 1);
	$for($scope, [$scope.open ? [1, 2] : [1]]);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/5"], "click", function() {
	$open($scope, !$scope.open);
}));
function $setup($scope) {
	$open($scope, false);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
