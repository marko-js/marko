// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(($_) => import("./v:child.marko.input_label.mjs"));
const $catch_content__input_label = /*@__PURE__*/ _closure_get(5, ($scope) => $load_Child_tag_input_label($scope.c, $scope._.d), 0, "b0");
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$load_Child_setup($scope, $scope.c, $scope.b);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("b2", "<b> </b><!><!>", "D l%/&", $catch_content__setup, $catch_content__$params);

// child.marko
var child_exports = /* @__PURE__ */ __exportAll({
	$input_label: () => $input_label,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks
});
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _let(6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
