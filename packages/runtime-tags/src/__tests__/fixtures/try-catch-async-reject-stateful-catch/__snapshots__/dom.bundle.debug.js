// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $catch_content__n = /*@__PURE__*/ _let("n/5", ($scope) => _text($scope["#text/2"], $scope.n));
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__n($scope, +$scope.n + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__n($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err = ($scope, err) => _text($scope["#text/1"], err?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__err);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__value);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("nope"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $setup = $try;
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
