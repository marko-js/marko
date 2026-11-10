// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
const $setup = ($_) => {};
const $input_title = ($scope, input_title) => $input_item($scope["#childScope/0"], {
	label: input_title,
	k: 1
});
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, 0, $input);

// tags/label.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $pattern2 = ($scope, $pattern) => {
	$rest($scope, (({ k, ...rest }) => rest)($pattern));
	$k($scope, $pattern.k);
};
const $rest = /*@__PURE__*/ _const("rest");
const $k = /*@__PURE__*/ _const("k");
const $k__OR__rest__script = _script("__tests__/tags/label.marko_0_k#4_rest#5", ($scope) => console.log("run", $scope.k, JSON.stringify($scope.rest)));
const $k__OR__rest = $k__OR__rest__script;
const $input_item = /*@__PURE__*/ _const("input_item", ($scope) => {
	$pattern2($scope, $scope.input_item);
	$k__OR__rest($scope);
});
const $input = ($scope, input) => $input_item($scope, input.item);
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input);
