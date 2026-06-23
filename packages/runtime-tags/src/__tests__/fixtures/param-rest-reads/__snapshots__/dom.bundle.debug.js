// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = () => {};
const $dynamicTag = /* @__PURE__ */ _dynamic_tag("#text/0", 0, 0, 1);
const $input_content = ($scope, input_content) => $dynamicTag($scope, input_content, () => [
	1,
	2,
	3
]);
const $input = ($scope, input) => $input_content($scope, input.content);
var child_default = /* @__PURE__ */ _template("__tests__/tags/child.marko", $template$1, "b%c", $setup$1, $input);

// template.marko
const $template = /* @__PURE__ */ ((_w0) => `<!><!>${_w0}<!>`)($template$1);
const $walks = /* @__PURE__ */ ((_w0) => `b%b/${_w0}&b`)("b%c");
const $child_content__first = ($scope, first) => _text($scope["#text/0"], first);
const $child_content__$params3_ = ($scope, $params3_1) => _text($scope["#text/1"], $params3_1);
const $child_content__$params3_2 = ($scope, $params3_2) => _text($scope["#text/2"], $params3_2);
const $child_content__others_length = ($scope, others_length) => _text($scope["#text/3"], others_length);
const $child_content__$params = ($scope, $params3) => {
	(([, ...others]) => $child_content__others($scope, others))($params3);
	$child_content__first($scope, $params3[0]);
	$child_content__$params3_($scope, $params3[1]);
	$child_content__$params3_2($scope, $params3[2]);
};
const $child_content__others = ($scope, others) => $child_content__others_length($scope, others.length);
const $child_content = /* @__PURE__ */ _content("__tests__/template.marko_2_content", "<div><!>|<!>|<!>|<!></div>", "D%c%c%c%l", 0, $child_content__$params);
const $for_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $for_content__setup = ($scope) => _text($scope["#text/1"], $scope["#LoopKey"]);
const $for_content__meta_length = ($scope, meta_length) => _text($scope["#text/2"], meta_length);
const $for_content__$params = ($scope, $params2) => {
	(([, ...meta]) => $for_content__meta($scope, meta))($params2);
	$for_content__item($scope, $params2[0]);
};
const $for_content__meta = ($scope, meta) => $for_content__meta_length($scope, meta.length);
const $for = /* @__PURE__ */ _for_of("#text/0", "<div><!>:<!>:<!></div>", "D%c%c%l", $for_content__setup, $for_content__$params);
const $list = /* @__PURE__ */ _let("list/2", ($scope) => $for($scope, [$scope.list]));
function $setup($scope) {
	/* @__PURE__ */ $setup$1($scope["#childScope/1"]);
	$input_content($scope["#childScope/1"], $child_content($scope));
	$list($scope, ["a", "b"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
