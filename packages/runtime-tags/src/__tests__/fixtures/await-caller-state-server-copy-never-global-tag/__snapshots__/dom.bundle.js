// tags/brand.marko
const $template = "<span> </span>";
const $walks = "D l";
const $input_label = ($scope, input_label) => _text($scope.a, input_label);
const $input = ($scope, input) => $input_label($scope, input.label);
var brand_default = /*@__PURE__*/ _template("b", $template, "D l", 0, $input);

// tags/show-await.marko
const tags = [brand_default];
const $await_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $await_content__x = ($scope, x) => $await_content__dynamicTag($scope, x && $scope.$.flag ? tags[0] : null, ($_) => ({ label: x }));
const $await_content__$params = ($scope, $params2) => $await_content__x($scope, $params2[0]);
const $await_promise = /*@__PURE__*/ _await_promise(0, $await_content__$params);
const $input_promise = $await_promise;

// template.marko
const $if_content__p = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_promise($scope.a, $scope._.g));
const $p = /*@__PURE__*/ _let(6, $if_content__p);
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$p($scope, Promise.resolve("swapped"));
}));
