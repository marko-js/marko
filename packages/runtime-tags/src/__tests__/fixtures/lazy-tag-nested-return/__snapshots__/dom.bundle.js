// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $if_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.b, $scope.a);
	$load_Child_tag_input_label($scope.b, "x");
};
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%/&", $if_content__setup);
const $mounted = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("b0", ($scope) => _on($scope.a, "click", function() {
	$mounted($scope, true);
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
_resumed.c0 = $focus$1;

// child.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<span> </span><button class=focus>focus</button>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `0${_w0}&D l b`)($walks$1);
const $focus = _var_resume("a0", /*@__PURE__*/ _const(7));
const $setup__script = _script("a1", ($scope) => _on($scope.d, "click", function() {
	$scope.h();
}));
function $setup($scope) {
	_var($scope, 0, $focus);
	$setup$1($scope.a);
	$setup__script($scope);
}
const $input_label = ($scope, input_label) => _text($scope.c, input_label);

// v:child.marko.setup.js
const _ = [
	$template,
	$walks,
	$setup
];
