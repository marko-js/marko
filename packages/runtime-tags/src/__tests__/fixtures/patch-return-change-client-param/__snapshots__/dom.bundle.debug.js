// tags/counter-box/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $count$1 = /*@__PURE__*/ _let("count/4", ($scope) => {
	_return($scope, $scope.count);
	_text($scope["#text/0"], $scope.count);
});
function $setup$1($scope) {
	$count$1($scope, 1);
}
const $input_onChange = /*@__PURE__*/ _const("input_onChange", ($scope) => _return_change($scope, $scope.input_onChange));
const $input = ($scope, input) => $input_onChange($scope, input.onChange);
var counter_box_default = /*@__PURE__*/ _template("__tests__/tags/counter-box/index.marko", $template$1, "D l", /*@__PURE__*/ _return_setup($setup$1), $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><button class=mode>b</button><button class=set>set</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b b`)("D l");
const $mode = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill0", "mode/5", ($scope) => $input_onChange($scope["#childScope/0"], $scope.mode === "a" ? $onChange($scope) : $onChange2($scope)));
const $last = /*@__PURE__*/ _fill_let("__tests__/template.marko_fill1", "last/6", ($scope) => _text($scope["#text/2"], $scope.last));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/3"], "click", function() {
		$mode($scope, "b");
	});
	_on($scope["#button/4"], "click", function() {
		_var_change($scope["#childScope/0"], 5, "count");
	});
});
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $count);
	$setup__script($scope);
	$mode($scope, "a");
	$last($scope, "none");
}
const $count = _var_resume("__tests__/template.marko_0_count#5/var", ($scope, count) => {});
const $onChange2 = ($scope) => function(v) {
	$last($scope, "b" + v);
};
const $onChange = ($scope) => function(v) {
	$last($scope, "a" + v);
};
_resumed["__tests__/template.marko_0/onChange2"] = $onChange2;
_resumed["__tests__/template.marko_0/onChange"] = $onChange;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
