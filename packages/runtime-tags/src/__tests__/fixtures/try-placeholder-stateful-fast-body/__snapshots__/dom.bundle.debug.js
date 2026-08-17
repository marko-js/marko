// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__clicks = /*@__PURE__*/ _closure_get("clicks", ($scope) => _text($scope["#text/1"], $scope._._.clicks), ($scope) => $scope._._, "__tests__/template.marko_3_clicks#1/pending");
const $await_content__setup__script = _script("__tests__/template.marko_3", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope._._, +$scope._._.clicks + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__clicks($scope);
	$await_content__setup__script($scope);
};
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button>loaded <!></button>", " Db%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0");
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 1));
};
const $placeholder_content__clicks = /*@__PURE__*/ _closure_get("clicks", ($scope) => _text($scope["#text/1"], $scope._.clicks));
const $placeholder_content__setup__script = _script("__tests__/template.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$clicks($scope._, +$scope._.clicks + 1);
}));
const $placeholder_content__setup = ($scope) => {
	$placeholder_content__clicks($scope);
	$placeholder_content__setup__script($scope);
};
const $placeholder_content = _content_resume("__tests__/template.marko_1*content", "<button>loading <!></button>", " Db%", $placeholder_content__setup);
const $clicks__closure = /*@__PURE__*/ _closure($placeholder_content__clicks, $await_content__clicks);
const $clicks = /*@__PURE__*/ _let("clicks/1", $clicks__closure);
const $try = /*@__PURE__*/ _try("#text/0", "<!><!><!>", "b%", $try_content__setup);
function $setup($scope) {
	$clicks($scope, 0);
	$try($scope, { placeholder: attrTag({ content: $placeholder_content($scope) }) });
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup);
