// template.marko
const $template = "<button id=swap>swap</button><button id=bump>bump</button><!><!>";
const $walks = " b b%c";
const $tag_content__n = /*@__PURE__*/ _closure_get("n", ($scope) => _text($scope, "#text/0", $scope._.n));
const $tag_content__setup = $tag_content__n;
const $tag_content = _content_resume("__tests__/template.marko_1*content", "<option value=a>A<!></option>", "Db%", $tag_content__setup);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/2", $tag_content);
const $tag = /*@__PURE__*/ _let("tag/6", ($scope) => $dynamicTag($scope, $scope.tag, () => ({ value: "b" })));
const $input_tag = $tag;
const $n__closure = /*@__PURE__*/ _closure($tag_content__n);
const $n = /*@__PURE__*/ _let("n/7", $n__closure);
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/0"], "click", function() {
		$tag($scope, $scope.tag === "div" ? "select" : "div");
	});
	_on($scope["#button/1"], "click", function() {
		$n($scope, +$scope.n + 1);
	});
});
function $setup($scope) {
	$n($scope, 0);
	$setup__script($scope);
}
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
