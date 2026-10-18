// template.marko
const $Panel_content__walks = "b%c";
const $Panel_content__template = "<!><!><!>";
const $if_content2__label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => _text($scope.a, $scope._.e));
const $Panel_content__if = /*@__PURE__*/ _if(0, "<em> </em>", "D ", $if_content2__label);
const $Panel_content__isOpen = ($scope, isOpen) => $Panel_content__if($scope, isOpen ? 0 : 1);
const $Panel_content__tag_input_label = /*@__PURE__*/ _const(4, $if_content2__label);
const $Panel_content__$params = ($scope, $params2) => $Panel_content__$temp($scope, $params2[0]);
const $Panel_content__$temp = ($scope, $temp) => {
	$Panel_content__isOpen($scope, $temp.isOpen);
	$Panel_content__tag_input_label($scope, $temp.label);
};
const $Panel_content = _content("a0", $Panel_content__template, $Panel_content__walks, 0, $Panel_content__$params);
const $if_content__input_label = /*@__PURE__*/ _if_closure(0, 0, ($scope) => $Panel_content__tag_input_label($scope.a, $scope._.g));
const $if_content__setup = ($scope) => {
	$if_content__input_label._($scope);
	$Panel_content__isOpen($scope.a, true);
};
const $dynamicTag = /*@__PURE__*/ _dynamic_tag(1);
const $input_label__OR__open__OR__Tag = /*@__PURE__*/ _fill_join("a3", 12, /*@__PURE__*/ _or(13, ($scope) => $dynamicTag($scope, $scope.m, ($_) => ({
	isOpen: !$scope.i,
	label: $scope.g + "!"
})), 2));
const $open = /*@__PURE__*/ _fill_let("a4", 8, $input_label__OR__open__OR__Tag);
const $if = /*@__PURE__*/ _if(0, /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($Panel_content__template), /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)($Panel_content__walks), $if_content__setup);
const $shown = /*@__PURE__*/ _fill_let("a5", 9, ($scope) => $if($scope, $scope.j ? 0 : 1));
const $setup__script = _script("a1", ($scope) => {
	_on($scope.c, "click", function() {
		$open($scope, !$scope.i);
	});
	_on($scope.d, "click", function() {
		$shown($scope, !$scope.j);
	});
});
const $input_label = fill("a2", /*@__PURE__*/ _const(6, ($scope) => {
	$input_label__OR__open__OR__Tag($scope);
	$if_content__input_label($scope);
}));
