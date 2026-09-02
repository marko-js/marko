// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__focusChild = _var_resume("b0", /*@__PURE__*/ _const(4));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.d, "click", function() {
	$scope.e();
}));
const $if_content__setup = ($scope) => {
	_var($scope, 1, $if_content__focusChild);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope.b, "x");
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(1, "<!><!><button class=focus>focus</button>", "b%0&b ", $if_content__setup);
const $mounted = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("b2", ($scope) => _on($scope.a, "click", function() {
	$mounted($scope, !$scope.c);
}));

// tags/inner.marko
const $template$1 = "<p>focused <!></p>";
const $walks$1 = "Db%l";
const $focus2 = /*@__PURE__*/ _const(2, ($scope) => _return($scope, $scope.c));
const $focused = /*@__PURE__*/ _let(1, ($scope) => {
	_text($scope.a, $scope.b);
	$focus2($scope, $focus$1($scope));
});
function $setup$1($scope) {
	$focused($scope, 0);
}
const $focus$1 = ($scope) => () => {
	$focused($scope, +$scope.b + 1);
};
_resume("c0", $focus$1);

// child.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l`)($walks$1);
const $focus = _var_resume("a0", /*@__PURE__*/ _const(6, ($scope) => _return($scope, $scope.g)));
function $setup($scope) {
	_var($scope, 0, $focus);
	$setup$1($scope.a);
}
const $input_label = ($scope, input_label) => _text($scope.c, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
