// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = ($_) => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content, ($_) => [
	1,
	2,
	3
]);
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $child_content2__$params = ($scope, $params5) => {
	_text($scope["#text/0"], $params5[0]);
	_text($scope["#text/1"], $params5[1]);
	_text($scope["#text/2"], $params5[2]);
};
const $child_content2 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<div><!>-<!>-<!></div>", "D%c%c%", 0, $child_content2__$params);
const $child_content__$params = ($scope, $params4) => {
	$child_content__others($scope, (([, ...others]) => others)($params4));
	_text($scope["#text/0"], $params4[0]);
	_text($scope["#text/1"], $params4[1]);
	_text($scope["#text/2"], $params4[2]);
};
const $child_content__others = ($scope, others) => _text($scope["#text/3"], others.length);
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<div><!>|<!>|<!>|<!></div>", "D%c%c%c%", 0, $child_content__$params);
const $for_content2__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content2__$params = ($scope, $params3) => _text($scope["#text/0"], $params3[0]);
const $for_content__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content__$params = ($scope, $params2) => {
	$for_content__meta($scope, (([, ...meta]) => meta)($params2));
	_text($scope["#text/0"], $params2[0]);
};
const $for_content__meta = ($scope, meta) => _text($scope["#text/2"], meta.length);
const $for = /*@__PURE__*/ _for_of_unkeyed("#text/0", "<div><!>:<!>:<!></div>", "D%c%c%", $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of_unkeyed("#text/1", "<div><!>@<!></div>", "D%c%", $for_content2__setup, $for_content2__$params);
const $list = /*@__PURE__*/ _let("list/4", ($scope) => {
	$for($scope, [$scope.list]);
	$for2($scope, [$scope.list]);
});
function $setup($scope) {
	$input_content($scope["#childScope/2"], $child_content($scope));
	$input_content($scope["#childScope/3"], $child_content2($scope));
	$list($scope, ["a", "b"]);
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
