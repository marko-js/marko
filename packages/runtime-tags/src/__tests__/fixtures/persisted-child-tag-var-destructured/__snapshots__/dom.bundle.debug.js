// tags/counter/index.marko
const $template$1 = "<span>box <!></span>";
const $walks$1 = "Db%l";
const $count = /*@__PURE__*/ _fill_let("__tests__/tags/counter/index.marko0", "count/1", ($scope) => {
	_text($scope["#text/0"], $scope.count);
	_return($scope, {
		value: $scope.count,
		valueChange: $_return($scope)
	});
});
function $setup$1($scope) {
	$count($scope, 1);
}
const $_return = ($scope) => function(v) {
	$count($scope, v);
};
_resume("__tests__/tags/counter/index.marko_0/_return", $_return);
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main><!><button class=toggle>t</button></main>";
const $walks = "D%b l";
const $if_content__$pattern = _var_resume("__tests__/template.marko_1_$pattern#4/var", ($scope, $pattern) => {
	$if_content__value($scope, $pattern.value);
	$if_content__$valueChange($scope, $pattern.valueChange);
});
const $if_content__value = ($scope, value) => _text($scope["#text/2"], value);
const $if_content__$valueChange__script = _script("__tests__/template.marko_1_$valueChange#6", ($scope) => _on($scope["#button/3"], "click", function() {
	$scope.$valueChange(0);
}));
const $if_content__$valueChange = /*@__PURE__*/ _const("$valueChange", $if_content__$valueChange__script);
const $if_content__setup = ($scope) => {
	_var($scope, "#childScope/0", $if_content__$pattern);
	$setup$1($scope["#childScope/0"]);
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
