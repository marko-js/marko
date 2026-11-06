// tags/cart-state.marko
function subscribeCartState(callback) {
	Promise.resolve().then(() => {
		callback({ totalQuantity: 30 });
	});
	return () => {};
}
const $cart = /*@__PURE__*/ _let(0, ($scope) => _return($scope, { cart: $scope.a }));
const $setup__script = _script("b0", ($scope) => {
	{
		const unsubscribe = subscribeCartState((state) => {
			$cart($scope, state);
		});
		$signal($scope, 0).addEventListener("abort", unsubscribe);
	}
});

// template.marko
const $pattern2 = _var_resume("a0", ($scope, $pattern) => $if($scope, !($pattern.cart !== null) ? 0 : 1));
const $if = /*@__PURE__*/ _if(3, "<a href=/go-to>Go</a>", 0, 0, "<button>Go to</button>");
