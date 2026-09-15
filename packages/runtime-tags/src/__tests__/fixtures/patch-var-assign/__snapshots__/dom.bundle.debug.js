// tags/counter-box/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
const $count$1 = /*@__PURE__*/ _fill_let("__tests__/tags/counter-box/index.marko0", "count/4", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	_return($scope, $scope.count);
});
const $input_start = $count$1;
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
}
const $input = ($scope, input) => $input_start($scope, input.start);
const $valueChange = ($scope) => function(v) {
	$count$1($scope, v);
};
_resume("__tests__/tags/counter-box/index.marko_0/valueChange", $valueChange);
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<p> </p><button>+</button></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D0${_w0}&D l l`)($walks$1);
const $count = _var_resume("__tests__/template.marko_0_count#4/var", /*@__PURE__*/ _const("count", ($scope) => _text($scope["#text/2"], $scope.count)));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], +$scope.count + 1, "count");
}));
function $setup($scope) {
	_var($scope, "#childScope/0", $count);
	$setup$1($scope["#childScope/0"]);
	$input_start($scope["#childScope/0"], 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
