// template.marko
const $Item_content__walks = " b", $Item_content__template = "<span>x</span>";
const $el_getter = _hoist_resume("b0", 0, "B1");
const $Item_content = _content("b1", $Item_content__template, $Item_content__walks, 0, 0, "B1");
const $setup__script = _script("b2", ($scope) => {
	for (const e of $el_getter($scope)) e.textContent = "y";
});

// child.marko
const $if_content__dynamicTag = /*@__PURE__*/ _dynamic_tag(0);
const $if_content__input_content = /*@__PURE__*/ _if_closure(1, 0, ($scope) => $if_content__dynamicTag($scope, $scope._.e));
const $if = /*@__PURE__*/ _if(1, "<!><!><!>", "b%", $if_content__input_content);
const $show = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$show($scope, !$scope.f);
}));
