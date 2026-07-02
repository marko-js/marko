// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $showdivnull_content__setup__script = _script("__tests__/tags/child.marko_1", ($scope) => _lifecycle($scope, { onDestroy: function() {
	document.getElementById("ref").textContent = "dyn destroyed";
} }));
const $showdivnull_content__setup = $showdivnull_content__setup__script;
const $showdivnull_content = _content_resume("__tests__/tags/child.marko_1_content", 0, 0, $showdivnull_content__setup);
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", $showdivnull_content);
const $show$1 = ($scope, show) => $dynamicTag($scope, show ? "div" : null);
const $input = ($scope, input) => $show$1($scope, input.show);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = "<div id=ref>init</div><button id=o>O</button><button id=s>S</button><!><!>";
const $walks = "b b b%c";
const $if_content__show = /* @__PURE__ */ _if_closure("#text/2", 0, ($scope) => $show$1($scope["#childScope/0"], $scope._.show));
const $if_content__setup = ($scope) => {
	$if_content__show._($scope);
	/* @__PURE__ */ $setup$1($scope["#childScope/0"]);
};
const $if = /* @__PURE__ */ _if("#text/2", /* @__PURE__ */ ((_w0) => `<!>${_w0}<!>`)($template$1), /* @__PURE__ */ ((_w0) => `b/${_w0}&b`)("b%c"), $if_content__setup);
const $outer = /* @__PURE__ */ _let("outer/3", ($scope) => $if($scope, $scope.outer ? 0 : 1));
const $show = /* @__PURE__ */ _let("show/4", $if_content__show);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$outer($scope, !$scope.outer);
	});
	_on($scope["#button/1"], "click", function() {
		$show($scope, !$scope.show);
	});
});
function $setup($scope) {
	$outer($scope, true);
	$show($scope, false);
	$setup__script($scope);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
