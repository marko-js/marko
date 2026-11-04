// template.marko
const $E_content__walks = "D l";
const $E_content__template = "<span> </span>";
const $D_content__walks = "b%c";
const $D_content__template = "<!><!><!>";
const $template = /*@__PURE__*/ ((_w0) => `<button></button>${_w0}<!>`)($D_content__template);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&b`)($D_content__walks);
const $if_content__setup = ($scope) => {
	$scope["#childScope/0"]._ = $scope._._;
	$E_content__setup($scope["#childScope/0"]);
};
const $D_content__if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($E_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($E_content__walks), $if_content__setup);
const $D_content__on = ($scope, on) => $D_content__if($scope, on ? 0 : 1);
const $D_content__$params = ($scope, $params2) => $D_content__$temp($scope, $params2[0]);
const $D_content__$temp = ($scope, $temp) => $D_content__on($scope, $temp.on);
const $E_content__input_x = /*@__PURE__*/ _closure_get("input_x/6", ($scope) => _text($scope["#text/0"], $scope._.input_x), 0, "__tests__/template.marko_1_input_x#0:4/subscribe");
const $E_content__setup = $E_content__input_x;
const $on = /*@__PURE__*/ _let("on/5", ($scope) => $D_content__on($scope["#childScope/1"], $scope.on));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$on($scope, !$scope.on);
}));
function $setup($scope) {
	$scope["#childScope/1"]._ = $scope;
	$on($scope, false);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_x($scope, input.x);
const $input_x__closure = /*@__PURE__*/ _closure($E_content__input_x);
const $input_x = /*@__PURE__*/ _const("input_x", $input_x__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
