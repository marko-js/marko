// template.marko
const $template = "";
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&`)("");
function $setup($scope) {
	$k($scope["#childScope/0"], 1);
}
const $input_title = ($scope, input_title) => $rest($scope["#childScope/0"], {
	title: input_title,
	item: { label: input_title }
});
const $input = ($scope, input) => $input_title($scope, input.title);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, $walks, $setup, $input);

// tags/label.marko
const $template = "";
const $walks = "";
const $setup = ($_) => {};
const $input_k__OR__rest__script = _script("__tests__/tags/label.marko_0_k#2_rest#3", ($scope) => console.log("run", $scope.k, JSON.stringify($scope.rest)));
const $input_k__OR__rest = /*@__PURE__*/ _or_patch("__tests__/tags/label.marko_0_k#2_rest#3/setup", 4, $input_k__OR__rest__script);
const $k = /*@__PURE__*/ _const("k", $input_k__OR__rest);
const $rest = /*@__PURE__*/ _const("rest", $input_k__OR__rest);
const $input = ($scope, input) => {
	$rest($scope, (({ k, ...rest }) => rest)(input));
	$k($scope, input.k);
};
var label_default = /*@__PURE__*/ _template("__tests__/tags/label.marko", "", "", 0, $input);
