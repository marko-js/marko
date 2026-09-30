// template.marko
const $template = "<!><!><button class=toggle> </button>";
const $walks = "b%b D l";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<p> </p>", "D ", 0, $catch_content__$params);
const $if_content__show = /*@__PURE__*/ _closure_get("show/4", ($scope) => _text($scope["#text/0"], $scope._._.show), ($scope) => $scope._._, "__tests__/template.marko_2_show#0:3/subscribe");
const $if_content__setup = $if_content__show;
const $try_content__if = /*@__PURE__*/ _if("#text/0", "<span> </span>", "D ", $if_content__setup);
const $try_content__setup = ($scope) => {
	_text($scope["#text/1"], (() => {
		throw new Error("nope");
	})());
	$try_content__if($scope, true ? 0 : 1);
};
const $show__closure = /*@__PURE__*/ _closure($if_content__show);
const $show = /*@__PURE__*/ _let("show/3", ($scope) => {
	_text($scope["#text/2"], $scope.show);
	$show__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%b%", $try_content__setup, 0, $catch_content);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$show($scope, !$scope.show);
}));
function $setup($scope) {
	$show($scope, true);
	$try($scope);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
