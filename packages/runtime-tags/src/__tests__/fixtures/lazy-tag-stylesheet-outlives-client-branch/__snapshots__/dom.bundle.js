// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $if_content__v = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $load_Child_tag_input_value($scope.b, $scope._.d));
const $if_content__setup = ($scope) => {
	$if_content__v._($scope);
	$load_Child_setup($scope, $scope.b, $scope.a);
};
const $await_content__if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%/&", $if_content__setup);
const $await_content__show = /*@__PURE__*/ _let(4, ($scope) => $await_content__if($scope, $scope.e ? 0 : 1));
const $await_content__setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$await_content__show($scope, !$scope.e);
}));

// child.marko
const $template = "<span class=child> </span>";
const $setup = () => {};
const $input_value = ($scope, input_value) => _text($scope.a, input_value);

// v:child.marko.setup.js
const _ = [
	$template,
	"D l",
	$setup
];
