// tags/child.marko
const $template$1 = "<!><!><p> </p>";
const $walks$1 = "b%bD l";
const $setup$1 = () => {};
const $for_content__dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0");
const $for_content__it_content = $for_content__dynamicTag;
const $for_content__$params = ($scope, $params2) => $for_content__it_content($scope, $params2[0]?.content);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<!><!><!>", "b%", 0, $for_content__$params);
const $item = ($scope, item) => $for($scope, [item]);
const $rest = ($scope, rest) => _text($scope["#text/1"], Object.keys(rest).join());
const $input = ($scope, input) => {
	(({ item, ...rest }) => $rest($scope, rest))(input);
	$item($scope, input.item);
};
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, $walks$1, 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<button id=toggle>toggle</button>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => ` b/${_w0}&`)($walks$1);
const $item_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "A");
const $mode = /*@__PURE__*/ _let("mode/2", ($scope) => {
	let $item$1, $other;
	if ($scope.mode === 0) {
		$item$1 = attrTag({ content: $item_content($scope) });
	} else {
		$other = attrTag({ x: 1 });
	}
	$item($scope["#childScope/1"], $item$1);
	$rest($scope["#childScope/1"], { other: $other });
});
const $setup__script = _script("__tests__/template.marko_0", ($scope) => _on($scope["#button/0"], "click", function() {
	$mode($scope, 1 - $scope.mode);
}));
function $setup($scope) {
	$mode($scope, 0);
	$setup__script($scope);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
