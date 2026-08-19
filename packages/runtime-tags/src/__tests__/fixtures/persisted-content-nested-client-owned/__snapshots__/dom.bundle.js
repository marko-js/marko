// tags/grand/index.marko
const $template$1 = "<div><!></div>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_content$1 = $dynamicTag;

// tags/child/index.marko
const $template = /*@__PURE__*/ ((_w0) => `<section><h2> </h2>${_w0}</section>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `E l/${_w0}&l`)("D%l");
const $input_title = ($scope, input_title) => _text($scope.a, input_title);
const $input_content = ($scope, input_content) => $input_content$1($scope.b, input_content);

// template.marko
const $child_content__input_note = /*@__PURE__*/ _fill_join_closure("a1", 5, /*@__PURE__*/ _closure_get(8, ($scope) => _text($scope.a, $scope._._.f), ($scope) => $scope._._), 0);
const $child_content = /*@__PURE__*/ _content$1("a0", "<em> </em>", "D ", $child_content__input_note);
const $if_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => $input_title($scope.a, $scope._.e)));
const $if_content__setup = ($scope) => {
	$if_content__input_title._($scope);
	$input_content($scope.a, $child_content($scope));
};
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks), $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.g);
}));
