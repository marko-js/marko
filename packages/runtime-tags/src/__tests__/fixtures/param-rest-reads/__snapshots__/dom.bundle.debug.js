// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content, () => [
	1,
	2,
	3
]);
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /*@__PURE__*/ _template("__tests__/tags/child.marko", $template$1, "b%c", 0, $input);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!><!><!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b%b%b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $child_content2__x = ($scope, x) => _text($scope["#text/0"], x);
const $child_content2__y = ($scope, y) => _text($scope["#text/1"], y);
const $child_content2__z = ($scope, z) => _text($scope["#text/2"], z);
const $child_content2__$params = ($scope, $params5) => {
	$child_content2__x($scope, $params5[0]);
	$child_content2__y($scope, $params5[1]);
	$child_content2__z($scope, $params5[2]);
};
const $child_content2 = /*@__PURE__*/ _content("__tests__/template.marko_4*content", "<div><!>-<!>-<!></div>", "D%c%c%", 0, $child_content2__$params);
const $child_content__first = ($scope, first) => _text($scope["#text/0"], first);
const $child_content__$params4_ = ($scope, $params4_1) => _text($scope["#text/1"], $params4_1);
const $child_content__$params4_2 = ($scope, $params4_2) => _text($scope["#text/2"], $params4_2);
const $child_content__others_length = ($scope, others_length) => _text($scope["#text/3"], others_length);
const $child_content__$params = ($scope, $params4) => {
	(([, ...others]) => $child_content__others($scope, others))($params4);
	$child_content__first($scope, $params4[0]);
	$child_content__$params4_($scope, $params4[1]);
	$child_content__$params4_2($scope, $params4[2]);
};
const $child_content__others = ($scope, others) => $child_content__others_length($scope, others.length);
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_3*content", "<div><!>|<!>|<!>|<!></div>", "D%c%c%c%", 0, $child_content__$params);
const $for_content2__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content2__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content2__$params = ($scope, $params3) => $for_content2__item($scope, $params3[0]);
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content__meta_length = ($scope, meta_length) => _text($scope["#text/2"], meta_length);
const $for_content__$params = ($scope, $params2) => {
	(([, ...meta]) => $for_content__meta($scope, meta))($params2);
	$for_content__item($scope, $params2[0]);
};
const $for_content__meta = ($scope, meta) => $for_content__meta_length($scope, meta.length);
const $for = /*@__PURE__*/ _for_of("#text/0", "<div><!>:<!>:<!></div>", "D%c%c%", $for_content__setup, $for_content__$params);
const $for2 = /*@__PURE__*/ _for_of("#text/1", "<div><!>@<!></div>", "D%c%", $for_content2__setup, $for_content2__$params);
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
