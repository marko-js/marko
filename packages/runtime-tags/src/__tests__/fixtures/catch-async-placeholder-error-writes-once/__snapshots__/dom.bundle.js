// template.marko
let $load_Child_setup = /*@__PURE__*/ _load_setup(() => import("./v:child.marko.setup.mjs"));
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__setup = ($scope) => {
	$load_Child_setup($scope, $scope.c, $scope.b);
};
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("b1", "caught <!><!><!>", "b%b%/&", $catch_content__setup, $catch_content__$params);
const $await_content__value = ($scope, value) => _text($scope.a, value);
const $await_content__$params = ($scope, $params2) => $await_content__value($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content(0, " ", " ");
const $placeholder_content__await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $placeholder_content__setup = ($scope) => {
	$await_content($scope);
	$placeholder_content__await_promise($scope, resolveAfter("placeholder", 2));
};
const $placeholder_content = _content("b0", "<!><!><!>", "b%", $placeholder_content__setup);

// child.marko
const $template = "<div id=ref>0</div>";
const $promise = /*@__PURE__*/ _const(0, _script("a0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.a;
})()));
function $setup($scope) {
	$promise($scope, resolveAfter("hello", 3));
}

// v:child.marko.setup.js
const _ = [
	$template,
	"b",
	$setup
];
