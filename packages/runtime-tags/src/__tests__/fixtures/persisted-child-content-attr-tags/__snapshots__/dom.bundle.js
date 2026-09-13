// tags/panel/index.marko
const $template = "<div class=panel><!></div>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_header = $dynamicTag;

// template.marko
const $header_content__input_title = /*@__PURE__*/ _fill_join_closure("a0", 4, /*@__PURE__*/ _closure_get(6, ($scope) => _text($scope.a, $scope._._.e), ($scope) => $scope._._), 0);
const $header_content = /*@__PURE__*/ _content$1("a0", "<h1>hi <!></h1>", "Db%", $header_content__input_title);
const $if_content__setup = ($scope) => $input_header($scope.a, attrTag({ content: $header_content($scope) }));
const $if = /*@__PURE__*/ _if(0, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a1", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));
