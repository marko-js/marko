// tags/boom/index.marko
const $template$1 = "<!><!><button> </button>";
const $walks$1 = "b%b D l";
const $if_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $if_content__setup = ($scope) => $if_content__x($scope, (() => {
	throw new Error("bang");
})());
const $if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $n = /*@__PURE__*/ _let("n/3", ($scope) => {
	_text($scope["#text/2"], $scope.n);
	$if($scope, $scope.n ? 0 : 1);
});
const $setup__script = _script("__tests__/tags/boom/index.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup$1($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
var boom_default = /*@__PURE__*/ _template("__tests__/tags/boom/index.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $try_content__setup = ($scope) => {
	$setup$1($scope["#childScope/0"]);
};
const $try = /*@__PURE__*/ _try("#text/0", /*@__PURE__*/ ((_w0) => `<div>${_w0}</div>`)($template$1), /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)($walks$1), $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
