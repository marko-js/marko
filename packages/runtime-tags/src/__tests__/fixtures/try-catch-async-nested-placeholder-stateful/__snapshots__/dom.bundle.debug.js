// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__n = /*@__PURE__*/ _let("n/4", ($scope) => _text($scope["#text/2"], $scope.n));
const $await_content2__setup__script = _script("__tests__/template.marko_6", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content2__n($scope, +$scope.n + 1);
}));
const $await_content2__setup = ($scope) => {
	$await_content2__n($scope, 0);
	$await_content2__setup__script($scope);
};
const $await_content2__value = ($scope, value) => _text($scope["#text/1"], value);
const $placeholder_content = _content_resume("__tests__/template.marko_5*content", "loading");
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", "<button><!> <!></button>", " D%c%", $await_content2__setup);
const $try_content2__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__value);
const $try_content2__setup = ($scope) => {
	$await_content2($scope);
	$try_content2__await_promise($scope, resolveAfter("inner", 2));
};
const $await_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content2__setup, $placeholder_content);
const $await_content__setup = $await_content__try;
const $catch_content__err = ($scope, err) => _text($scope["#text/0"], err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "caught <!>", "b%", 0, $catch_content__err);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<!><!><!>", "b%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("outer", 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
