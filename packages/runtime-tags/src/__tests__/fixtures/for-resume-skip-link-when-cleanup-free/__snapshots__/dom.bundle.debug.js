// tags/list.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $for_content__setup = ($scope) => _text($scope["#text/0"], $scope["#LoopKey"]);
const $for = /* @__PURE__ */ _for_to("#text/0", "<li>item <!></li>", "Db%l", $for_content__setup);
const $count$1 = ($scope, count) => $for($scope, [
	count,
	0,
	1
]);
const $input = ($scope, input) => $count$1($scope, input.count);
var list_default = /* @__PURE__ */ _template("__tests__/tags/list.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<button id=o>O</button><button id=c>C</button><!><!>";
const $walks = " b b%c";
const $if_content__count = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => $count$1($scope["#childScope/0"], $scope._.count));
const $if_content__setup = ($scope) => {
	$if_content__count._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#text/2", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer__script = _script("__tests__/template.marko_0_outer", ($scope) => _on($scope["#button/0"], "click", function() {
	$outer($scope, !$scope.outer);
}));
const $outer = /* @__PURE__ */ _let("outer/3", ($scope) => {
	$if($scope, $scope.outer ? 0 : 1);
	$outer__script($scope);
});
const $count__script = _script("__tests__/template.marko_0_count", ($scope) => _on($scope["#button/1"], "click", function() {
	$count($scope, $scope.count + 1);
}));
const $count = /* @__PURE__ */ _let("count/4", ($scope) => {
	$if_content__count($scope);
	$count__script($scope);
});
function $setup($scope) {
	$outer($scope, true);
	$count($scope, 2);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
