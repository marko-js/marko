// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $if_content2__setup = $if_content2__label;
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen__OR__label__script = _script("a3", ($scope) => console.log("effect", $scope.e, $scope.d));
const $Panel_content__isOpen__OR__label = /*@__PURE__*/ _or(5, $Panel_content__isOpen__OR__label__script);
const $Panel_content__isOpen = /*@__PURE__*/ _const(3, ($scope) => {
	$Panel_content__if($scope, $scope.d ? 0 : 1);
	$Panel_content__isOpen__OR__label($scope);
});
const $Panel_content__label = /*@__PURE__*/ _const(4, ($scope) => {
	_return($scope, $scope.e + "!");
	$Panel_content__isOpen__OR__label($scope);
	$if_content2__label($scope);
});
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__label($scope, $temp.label);
	$Panel_content__isOpen($scope, $temp.isOpen);
};
const $Panel_content = _content$1("a2", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a6", 11, /*@__PURE__*/ _fill_join("a5", 7, /*@__PURE__*/ _or(12, ($scope) => $dynamicTag($scope, $scope.l, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.h
})), 2)));
const $open = /*@__PURE__*/ _let(8, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a4", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.i);
}));
