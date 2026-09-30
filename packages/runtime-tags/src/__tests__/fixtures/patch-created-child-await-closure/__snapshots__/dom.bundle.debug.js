// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = () => {};
const $if_content__input_promise = /*@__PURE__*/ _if_closure("#text/0", 0, ($scope) => $input_promise$1($scope["#childScope/0"], $scope._.input_promise));
const $if_content__setup = ($scope) => {
	$if_content__input_promise._($scope);
	$setup$1($scope["#childScope/0"]);
};
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => {
	$input_promise($scope, input.promise);
	$input_show($scope, input.show);
};
const $input_promise = /*@__PURE__*/ _const("input_promise", $if_content__input_promise);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/page.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $await_content__likes = _init_closure_get("__tests__/tags/page.marko_1_likes#0:4/init", "likes/5", ($scope) => _text($scope["#text/2"], $scope._.likes), 0, "__tests__/tags/page.marko_1_likes#0:4/subscribe");
const $await_content__open = /*@__PURE__*/ _fill_let("__tests__/tags/page.marko_fill1", "open/6", ($scope) => _text($scope["#text/3"], $scope.open ? "open" : "closed"));
const $await_content__setup__script = _script("__tests__/tags/page.marko_1", ($scope) => _on($scope["#button/0"], "click", function() {
	$await_content__open($scope, !$scope.open);
	$likes($scope._, +$scope._.likes + 1);
}));
const $await_content__setup = ($scope) => {
	$await_content__likes($scope);
	$await_content__setup__script($scope);
	$await_content__open($scope, false);
};
const $await_content__v = ($scope, v) => _text($scope["#text/1"], v);
const $await_content__$params = ($scope, $params2) => $await_content__v($scope, $params2[0]);
const $likes__closure = /*@__PURE__*/ _closure($await_content__likes);
const $likes = /*@__PURE__*/ _fill_let("__tests__/tags/page.marko_fill0", "likes/4", $likes__closure);
function $setup($scope) {
	$await_content($scope);
	$likes($scope, 3);
}
const $await_content = /*@__PURE__*/ _await_content("#text/0", "<button><!> <!> <!></button>", " D%c%c%", $await_content__setup);
const $await_promise = /*@__PURE__*/ _await_promise("#text/0", $await_content__$params);
const $input_promise = $await_promise;
const $input = ($scope, input) => $input_promise($scope, input.promise);
var page_default = /*@__PURE__*/ _template("__tests__/tags/page.marko", $template, "b%c", $setup, $input);
