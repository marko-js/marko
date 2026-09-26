// template.marko
const $template = "<button>inc</button><div><!></div><div><!></div>";
const $walks = " bD%lD%l";
const $catch_content2__outer_message = ($scope, outer_message) => _text($scope["#text/0"], outer_message);
const $catch_content2__$params = ($scope, $params3) => $catch_content2__outer_message($scope, $params3[0]?.message);
const $catch_content2 = _content("__tests__/template.marko_5*content", "outer caught <!>", "b%", 0, $catch_content2__$params);
const $try_content3__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/0"], $scope._._.n ? (() => {
	throw new Error("body " + $scope._._.n);
})() : "ok"), ($scope) => $scope._._, "__tests__/template.marko_4_n#3/subscribe");
const $try_content3__setup = $try_content3__n;
const $catch_content__n__OR__err_message = /*@__PURE__*/ _or(7, ($scope) => _text($scope["#text/2"], $scope._._.n > 1 && $scope.err_message === "body 1" ? (() => {
	throw new Error("from catch");
})() : ""));
const $catch_content__n = /*@__PURE__*/ _closure_get("n", $catch_content__n__OR__err_message, ($scope) => $scope._._, "__tests__/template.marko_3_n#3/subscribe");
const $catch_content__setup = $catch_content__n;
const $catch_content__err_message = /*@__PURE__*/ _const("err_message", ($scope) => {
	_text($scope["#text/1"], $scope.err_message);
	$catch_content__n__OR__err_message($scope);
});
const $catch_content__$params = ($scope, $params5) => $catch_content__err_message($scope, $params5[0]?.message);
const $catch_content = /*@__PURE__*/ _content_closures(/*@__PURE__*/ _content("__tests__/template.marko_3*content", "<!> caught <!><!>", "%c%b%", $catch_content__setup, $catch_content__$params), { label($scope) {
	_text($scope["#text/0"], $scope.label);
} });
_resumed["__tests__/template.marko_3*content"] = $catch_content;
const $try_content2__try = /*@__PURE__*/ _try("#text/0", " ", " ", $try_content3__setup);
const $try_content2__n = /*@__PURE__*/ _closure_get("n", ($scope) => {
	let $catch2;
	forOf([`inner ${$scope._.n}`], (label) => {
		$catch2 = attrTags($catch2, { content: $catch_content($scope, { label }) });
	});
	$try_content2__try($scope, { catch: $catch2 });
}, 0, "__tests__/template.marko_2_n#3/subscribe");
const $try_content2__setup = $try_content2__n;
const $try_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope["#text/0"], $scope._.n === 1 ? (() => {
	throw new Error("body");
})() : `body ${$scope._.n}`), 0, "__tests__/template.marko_1_n#3/subscribe");
const $try_content__setup = $try_content__n;
const $try = /*@__PURE__*/ _try("#text/1", " ", " ", $try_content__setup);
const $n__closure = /*@__PURE__*/ _closure($try_content__n, $try_content2__n, $catch_content__n, $try_content3__n);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	let $catch;
	forOf([`empty ${$scope.n}`], (label) => {
		$catch = attrTags($catch, {});
	});
	$try($scope, { catch: $catch });
	$n__closure($scope);
});
const $try2 = /*@__PURE__*/ _try("#text/2", "<!><!><!>", "b%", $try_content2__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$n($scope, 0);
	$try2($scope, { catch: attrTag({ content: $catch_content2($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
