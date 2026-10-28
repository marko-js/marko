// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = ($_) => {};
const $if_content__input_user = /*@__PURE__*/ _init_resume("__tests__/template.marko_1_input_user#0:4/init", /*@__PURE__*/ _fill_join("__tests__/template.marko_fill0", "input_user", /*@__PURE__*/ _if_closure("#main/0", 0, ($scope) => $input_user$1($scope["#childScope/0"], $scope._.input_user))));
const $if_content__setup = ($scope) => {
	$if_content__input_user._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#main/0", $template$1, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_show($scope, input.show);
	$input_user($scope, input.user);
};
const $input_user = /*@__PURE__*/ _fill_const("__tests__/template.marko_fill0", "input_user", $if_content__input_user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", 0, $input);

// tags/child.marko
const $template = "<em> </em><button>set</button><button>reset</button>";
const $walks = "D l b b";
const $user = _let("user/6", ($scope) => $user_name($scope, $scope.user?.name));
const $user_name = /*@__PURE__*/ _const("user_name", ($scope) => $user_name_length($scope, $scope.user_name?.length));
const $user_name_length__script = _script("__tests__/tags/child.marko_0_user_name_length#8", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.user_name_length);
}));
const $user_name_length = /*@__PURE__*/ _const("user_name_length", $user_name_length__script);
const $input_user = $user;
const $count = _let("count/9", ($scope) => _text($scope["#text/0"], $scope.count));
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/2"], "click", function() {
	$user($scope, { name: "x" });
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input = ($scope, input) => $input_user($scope, input.user);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup, $input);
