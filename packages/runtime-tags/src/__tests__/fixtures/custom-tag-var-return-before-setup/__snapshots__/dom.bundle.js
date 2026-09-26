// tags/child.marko
const $input_x$1 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));

// tags/row.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<p class=row> </p>`)("");
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)("");
const $v = _var_resume("c0", ($scope, v) => _text($scope.c, v));
function $setup($scope) {
	_var($scope, 0, $v);
}
const $input_x = ($scope, input_x) => $input_x$1($scope.a, input_x);

// template.marko
const $catch_content__v = _var_resume("a5", ($scope, v) => _text($scope.c, v));
const $catch_content__setup = ($scope) => {
	_var($scope, 0, $catch_content__v);
};
const $catch_content__err_message = ($scope, err_message) => $input_x$1($scope.a, err_message);
const $catch_content__$params = ($scope, $params6) => $catch_content__err_message($scope, $params6[0]?.message);
const $catch_content = _content("a6", /*@__PURE__*/ ((_w0) => `${_w0}<p class=catch> </p>`)(""), /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)(""), $catch_content__setup, $catch_content__$params);
const $wrap_content__v = _var_resume("a3", ($scope, v) => _text($scope.c, v));
const $Count_content__v = _var_resume("a1", ($scope, v) => _text($scope.c, v));
const $Count_content__x = ($scope, x) => $input_x$1($scope.a, x);
const $for_content__v = _var_resume("a0", ($scope, v) => _text($scope.c, v));
const $for_content__setup = ($scope) => {
	_var($scope, 0, $for_content__v);
	$setup($scope.d);
};
const $for_content__item = ($scope, item) => {
	$input_x$1($scope.a, item);
	$input_x($scope.d, item);
};
const $for_content__$params = ($scope, $params2) => $for_content__item($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of_unkeyed(1, /*@__PURE__*/ ((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template), /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", $walks), $for_content__setup, $for_content__$params);
const $list = /*@__PURE__*/ _let(6, ($scope) => {
	$list_length($scope, $scope.g?.length);
	$for($scope, [$scope.g]);
});
const $list_length = /*@__PURE__*/ _const(7, ($scope) => $Count_content__x($scope.c, $scope.h));
const $setup__script = _script("a8", ($scope) => _on($scope.a, "click", function() {
	$list($scope, [...$scope.g, "c"]);
}));
