// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/counter.marko_fill0", "n/2", ($scope) => _text($scope["#text/1"], $scope.n));
const $setup__script = _script("__tests__/tags/counter.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$setup__script($scope);
	$n($scope, 0);
}
var counter_default = /*@__PURE__*/ _template("__tests__/tags/counter.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = () => {};
const SITE = "Shop";
function throwIt() {
	throw new Error("boom");
}
const $if_content__setup = ($scope) => _text($scope["#text/0"], throwIt());
const $catch_content = _content("__tests__/template.marko_3*content", "caught");
const $try_content__page_title = /*@__PURE__*/ _closure_get("page_title/5", ($scope) => _text($scope["#text/1"], $scope._.page_title), 0, "__tests__/template.marko_2_page_title#1:3/subscribe");
const $try_content__setup = ($scope) => {
	$try_content__page_title($scope);
	$try_content__page_fail($scope);
	$setup$1($scope["#childScope/2"]);
	_text($scope["#text/0"], SITE);
};
const $try_content__if = /*@__PURE__*/ _if("#text/3", " ", " ", $if_content__setup);
const $try_content__page_fail = /*@__PURE__*/ _closure_get("page_fail/6", ($scope) => $try_content__if($scope, $scope._.page_fail ? 0 : 1), 0, "__tests__/template.marko_2_page_fail#1:4/subscribe");
const $for_content__try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<p><!> <!></p>${_w0}<!><!>`)($template$1), /*@__PURE__*/ ((_w0) => `D%c%l/${_w0}&%c`)($walks$1), $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for_content__$params = ($scope, $params2) => {
	$for_content__page_title($scope, $params2[0]?.title);
	$for_content__page_fail($scope, $params2[0]?.fail);
};
const $for_content__page_title__closure = /*@__PURE__*/ _closure($try_content__page_title);
const $for_content__page_title = /*@__PURE__*/ _const("page_title", $for_content__page_title__closure);
const $for_content__page_fail__closure = /*@__PURE__*/ _closure($try_content__page_fail);
const $for_content__page_fail = /*@__PURE__*/ _const("page_fail", $for_content__page_fail__closure);
const $for = /*@__PURE__*/ _for_of("#main/0", "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input_pages = ($scope, input_pages) => $for($scope, [input_pages, "key"]);
const $input = ($scope, input) => $input_pages($scope, input.pages);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, " b", $setup, $input);
