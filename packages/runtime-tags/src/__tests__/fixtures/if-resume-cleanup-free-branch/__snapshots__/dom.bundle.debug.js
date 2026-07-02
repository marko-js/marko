// tags/leaf.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $if_content__input_n = /* @__PURE__ */ _if_closure("#text/0", 0, ($scope) => _text($scope["#text/0"], $scope._.n));
const $if_content__setup$1 = $if_content__input_n;
const $if$1 = /* @__PURE__ */ _if("#text/0", "<div>n is <!></div>", "Db%l", $if_content__setup$1);
const $n$1 = /* @__PURE__ */ _const("n", ($scope) => {
	$if$1($scope, $scope.n ? 0 : 1);
	$if_content__input_n($scope);
});
const $input = ($scope, input) => $n$1($scope, input.n);
var leaf_default = /* @__PURE__ */ _template("__tests__/tags/leaf.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<button id=o>O</button><button id=n>N</button><!><!>";
const $walks = " b b%c";
const $if_content__n = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => $n$1($scope["#childScope/0"], $scope._.n));
const $if_content__setup = ($scope) => {
	$if_content__n._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#text/2", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer = /* @__PURE__ */ _let("outer/3", ($scope) => $if($scope, $scope.outer ? 0 : 1));
const $n = /* @__PURE__ */ _let("n/4", $if_content__n);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$outer($scope, !$scope.outer);
	});
	_on($scope["#button/1"], "click", function() {
		$n($scope, $scope.n + 1);
	});
});
function $setup($scope) {
	$outer($scope, true);
	$n($scope, 0);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
