// tags/child.marko
const $input_label__OR__input_count = /*@__PURE__*/ _or_patch("b0", 4, ($scope) => _return($scope, $scope.c + $scope.d));
const $input_label = /*@__PURE__*/ _const(2, $input_label__OR__input_count);
const $input_count = /*@__PURE__*/ _const(3, $input_label__OR__input_count);

// template.marko
const $catch_content2__input_label__OR__err_message = /*@__PURE__*/ _or_patch("a10", 7, ($scope) => _text($scope.a, $scope._.e + $scope.g));
const $catch_content2__input_label = /*@__PURE__*/ _closure_get_patch("a8", 8, ($scope) => {
	$input_label($scope.b, $scope._.e);
	$catch_content2__input_label__OR__err_message($scope);
}, 0, "a14", 1);
const $catch_content2__setup = ($scope) => {
	$catch_content2__input_label($scope);
	$catch_content2__input_count($scope);
	_var($scope, 1, $catch_content2__text);
};
const $catch_content2__input_count = /*@__PURE__*/ _closure_get_patch("a9", 9, ($scope) => $input_count($scope.b, $scope._.f), 0, "a15", 1);
const $catch_content2__err_message = /*@__PURE__*/ _const(6, $catch_content2__input_label__OR__err_message);
const $catch_content2__text = _var_resume("a7", ($scope, text) => _text($scope.d, text));
const $catch_content2__$params = ($scope, $params3) => $catch_content2__err_message($scope, $params3[0]?.message);
const $catch_content2 = _content$1("a12", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<i> </i>`)(""), /*@__PURE__*/ ((_w0) => `D 0${_w0}&lD l`)(""), $catch_content2__setup, $catch_content2__$params);
const $catch_content__input_label__OR__err_message = /*@__PURE__*/ _or_patch("a3", 7, ($scope) => _text($scope.a, $scope._.e + $scope.g));
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("a1", 8, ($scope) => {
	$input_label($scope.b, $scope._.e);
	$catch_content__input_label__OR__err_message($scope);
}, 0, "a14", 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$catch_content__input_count($scope);
	_var($scope, 1, $catch_content__text);
};
const $catch_content__input_count = /*@__PURE__*/ _closure_get_patch("a2", 9, ($scope) => $input_count($scope.b, $scope._.f), 0, "a15", 0);
const $catch_content__err_message = /*@__PURE__*/ _const(6, $catch_content__input_label__OR__err_message);
const $catch_content__text = _var_resume("a0", ($scope, text) => _text($scope.d, text));
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("a5", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<i> </i>`)(""), /*@__PURE__*/ ((_w0) => `D 0${_w0}&lD l`)(""), $catch_content__setup, $catch_content__$params);
