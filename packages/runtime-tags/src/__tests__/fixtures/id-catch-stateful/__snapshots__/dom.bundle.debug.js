// tags/field.marko
const $template$1 = "<label> </label><input><button>+</button>";
const $walks$1 = " D l b b";
const $count = /*@__PURE__*/ _let("count/7", ($scope) => _return($scope, $scope.count));
const $uid = ($scope, uid) => {
	_attr($scope["#label/0"], "for", uid);
	_attr($scope["#input/2"], "id", uid);
};
const $setup__script$1 = _script("__tests__/tags/field.marko_0", ($scope) => _on($scope["#button/3"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup$1($scope) {
	$count($scope, 0);
	$uid($scope, _id($scope));
	$setup__script$1($scope);
}
const $input_name = ($scope, input_name) => _text($scope["#text/1"], input_name);
const $input = ($scope, input) => $input_name($scope, input.name);
var field_default = /*@__PURE__*/ _template("__tests__/tags/field.marko", $template$1, $walks$1, /*@__PURE__*/ _return_setup($setup$1), $input);

// template.marko
const $template = "<!><!><button>toggle</button>";
const $walks = "b%b b";
function fail() {
	throw new Error("caught");
}
const $catch_content__count = _var_resume("__tests__/template.marko_3_count#6/var", ($scope, count) => _text($scope["#text/2"], count));
const $catch_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
	_var($scope, "#childScope/0", $catch_content__count);
};
const $catch_content__error_message = ($scope, error_message) => $input_name($scope["#childScope/0"], error_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__error_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template$1), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1), $catch_content__setup, $catch_content__$params);
const $try_content__setup = ($scope) => _text($scope["#text/0"], fail());
const $if_content__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content__setup, 0, $catch_content);
const $if_content__setup = $if_content__try;
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => $if($scope, $scope.show ? 0 : 1));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
