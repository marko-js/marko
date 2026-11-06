// template.marko
const $catch_content__$params = ($scope, $params3) => _text($scope.a, $params3[0]?.message);
const $catch_content = _content("a2", " ", " ", 0, $catch_content__$params);
const $placeholder_content__promise__script = _script("a0", ($scope) => (async () => {
	document.getElementById("ref").textContent = await $scope.a;
})());
const $placeholder_content__promise = /*@__PURE__*/ _const(0, $placeholder_content__promise__script);
const $placeholder_content__setup = ($scope) => $placeholder_content__promise($scope, resolveAfter("hello", 2));
const $placeholder_content = _content("a1", "<div id=ref>0</div>", 0, $placeholder_content__setup);
