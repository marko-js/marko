// tags/banner/index.marko
const $template$1 = "<b>banner</b>";
const $walks = "b";
var banner_default = /*@__PURE__*/ _template("b", $template$1, "b");

// tags/widget/index.marko
const $template = "<section><!></section>";
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $input_renderer = $dynamicTag;

// template.marko
const $if_content__input_kind = /*@__PURE__*/ _fill_join("a0", 5, /*@__PURE__*/ _if_closure(1, 0, ($scope) => $input_renderer($scope.a, $scope._.f === "banner" ? banner_default : $scope._.f)));
const $if_content__setup = $if_content__input_kind;
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $if_content__setup);
const $open = /*@__PURE__*/ _let(6, ($scope) => $if($scope, $scope.g ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.g);
}));
