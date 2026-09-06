// template.marko
const $elseif_content__input_title = /*@__PURE__*/ _fill_join("a0", 4, /*@__PURE__*/ _if_closure(0, 1, ($scope) => _text($scope.a, $scope._.e)));
const $elseif_content__setup = $elseif_content__input_title;
const $if = /*@__PURE__*/ _if(0, "<b>one</b>", 0, 0, "<i> </i>", "D ", $elseif_content__setup, "<s>none</s>");
const $mode = /*@__PURE__*/ _let(5, ($scope) => $if($scope, $scope.f === 1 ? 0 : $scope.f === 2 ? 1 : 2));
const $setup__script = _script("a0", ($scope) => _on($scope.b, "click", function() {
	$mode($scope, ($scope.f + 1) % 3);
}));
