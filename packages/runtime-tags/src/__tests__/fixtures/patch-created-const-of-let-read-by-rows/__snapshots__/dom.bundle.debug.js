// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
function initial(user) {
	return user.name[0];
}
const $for_content__letter__OR__l = /*@__PURE__*/ _or_patch("__tests__/template.marko_2_letter#1:2_l#4/setup", 5, ($scope) => _text($scope["#text/1"], $scope.l === $scope._.letter ? "*" : ""));
const $for_content__letter = /*@__PURE__*/ _for_closure("#text/0", $for_content__letter__OR__l, 6);
const $for_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$if_content__user($scope._, { name: $scope.l });
}));
const $for_content__setup = ($scope) => {
	$for_content__letter._($scope);
	$for_content__setup__script($scope);
};
const $for_content__l = /*@__PURE__*/ _const("l", ($scope) => {
	$for_content__letter__OR__l($scope);
	_text($scope["#text/2"], $scope.l);
});
const $for_content__$params = ($scope, $params2) => $for_content__l($scope, $params2[0]);
const $if_content__letter = /*@__PURE__*/ _const("letter", $for_content__letter);
const $if_content__user = _let("user/1", ($scope) => $if_content__letter($scope, initial($scope.user)));
const $if_content__input_user = /*@__PURE__*/ _if_closure_patch("__tests__/template.marko_1_input_user#0:4/setup", "#text/0", 0, ($scope) => $if_content__user($scope, $scope._.input_user));
const $if_content__for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<button><!><!></button>", " D%b%", $for_content__setup, $for_content__$params);
const $if_content__setup = ($scope) => {
	$if_content__input_user._($scope);
	$if_content__for($scope, [["A", "B"]]);
};
const $if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_user($scope, input.user);
	$input_show($scope, input.show);
};
const $input_user = /*@__PURE__*/ _const("input_user", $if_content__input_user);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
