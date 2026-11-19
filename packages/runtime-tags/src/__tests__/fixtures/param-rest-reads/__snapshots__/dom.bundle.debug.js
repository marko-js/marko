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
const $template = /*@__PURE__*/ ((_w0, _w1) => `<!>${_w0}${_w1}<!>`)($template$1, $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `b/${_w0}&/${_w1}&b`)("b%c", "b%c");
const $child_content2__$params = ($scope, $params3) => {
	_text($scope["#text/0"], $params3[0]);
	_text($scope["#text/1"], $params3[1]);
	_text($scope["#text/2"], $params3[2]);
};
const $child_content2 = /*@__PURE__*/ _content("__tests__/template.marko_2*content", "<div><!>-<!>-<!></div>", "D%c%c%", 0, $child_content2__$params);
const $child_content__$params = ($scope, $params2) => {
	$child_content__others($scope, (([, ...others]) => others)($params2));
	_text($scope["#text/0"], $params2[0]);
	_text($scope["#text/1"], $params2[1]);
	_text($scope["#text/2"], $params2[2]);
};
const $child_content__others = ($scope, others) => _text($scope["#text/3"], others.length);
const $child_content = /*@__PURE__*/ _content("__tests__/template.marko_1*content", "<div><!>|<!>|<!>|<!></div>", "D%c%c%c%", 0, $child_content__$params);
function $setup($scope) {
	$input_content($scope["#childScope/0"], $child_content($scope));
	$input_content($scope["#childScope/1"], $child_content2($scope));
}
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup);
