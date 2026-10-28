// tags/counter/index.marko
const $if_content__count = /*@__PURE__*/ _let_change(2, ($scope) => _text($scope.a, $scope.c));
const $if_content__input_onCount__script = _script("b0", ($scope) => {
	{
		const log = document.getElementById("log");
		log.textContent += log.fn === $scope._.e ? "same;" : "new;";
		log.fn = $scope._.e;
	}
});
const $if_content__input_onCount = /*@__PURE__*/ _fill_signal("4 b3", /*@__PURE__*/ _if_closure(0, 0, ($scope) => {
	$if_content__count($scope, 0, $scope._.e);
	$if_content__input_onCount__script($scope);
}));
const $if_content__setup__script = _script("b1", ($scope) => _on($scope.b, "click", function() {
	$if_content__count($scope, +$scope.c + 1);
}));
const $if_content__setup = ($scope) => {
	$if_content__input_onCount._($scope);
	$if_content__setup__script($scope);
};
const $if = /*@__PURE__*/ _if(0, "<span>Seen <!></span><button class=add>+</button>", "Db%l ", $if_content__setup);
const $open = /*@__PURE__*/ _fill_let("b4", 5, ($scope) => $if($scope, $scope.f ? 0 : 1));
const $setup__script = _script("b2", ($scope) => _on($scope.b, "click", function() {
	$open($scope, !$scope.f);
}));

// template.marko
const $last = /*@__PURE__*/ _let(7, ($scope) => _text($scope.b, $scope.h));
const $onCount = ($scope) => (next) => {
	$last($scope, next);
};
_resumed.a0 = $onCount;
