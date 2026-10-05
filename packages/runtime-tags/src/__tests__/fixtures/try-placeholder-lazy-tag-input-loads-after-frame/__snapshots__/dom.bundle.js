// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_value = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_value.mjs"));
const $placeholder_content = _content("b0", "loading");
const $try_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$load_Child_tag_input_value($scope.b, "b");
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><!>", "b%/&", $try_content__setup, $placeholder_content);
const $if_content__setup = ($scope) => $if_content__try($scope);
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $show = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("b1", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
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
