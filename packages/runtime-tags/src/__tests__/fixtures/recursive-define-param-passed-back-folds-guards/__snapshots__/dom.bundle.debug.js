// template.marko
const $Countdown_content__walks = "D l%c";
const $Countdown_content__template = "<span> </span><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Countdown_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Countdown_content__walks);
const $if_content__depth = /*@__PURE__*/ _if_closure("#text/1", 0, ($scope) => $Countdown_content__depth($scope["#childScope/0"], $scope._.depth - 1));
const $if_content__setup = $if_content__depth;
const $Countdown_content__if = /*@__PURE__*/ _if("#text/1", /*@__PURE__*/ ((_w0) => `${_w0}<!>`)($Countdown_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&b`)($Countdown_content__walks), $if_content__setup);
const $Countdown_content__depth = /*@__PURE__*/ _const("depth", ($scope) => {
	_text($scope["#text/0"], $scope.depth);
	$Countdown_content__if($scope, $scope.depth ? 0 : 1);
	$if_content__depth($scope);
});
const $Countdown_content__$params = ($scope, $params2) => $Countdown_content__$temp($scope, $params2[0]);
const $Countdown_content__$temp = ($scope, $temp) => $Countdown_content__depth($scope, $temp.depth);
function $setup($scope) {
	$Countdown_content__depth($scope["#childScope/0"], 1);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
