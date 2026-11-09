// template.marko
const $Label_content__walks = "D%c%l";
const $Label_content__template = "<b><!> <!></b>";
const $template = "<!><!><!>";
const $walks = "b%c";
const $Label_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_input_n#0:4/subscribe", "input_n/6", ($scope) => _text($scope["#text/1"], $scope._._.input_n), ($scope) => $scope._._);
const $Label_content__setup = ($scope) => {
	$Label_content__input_n($scope);
	$Label_content__v($scope);
};
const $Label_content__v = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_2_v#1:4/subscribe", "v/8", ($scope) => _text($scope["#text/0"], $scope._.v));
const $await_content__input_n__OR__twice__script = _script("__tests__/template.marko_1_input_n#0:4_twice#5", ($scope) => console.log("effect", $scope._.input_n, $scope.twice));
const $await_content__input_n__OR__twice = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_n#0:4_twice#5/setup", 6, $await_content__input_n__OR__twice__script);
const $await_content__twice = /*@__PURE__*/ _const("twice", $await_content__input_n__OR__twice);
const $await_content__input_n__OR__input_m = /*@__PURE__*/ _or_patch("__tests__/template.marko_1_input_n#0:4_input_m#0:5/setup", 2, ($scope) => _text($scope["#text/1"], $scope._.input_n + $scope._.input_m));
const $await_content__input_n = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_n#0:4/subscribe", "input_n/6", ($scope) => {
	$await_content__twice($scope, $scope._.input_n * 2);
	$await_content__input_n__OR__input_m($scope);
	$await_content__input_n__OR__twice($scope);
});
const $await_content__setup = ($scope) => {
	$await_content__input_n($scope);
	$await_content__input_m($scope);
	$scope["#childScope/0"]._ = $scope;
	$Label_content__setup($scope["#childScope/0"]);
};
const $await_content__input_m = /*@__PURE__*/ _closure_get_patch("__tests__/template.marko_1_input_m#0:5/subscribe", "input_m/7", $await_content__input_n__OR__input_m);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $await_content__v__closure = /*@__PURE__*/ _closure($Label_content__v);
const $await_content__v = /*@__PURE__*/ _const("v", $await_content__v__closure);
const $await_content = /*@__PURE__*/ _await_content("#text/0", /*@__PURE__*/ ((_w0) => `${_w0}<p> </p>`)($Label_content__template), /*@__PURE__*/ ((_w0) => `/${_w0}&D l`)($Label_content__walks), $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $setup = $await_content;
const $input_p = $await_promise;
const $input = ($scope, input) => {
	$input_p($scope, input.p);
	$input_n($scope, input.n);
	$input_m($scope, input.m);
};
const $input_n__closure = /*@__PURE__*/ _closure($await_content__input_n, $Label_content__input_n);
const $input_n = /*@__PURE__*/ _const("input_n", $input_n__closure);
const $input_m__closure = /*@__PURE__*/ _closure($await_content__input_m);
const $input_m = /*@__PURE__*/ _const("input_m", $input_m__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
