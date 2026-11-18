// template.marko
const $catch_content7__err = ($scope, err) => _text($scope.a, (() => {
	throw new Error(`catch of ${err?.message}`);
})());
const $catch_content7 = _content("a8", " ", " ", 0, $catch_content7__err);
const $try_content7__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("try body");
})());
const $if_content4__setup = /* @__PURE__ */ _try(0, " ", " ", $try_content7__setup, 0, $catch_content7);
const $catch_content6__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content6 = _content("a10", "outer caught <!>", "b%", 0, $catch_content6__err);
const $catch_content5__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("catch");
})());
const $catch_content5 = _content("a5", " ", " ", $catch_content5__setup);
const $try_content6__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("try body");
})());
const $if_content3__setup = /* @__PURE__ */ _try(0, " ", " ", $try_content6__setup, 0, $catch_content5);
const $catch_content4__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content4 = _content("a7", "outer caught <!>", "b%", 0, $catch_content4__err);
const $catch_content3__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content3 = _content("a2", "caught <!>", "b%", 0, $catch_content3__err);
const $try_content5__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("try body");
})());
const $if_content2__setup = /* @__PURE__ */ _try(0, " ", " ", $try_content5__setup, 0, $catch_content3);
const $catch_content2__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content2 = _content("a4", "outer caught <!>", "b%", 0, $catch_content2__err);
const $if_content__setup = ($scope) => _text($scope.a, (() => {
	throw new Error("if body");
})());
const $catch_content__err = ($scope, err) => _text($scope.a, err?.message);
const $catch_content = _content("a1", "caught <!>", "b%", 0, $catch_content__err);
const $try_content4__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content4__setup);
const $try_content4__show = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content4__if($scope, $scope._.f ? 0 : 1), 0, "a9");
const $try_content3__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content3__setup);
const $try_content3__show = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content3__if($scope, $scope._.f ? 0 : 1), 0, "a6");
const $try_content2__if = /*@__PURE__*/ _if(0, "<!><!><!>", "b%", $if_content2__setup);
const $try_content2__show = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content2__if($scope, $scope._.f ? 0 : 1), 0, "a3");
const $try_content__if = /*@__PURE__*/ _if(0, " ", " ", $if_content__setup);
const $try_content__show = /*@__PURE__*/ _closure_get(6, ($scope) => $try_content__if($scope, $scope._.f ? 0 : 1), 0, "a0");
const $show = /*@__PURE__*/ _let(5, /* @__PURE__ */ _closure($try_content__show, $try_content2__show, $try_content3__show, $try_content4__show));
const $setup__script = _script("a11", ($scope) => _on($scope.a, "click", function() {
	$show($scope, true);
}));
