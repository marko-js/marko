// tags/logger.marko
const $template = "<div></div>";
const $global_brand__script = _global_script("b0", ($scope) => document.querySelector("div").dataset.log = "ran:" + $scope.$.brand, /* @__PURE__ */ _global_closure(/* @__PURE__ */ _global_key("brand")));
const $setup = $global_brand__script;

// template.marko
const $if_content__setup = ($scope) => $setup($scope.a);
const $if = /*@__PURE__*/ _if(1, $template, /*@__PURE__*/ ((_w0) => `/${_w0}&`)("b"), $if_content__setup);
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
