// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $if_content__x = ($scope, x) => _text($scope["#text/0"], x);
const $if_content__setup = ($scope) => $if_content__x($scope, (() => {
	throw new Error("bang");
})());
const $await_content__if = /*@__PURE__*/ _if("#text/0", " ", " ", $if_content__setup);
const $await_content__n = /*@__PURE__*/ _let("n/6", ($scope) => {
	_text($scope["#text/3"], $scope.n);
	$await_content__if($scope, $scope.n ? 0 : 1);
});
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/1"], "click", function() {
	$await_content__n($scope, +$scope.n + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__n($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content__value = ($scope, value) => _text($scope["#text/2"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><button><!> <!></button>", "b%b D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("ready", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
