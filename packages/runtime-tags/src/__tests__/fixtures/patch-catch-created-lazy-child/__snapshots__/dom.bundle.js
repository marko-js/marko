// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:child.marko.input_label.mjs"), "_a");
const $catch_content__input_label = /*@__PURE__*/ _closure_get_patch("b0", 5, ($scope) => $load_Child_tag_input_label($scope.c, $scope._.d), 0, "b5", 0);
const $catch_content__setup = ($scope) => {
	$catch_content__input_label($scope);
	$load_Child_setup($scope, $scope.c, $scope.b);
};
const $catch_content__$params = ($scope, $params2) => _text($scope.a, $params2[0]?.message);
const $catch_content = _content$1("b2", "<b> </b><!><!>", "D l%/&", $catch_content__setup, $catch_content__$params);
const $setup__script = _script("b4", ($scope) => document.body.dataset.ready = "1");

// child.marko
var child_exports = /* @__PURE__ */ __exportAll({});
const $template = "<button><!>:<!></button>";
const $walks = " D%c%l";
const $count = /*@__PURE__*/ _fill_let("a1", 6, ($scope) => _text($scope.c, $scope.g));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$count($scope, +$scope.g + 1);
}));
function $setup($scope) {
	$setup__script($scope);
	$count($scope, 0);
}
const $input_label = ($scope, input_label) => _text($scope.b, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
