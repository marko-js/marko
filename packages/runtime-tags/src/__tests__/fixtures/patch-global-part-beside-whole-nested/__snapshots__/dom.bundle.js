// template.marko
const $if_content__$global_meta_title__OR__$global_meta_flag = /*@__PURE__*/ _or(1, ($scope) => _text($scope.a, $scope.$.meta.title + ":" + $scope.$.meta.flag));
const $if_content__$global_meta_title = /*@__PURE__*/ _if_closure_patch("a4", 1, 0, $if_content__$global_meta_title__OR__$global_meta_flag);
const $if_content__setup = ($scope) => {
	$if_content__$global_meta_title._($scope);
	$if_content__$global_meta_flag._($scope);
};
const $if_content__$global_meta_flag = /*@__PURE__*/ _if_closure_patch("a5", 1, 0, $if_content__$global_meta_title__OR__$global_meta_flag);
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $show = _let(2, ($scope) => $if($scope, $scope.c ? 0 : 1));
const $global_meta_title = _fill_global_path("a0", $if_content__$global_meta_title, "meta", "title");
const $global_meta_flag = _fill_global_path("a1", $if_content__$global_meta_flag, "meta", "flag");
const $setup__script = _script("a2", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.c);
}));
