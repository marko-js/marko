// tags/cart-state.marko
function subscribeCartState(callback) {
	Promise.resolve().then(() => {
		callback({ totalQuantity: 30 });
	});
}
const $cart$1 = /* @__PURE__ */ _let(0, ($scope) => _return($scope, { cart: $scope.a }));
const $setup__script = _script("b0", ($scope) => {
	{
		const unsubscribe = subscribeCartState((state) => {
			$cart$1($scope, state);
		});
		$signal($scope, 0).addEventListener("abort", unsubscribe);
	}
});

// tags/foo.marko
const $pattern2 = _var_resume("c0", ($scope, $pattern) => $cart($scope, $pattern.cart));
const $if = /* @__PURE__ */ _if(3, "<a href=/go-to>Go</a>", "b", 0, "<button>Go to</button>", "b");
const $hasHydrate = ($scope, hasHydrate) => $if($scope, !hasHydrate ? 0 : 1);
const $cart = ($scope, cart) => $hasHydrate($scope, cart !== null);
