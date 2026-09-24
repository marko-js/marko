// tags/child.marko
const $if_content__tag__script = _script("b0", ($scope) => _attrs_script($scope, "a"));
const $if_content__tag = /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	_attrs_content($scope, "a", {
		"data-name": $scope._.M,
		...$scope._.d
	});
	$if_content__tag__script($scope);
});
const $for_content__if = /*@__PURE__*/ _if(0, "<div></div>", " ", $if_content__tag);
const $for_content__setup = ($scope) => $for_content__if($scope, $scope.M !== "content" ? 0 : 1);
const $for_content__$params = ($scope, $params2) => $for_content__tag($scope, $params2[1]);
const $for_content__tag = /*@__PURE__*/ _const(3, $if_content__tag);
const $for = /*@__PURE__*/ _for_in(0, "<!><!><!>", "b%", $for_content__setup, $for_content__$params);
const $input = ($scope, input) => $for($scope, [input]);

// template.marko
const $b_content = /*@__PURE__*/ _content("a3", "B");
const $a_content__count = /*@__PURE__*/ _closure_get(2, ($scope) => _text($scope.a, $scope._.b), 0, "a1", 1);
const $a_content = /*@__PURE__*/ _content("a2", "A <!>", "b%", $a_content__count);
const $count__closure = /*@__PURE__*/ _closure($a_content__count);
const $count = /*@__PURE__*/ _let(1, ($scope) => {
	$input($scope.a, {
		a: attrTag({
			onClick: $onClick($scope),
			content: $a_content($scope)
		}),
		b: attrTag({ content: $b_content($scope) })
	});
	$count__closure($scope);
});
const $onClick = ($scope) => function() {
	$count($scope, +$scope.b + 1);
};
_resumed.a0 = $onClick;
