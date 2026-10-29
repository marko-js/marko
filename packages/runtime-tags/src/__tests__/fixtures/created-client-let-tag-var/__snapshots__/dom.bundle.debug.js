// tags/two.marko
const $template$1 = "";
const $walks$1 = "";
function $setup$1($scope) {
	_return($scope, "t");
}
var two_default = /*@__PURE__*/ _template("__tests__/tags/two.marko", "", "", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__b__OR__v = /*@__PURE__*/ _or(6, ($scope) => _text($scope["#text/2"], $scope.v + $scope.b), 1, "#scopeOffset/1");
const $if_content__b = /*@__PURE__*/ _let("b/4", $if_content__b__OR__v);
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	$if_content__b($scope, +$scope.b + 1);
}));
const $if_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $if_content__v);
	$if_content__b($scope, 1);
	$if_content__setup__script($scope);
};
const $if_content__v = /*@__PURE__*/ _const("v", $if_content__b__OR__v);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<span> </span><button class=b>b</button>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)(""), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);
