// template.marko
const $catch_content2__outer_message = ($scope, outer_message) => _text($scope.a, outer_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__outer_message($scope, $params3[0]?.message);
const $catch_content2 = _content("a6", "outer caught <!>", "b%", 0, $catch_content2__$params);
const $try_content3__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._._.d ? (() => {
	throw new Error("body " + $scope._._.d);
})() : "ok"), ($scope) => $scope._._, "a5");
const $try_content3__setup = $try_content3__n;
const $catch_content__n__OR__err_message = /*@__PURE__*/ _or(7, ($scope) => _text($scope.c, $scope._._.d > 1 && $scope.g === "body 1" ? (() => {
	throw new Error("from catch");
})() : ""));
const $catch_content__n = /*@__PURE__*/ _closure_get(4, $catch_content__n__OR__err_message, ($scope) => $scope._._, "a2");
const $catch_content__setup = $catch_content__n;
const $catch_content__err_message = /*@__PURE__*/ _const(6, ($scope) => {
	_text($scope.b, $scope.g);
	$catch_content__n__OR__err_message($scope);
});
const $catch_content__$params = ($scope, $params5) => $catch_content__err_message($scope, $params5[0]?.message);
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("a3", "<!> caught <!><!>", "%c%b%", $catch_content__setup, $catch_content__$params), { 3($scope) {
	_text($scope.a, $scope.d);
} });
_resumed.a3 = $catch_content;
const $try_content2__try = /*@__PURE__*/ _try(0, " ", " ", $try_content3__setup);
const $try_content2__n = /*@__PURE__*/ _closure_get(4, ($scope) => {
	let $catch2;
	forOf([`inner ${$scope._.d}`], (label) => {
		$catch2 = attrTags($catch2, { content: $catch_content($scope, { 3: label }) });
	});
	$try_content2__try($scope, { catch: $catch2 });
}, 0, "a8");
const $try_content__n = /*@__PURE__*/ _closure_get(4, ($scope) => _text($scope.a, $scope._.d === 1 ? (() => {
	throw new Error("body");
})() : `body ${$scope._.d}`), 0, "a1");
const $try = /*@__PURE__*/ _try(1, " ", " ", $try_content__n);
const $n__closure = /*@__PURE__*/ _closure($try_content__n, $try_content2__n, $catch_content__n, $try_content3__n);
const $n = /*@__PURE__*/ _let(3, ($scope) => {
	let $catch;
	forOf([`empty ${$scope.d}`], (label) => {
		$catch = attrTags($catch, {});
	});
	$try($scope, { catch: $catch });
	$n__closure($scope);
});
const $setup__script = _script("a9", ($scope) => _on($scope.a, "click", function() {
	$n($scope, +$scope.d + 1);
}));
