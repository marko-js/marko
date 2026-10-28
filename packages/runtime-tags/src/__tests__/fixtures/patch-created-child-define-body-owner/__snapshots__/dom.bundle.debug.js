// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = ($_) => {};
const $if_content__setup = ($scope) => $setup$1($scope["#childScope/0"]);
const $if = /*@__PURE__*/ _if("#text/0", /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1), /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1), $if_content__setup);
const $input_show = ($scope, input_show) => $if($scope, input_show ? 0 : 1);
const $input = ($scope, input) => $input_show($scope, input.show);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", 0, $input);

// tags/child.marko
const $Count_content__walks = "D l";
const $Count_content__template = "<p> </p>";
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Count_content__template);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Count_content__walks);
const $Count_content__n = /*@__PURE__*/ _init_resume("__tests__/tags/child.marko_1_n#0:2/init", /*@__PURE__*/ _closure_get("n/3", ($scope) => _text($scope["#text/0"], $scope._.n), 0, "__tests__/tags/child.marko_1_n#0:2/subscribe"));
const $Count_content__setup = $Count_content__n;
const $n__closure = /*@__PURE__*/ _closure($Count_content__n);
const $n = /*@__PURE__*/ _fill_let("__tests__/tags/child.marko_fill0", "n/2", $n__closure);
const $setup__script = _script("__tests__/tags/child.marko_0", ($scope) => _on($scope["#button/1"], "click", function() {
	$n($scope, +$scope.n + 1);
}));
function $setup($scope) {
	$scope["#childScope/0"]._ = $scope;
	$Count_content__setup($scope["#childScope/0"]);
	$n($scope, 0);
	$setup__script($scope);
}
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template, $walks, $setup);
