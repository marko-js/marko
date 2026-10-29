// template.marko
const $if_content__pick = /*@__PURE__*/ _fill_join("a4", 9, /*@__PURE__*/ _if_closure(1, 0, ($scope) => _text($scope.a, typeof $scope._.j)));
const $if_content__setup = $if_content__pick;
const $pick__script = _script("a2", ($scope) => {
	{
		const log = document.getElementById("log");
		log.textContent += log.last === $scope.j ? "same;" : "new;";
		log.last = $scope.j;
	}
});
const $if = /*@__PURE__*/ _if(1, "<p> </p>", "D ", $if_content__setup);
const $open = _let(10, ($scope) => $if($scope, $scope.k ? 0 : 1));
const $setup__script = _script("a3", ($scope) => _on($scope.c, "click", function() {
	$open($scope, !$scope.k);
}));
const $fa = ($scope) => () => "a:" + $scope.a.id;
const $fb = ($scope) => () => "b:" + $scope.a.id;
_resumed.a0 = $fa;
_resumed.a1 = $fb;
