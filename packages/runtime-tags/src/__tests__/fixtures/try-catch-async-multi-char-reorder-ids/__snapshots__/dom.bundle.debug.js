// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content2__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content2__$params = ($scope, $params5) => $await_content2__v($scope, $params5[0]);
const $await_content__clicks = /*@__PURE__*/ _let("clicks/5", ($scope) => _text($scope["#text/2"], $scope.clicks));
const $await_content__setup__script = _script("__tests__/template.marko_4", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__clicks($scope, +$scope.clicks + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__clicks($scope, 0);
	$await_content__setup__script($scope);
};
const $await_content__message = ($scope, message) => _text($scope["#text/1"], message);
const $await_content__$params = ($scope, $params4) => $await_content__message($scope, $params4[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button><!> <!></button>", " D%c%", $await_content__setup);
const $catch_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $catch_content__setup = $await_content;
const $catch_content__err_message = ($scope, err_message) => $catch_content__await_promise($scope, resolveAfter(err_message, 2));
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<!><!><!>", "b%", $catch_content__setup, $catch_content__$params);
const $await_content2 = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content2__$params);
const $try_content__setup = ($scope) => {
	$await_content2($scope);
	$try_content__await_promise($scope, $scope._["#LoopKey"] === 54 ? rejectAfter(new Error("ERROR!"), 1) : resolveAfter($scope._["#LoopKey"], 1));
};
const $for_content__try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup, 0, $catch_content);
const $for_content__setup = ($scope) => $for_content__try($scope);
const $for = /*@__PURE__*/ _for_until_unkeyed("#text/0", "<!><!><!>", "b%", $for_content__setup);
function $setup($scope) {
	$for($scope, [
		55,
		0,
		1
	]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
