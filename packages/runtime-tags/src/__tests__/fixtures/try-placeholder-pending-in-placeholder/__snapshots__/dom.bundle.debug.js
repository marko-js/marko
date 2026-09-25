// template.marko
const $template = "<button>inc</button><!><!>";
const $walks = " b%c";
const $await_content3__y = ($scope, y) => _text($scope["#text/0"], y);
const $await_content3__$params = ($scope, $params4) => $await_content3__y($scope, $params4[0]);
const $await_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content2__$params = ($scope, $params3) => $await_content2__x($scope, $params3[0]);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $placeholder_content3__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $placeholder_content3__setup = ($scope) => {
	$await_content2($scope);
	$placeholder_content3__await_promise($scope, resolveAfter("c", 4));
};
const $placeholder_content3 = _content("__tests__/template.marko_8*content", "C loading <!><!>", "b%", $placeholder_content3__setup);
const $await_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $placeholder_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $placeholder_content2__setup = ($scope) => {
	$await_content($scope);
	$placeholder_content2__await_promise($scope, resolveAfter("b", 8));
};
const $placeholder_content2 = _content("__tests__/template.marko_6*content", "B loading <!><!>", "b%", $placeholder_content2__setup);
const $placeholder_content = _content("__tests__/template.marko_5*content", "A loading");
const $await_content3 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $if_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content3__$params);
const $if_content__count = /*@__PURE__*/ _closure_get("count", ($scope) => $if_content__await_promise($scope, resolveAfter($scope._._._._.count)), ($scope) => $scope._._._._, "__tests__/template.marko_4_count#2/subscribe");
const $if_content__setup = ($scope) => {
	$if_content__count($scope);
	$await_content3($scope);
};
const $try_content3__if = /*@__PURE__*/ _if("#text/0", "<!><!><!>", "b%", $if_content__setup);
const $try_content3__count = /*@__PURE__*/ _closure_get("count", ($scope) => $try_content3__if($scope, $scope._._._.count ? 0 : 1), ($scope) => $scope._._._, "__tests__/template.marko_3_count#2/subscribe");
const $try_content3__setup = $try_content3__count;
const $try_content2__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content3__setup);
const $try_content2__setup = ($scope) => $try_content2__try($scope, { placeholder: attrTag({ content: $placeholder_content3($scope) }) });
const $try_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup);
const $try_content__setup = ($scope) => $try_content__try($scope, { placeholder: attrTag({ content: $placeholder_content2($scope) }) });
const $count__closure = /*@__PURE__*/ _closure($try_content3__count, $if_content__count);
const $count = /*@__PURE__*/ _let("count/2", $count__closure);
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$count($scope, +$scope.count + 1);
}));
function $setup($scope) {
	$count($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
