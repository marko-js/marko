// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__fmt__OR__label = /*@__PURE__*/ _fill_if("a6", 5, /*@__PURE__*/ _fill_if("a5", 4, /*@__PURE__*/ _or_resume("a1", 1, ($scope) => _text($scope.a, $scope._.e($scope._.f))), 0, 0), 0, 0);
const $if_content2__fmt = /*@__PURE__*/ _if_closure(0, 0, $if_content2__fmt__OR__label);
const $if_content2__setup = ($scope) => {
	$if_content2__fmt._($scope);
	$if_content2__label._($scope);
};
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, $if_content2__fmt__OR__label);
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__setup);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_fmt = /*@__PURE__*/ _const(4, $if_content2__fmt);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(5, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_fmt($scope, $temp.fmt);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content$1("a4", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill("a13", 12, /*@__PURE__*/ _fill("a11 a12", 7, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.j,
	fmt: $fmt,
	label: $scope.h
})), 2)));
const $open = _let(9, $input_label__OR__open__OR__Tag);
const $setup__script = _script("a9", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.j);
}));
function $fmt(s) {
	return s + "!";
}
_resumed.a0 = $fmt;
