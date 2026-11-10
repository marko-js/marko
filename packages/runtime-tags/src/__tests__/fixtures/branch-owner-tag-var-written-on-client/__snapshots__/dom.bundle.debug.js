// tags/counter.marko
const $template$1 = "<button>inc</button>";
const $walks$1 = " b";
const $count$1 = /*@__PURE__*/ _let("count/1", ($scope) => _return($scope, $scope.count));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count$1($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count$1($scope, 1);
	$setup__script($scope);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, " b", /*@__PURE__*/ _return_setup($setup$1));

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&%c`)(" b");
const $if_content__count = /*@__PURE__*/ _if_closure("#text/2", 0, ($scope) => _text($scope["#text/0"], $scope._.count));
const $if_content__setup = $if_content__count;
const $if = /*@__PURE__*/ _if("#text/2", "<p> </p>", "D ", $if_content__setup);
const $count = _var_resume("__tests__/template.marko_0_count#3/var", /*@__PURE__*/ _const("count", ($scope) => {
	$if($scope, $scope.count ? 0 : 1);
	$if_content__count($scope);
}));
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $count);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
