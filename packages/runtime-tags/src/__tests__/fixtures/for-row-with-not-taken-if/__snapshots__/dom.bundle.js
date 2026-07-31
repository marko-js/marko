// template.marko
const $for_content__if = /*@__PURE__*/ _if(1, "never");
const $for_content__i = ($scope, i) => {
	_text($scope, "a", i);
	$for_content__if($scope, i > 9 ? 0 : 1);
};
const $for_content__$params = ($scope, $params2) => $for_content__i($scope, $params2[0]);
const $for = /*@__PURE__*/ _for_of(1, "<div>item <!></div><!><!>", "Db%l%", 0, $for_content__$params);
const $items = /*@__PURE__*/ _let(2, ($scope) => $for($scope, [$scope.c]));
const $setup__script = _script("a0", ($scope) => _on($scope.a, "click", function() {
	$items($scope, [1]);
}));
