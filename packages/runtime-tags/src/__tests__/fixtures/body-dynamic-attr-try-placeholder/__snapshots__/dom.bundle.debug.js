// template.marko
const $template = "<html lang=en><head><title>x</title></head><body><!></body></html>";
const $walks = "Db D%m";
const $placeholder_content = _content_resume("__tests__/template.marko_3*content", "loading");
const $await_content__dark = /*@__PURE__*/ _closure_get("dark/3", ($scope) => _text($scope["#text/2"], $scope._._.dark), ($scope) => $scope._._, "__tests__/template.marko_2_dark#0:2/subscribe");
const $await_content__setup__script = _script("__tests__/template.marko_2", ($scope) => _on($scope["#button/0"], "click", function() {
	$dark($scope._._, !$scope._._.dark);
}));
const $await_content__setup = ($scope) => {
	$await_content__dark($scope);
	$await_content__setup__script($scope);
};
const $await_content__$params = ($scope, $params2) => _text($scope["#text/1"], $params2[0]);
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button><!> <!></button>", " D%c%", $await_content__setup);
const $try_content__await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $try_content__setup = ($scope) => {
	$await_content($scope);
	$try_content__await_promise($scope, resolveAfter("done", 1));
};
const $dark__closure = /*@__PURE__*/ _closure($await_content__dark);
const $dark = /*@__PURE__*/ _let("dark/2", ($scope) => {
	_attr_class_item($scope["#body/0"], "dark", $scope.dark);
	$dark__closure($scope);
});
const $try = /*@__PURE__*/ _try("#text/1", "<!><!><!>", "b%", $try_content__setup, $placeholder_content);
function $setup($scope) {
	$dark($scope, false);
	$try($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
