// template.marko
const $Lazy_content__walks = "b%/&c";
const $Lazy_content__template = "<!><!><!>";
let $load_Child_setup = /*@__PURE__*/ _load_setup(($_) => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal_patch(($_) => import("./v:child.marko.input_label.mjs"), "_a");
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__setup = ($scope) => {
	$scope.b._ = $scope._;
	$Lazy_content__setup($scope.b);
};
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content$1("b5", /*@__PURE__*/ ((_w0) => `<b> </b>${_w0}<!>`)($Lazy_content__template), /*@__PURE__*/ ((_w0) => `D l/${_w0}&b`)($Lazy_content__walks), $catch_content__setup, $catch_content__$params);
const $Lazy_content__input_label = /*@__PURE__*/ _init_resume("b1", _closure_resume("b2", /*@__PURE__*/ _fill_closure("b7", 3, /*@__PURE__*/ _closure_get(5, ($scope) => $load_Child_tag_input_label($scope.b, $scope._.d)), 0)));
const $Lazy_content__setup = ($scope) => {
	$Lazy_content__input_label($scope);
	$load_Child_setup($scope, $scope.b, $scope.a);
};

// child.marko
var child_exports = /* @__PURE__ */ __exportAll({
	$input_label: () => $input_label,
	$setup: () => $setup,
	$template: () => $template,
	$walks: () => $walks
});
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
