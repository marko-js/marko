// tags/counter-box/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/counter-box/index.marko0", "count/4", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	_return($scope, $scope.count);
});
const $input_start = $count;
function $setup$1($scope) {
	_return_change($scope, $valueChange($scope));
}
const $input = ($scope, input) => $input_start($scope, input.start);
const $valueChange = ($scope) => function(v) {
	$count($scope, v);
};
_resume("__tests__/tags/counter-box/index.marko_0/valueChange", $valueChange);
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, $walks$1, $setup$1, $input);

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
const $if_content__count = _var_resume("__tests__/template.marko_1_count#4/var", ($scope, count) => _text($scope["#text/2"], count));
const $if_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/3"], "click", function() {
	_var_change($scope["#childScope/0"], 0, "count");
}));
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__count);
	$setup$1($scope["#childScope/0"]);
	$input_start($scope["#childScope/0"], 1);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=reset>r</button>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks$1), $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
