// template.marko
const $catch_content__err_message = ($scope, err_message) => _text($scope.a, err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("a3", " ", " ", 0, $catch_content__$params);
const $placeholder_content__promise = /*@__PURE__*/ _const(0, _script("a0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.a;
})()));
const $placeholder_content__setup = ($scope) => $placeholder_content__promise($scope, resolveAfter("hello", 2));
const $placeholder_content = _content("a1", "<div id=ref>0</div>", 0, $placeholder_content__setup);
