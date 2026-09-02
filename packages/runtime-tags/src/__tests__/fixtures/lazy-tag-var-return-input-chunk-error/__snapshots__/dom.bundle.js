// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(0, 1, () => import("./v:child.marko.setup.mjs"));
let $load_Child_tag_input_label = /*@__PURE__*/ _load_signal(() => import("./v:child.marko.input_label.mjs"));
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("b2", "<span class=err> </span>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content_resume("b1", "loading");
const $try_content__focusChild = _var_resume("b0", /*@__PURE__*/ _const(4));
const $try_content__setup__script = _script("b4", ($scope) => _on($scope.d, "click", function() {
	$scope.e();
}));
const $try_content__setup = ($scope) => {
	_var($scope, 1, $try_content__focusChild);
	$load_Child_setup($scope);
	$load_Child_tag_input_label($scope.b, "x");
	$try_content__setup__script($scope);
};
const $if_content__try = /*@__PURE__*/ _try(0, "<!><!><button class=focus>focus</button>", "b%0&b ", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, {
	placeholder: attrTag({ content: $placeholder_content($scope) }),
	catch: attrTag({ content: $catch_content($scope) })
});
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__setup);
const $mounted = /*@__PURE__*/ _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("b5", ($scope) => _on($scope.a, "click", function() {
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
