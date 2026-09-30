// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__v = ($scope, v) => _text($scope["#text/0"], v);
const $await_content__$params = ($scope, $params4) => $await_content__v($scope, $params4[0]);
const $catch_content__clicks = /*@__PURE__*/ _let("clicks/6", ($scope) => _text($scope["#text/2"], $scope.clicks));
const $catch_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$catch_content__clicks($scope, +$scope.clicks + 1);
}));
const $catch_content__setup = ($scope) => {
	$catch_content__clicks($scope, 0);
	$catch_content__setup__script($scope);
};
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/1"], err_message);
const $catch_content__$params = ($scope, $params3) => $catch_content__err_message($scope, $params3[0]?.message);
const $catch_content = _content("__tests__/template.marko_3*content", "<button><!> <!></button>", " D%c%", $catch_content__setup, $catch_content__$params);
const $await_content = /*@__PURE__*/ _await_content("#text/0", " ", " ");
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
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
