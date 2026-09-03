// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__value = ($scope, value) => _text($scope["#text/0"], value);
const $await_content__$params = ($scope, $params3) => $await_content__value($scope, $params3[0]);
const $catch_content__n = /*@__PURE__*/ _let("n/6", ($scope) => _text($scope["#text/2"], $scope.n));
const $catch_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__n($scope, +$scope.n + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__n($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/1"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_2*content", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, rejectAfter(new Error("nope"), 1));
};
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$try($scope, { catch: attrTag({ content: $catch_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
