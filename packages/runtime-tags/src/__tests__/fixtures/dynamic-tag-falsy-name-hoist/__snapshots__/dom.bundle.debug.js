// template.marko
const $template = "<!><!><button class=check></button><button class=toggle></button><output> </output>";
const $walks = "b%b b bD l";
const $el_getter = _hoist_resume("__tests__/template.marko_0_#input#0/hoist", "#input/0", "ClosureScopes:1");
const $tag_content = _content("__tests__/template.marko_1*content", "<input>", " ", 0, 0, "ClosureScopes:1");
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", $tag_content);
const $tag = /*@__PURE__*/ _let("tag/7", ($scope) => $dynamicTag($scope, $scope.tag));
const $input_tag = $tag;
const $result = /*@__PURE__*/ _let("result/8", ($scope) => _text($scope["#text/3"], $scope.result));
const $setup__script = _script("__tests__/template.marko_0", ($scope) => {
	_on($scope["#button/1"], "click", function() {
		$result($scope, `${$el_getter($scope)() === document.querySelector("input")}/${[...$el_getter($scope)].length}`);
	});
	_on($scope["#button/2"], "click", function() {
		$tag($scope, $scope.tag ? null : "div");
	});
});
function $setup($scope) {
	$result($scope, "");
	$setup__script($scope);
}
const $input = ($scope, input) => $input_tag($scope, input.tag);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);
