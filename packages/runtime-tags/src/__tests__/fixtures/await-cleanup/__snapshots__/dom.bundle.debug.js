// template.marko
const $template = "<button></button><div id=one>Fail</div><div id=two>Fail</div><!><!>";
const $walks = " d%c";
_enable_catch();
const $await_content2__setup__script = _script("__tests__/template.marko_5", ($scope) => $signal($scope, 0).onabort = () => document.querySelector("#two").textContent = "Pass");
const $await_content2__setup = ($scope) => {
	$signalReset($scope, 0);
	$await_content2__setup__script($scope);
};
const $placeholder_content = _content_resume("__tests__/template.marko_4_content", "loading...", "b");
const $await_content__show = /*@__PURE__*/ _closure_get("show", ($scope) => _text($scope["#text/0"], $scope._._._.show), ($scope) => $scope._._._, "__tests__/template.marko_3_show/pending");
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => $signal($scope, 0).onabort = () => document.querySelector("#one").textContent = "Pass");
const $await_content__setup = ($scope) => {
	$await_content__show($scope);
	$signalReset($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " b", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $await_content2 = /*@__PURE__*/ _await_content("#text/1", 0, 0, $await_content2__setup);
const $try_content__await_promise2 = /*@__PURE__*/ _await_promise("#text/1");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$await_content2($scope);
	$try_content__await_promise($scope, resolveAfter(0, 1));
	$try_content__await_promise2($scope, resolveAfter(0, 1));
};
const $if_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!><!>", "b%b%c", $try_content__setup);
const $if_content__setup = ($scope) => $if_content__try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
const $if = /*@__PURE__*/ _if("#text/1", "<!><!><!>", "b%c", $if_content__setup);
const $show__closure = /*@__PURE__*/ _closure($await_content__show);
const $show = /*@__PURE__*/ _let("show/2", ($scope) => {
	$if($scope, $scope.show ? 0 : 1);
	$show__closure($scope);
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$show($scope, 0);
}));
function $setup($scope) {
	$show($scope, 1);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
