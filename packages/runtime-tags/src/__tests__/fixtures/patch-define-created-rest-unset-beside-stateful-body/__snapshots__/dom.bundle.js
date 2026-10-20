// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__rest__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
const $if_content2__rest = /*@__PURE__*/ _fill_join("a4", 6, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs($scope, "a", $scope._.g);
	$if_content2__rest__script($scope);
	_text($scope.b, Object.keys($scope._.g).join());
}));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", " D ", $if_content2__rest);
const $Panel_content__isOpen__OR__hidden = /*@__PURE__*/ _or(5, ($scope) => $Panel_content__if($scope, $scope.d && !$scope.e ? 0 : 1));
const $Panel_content__isOpen = /*@__PURE__*/ _const(3, $Panel_content__isOpen__OR__hidden);
const $Panel_content__hidden = /*@__PURE__*/ _const(4, $Panel_content__isOpen__OR__hidden);
const $Panel_content__tag_input_$rest = /*@__PURE__*/ _fill_const("a4", 6, $if_content2__rest);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__tag_input_$rest($scope, (({ hidden, isOpen, ...rest }) => rest)($temp));
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__hidden($scope, $temp.hidden);
};
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a9", 12, /*@__PURE__*/ _fill_join("a8", 7, /*@__PURE__*/ _fill_join("a7", 7, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	title: $scope.h + "!"
})), 2))));
const $open = /*@__PURE__*/ _fill_let("a10", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
