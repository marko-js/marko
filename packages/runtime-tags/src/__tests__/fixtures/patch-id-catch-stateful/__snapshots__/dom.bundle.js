// tags/field.marko
const $template = "<label> </label><input><button>+</button>";
const $walks = " D l b b";
const $count = /*@__PURE__*/ _fill_let("b1", 7, ($scope) => _return($scope, $scope.h));
const $uid = ($scope, uid) => {
	_attr($scope.a, "for", uid);
	_attr($scope.c, "id", uid);
};
const $setup__script$1 = _script("b0", ($scope) => _on($scope.d, "click", function() {
	$count($scope, +$scope.h + 1);
}));
function $setup($scope) {
	$setup__script$1($scope);
	$count($scope, 0);
	$uid($scope, _id($scope));
}
const $input_name = ($scope, input_name) => _text($scope.b, input_name);

// template.marko
function fail() {
	throw new Error("caught");
}
const $catch_content__count = _var_resume("a0", ($scope, count) => _text($scope.c, count));
const $catch_content__setup = ($scope) => {
	$setup($scope.a);
	_var($scope, 0, $catch_content__count);
};
const $catch_content__error_message = ($scope, error_message) => $input_name($scope.a, error_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__error_message($scope, $params2[0]?.message);
const $catch_content = _content("a1", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($template), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks), $catch_content__setup, $catch_content__$params);
const $try_content__setup = ($scope) => _text($scope.a, fail());
const $if_content__try = /*@__PURE__*/ _try(0, " ", " ", $try_content__setup, 0, $catch_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.b, "click", function() {
	$show($scope, !$scope.c);
}));
