// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__rest__script = _script("a2", ($scope) => _attrs_script($scope, "a"));
const $if_content2__rest = /*@__PURE__*/ _fill_join("a4", 4, /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs($scope, "a", $scope._.e);
	$if_content2__rest__script($scope);
	_text($scope.b, Object.keys($scope._.e).join());
}));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", " D ", $if_content2__rest);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_$rest = /*@__PURE__*/ _fill_const("a4", 4, $if_content2__rest);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__tag_input_$rest($scope, (({ isOpen, ...rest }) => rest)($temp));
	$Panel_content__isOpen($scope, $temp.isOpen);
};
const $Panel_content = _content$1("a3", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a8", 12, /*@__PURE__*/ _fill_join("a7", 8, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	title: $scope.i + "!"
})), 2)));
const $open = /*@__PURE__*/ _fill_let("a9", 9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a5", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
