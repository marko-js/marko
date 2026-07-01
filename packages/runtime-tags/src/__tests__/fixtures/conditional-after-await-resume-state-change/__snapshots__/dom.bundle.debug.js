// tags/cart-state.marko
const $template$2 = "";
const $walks$2 = "";
function subscribeCartState(callback) {
	Promise.resolve().then(() => {
		callback({ totalQuantity: 30 });
	});
}
const $cart$1 = /* @__PURE__ */ _let("cart/0", ($scope) => _return($scope, { cart: $scope.cart }));
const $setup__script = _script("__tests__/tags/cart-state.marko_0", ($scope) => {
	{
		const unsubscribe = subscribeCartState((state) => {
			$cart$1($scope, state);
		});
		$signal($scope, 0).addEventListener("abort", unsubscribe);
	}
});
function $setup$2($scope) {
	$signalReset($scope, 0);
	$cart$1($scope, null);
	$setup__script($scope);
}
var cart_state_default = /* @__PURE__ */ _template("__tests__/tags/cart-state.marko", "", "", $setup$2);

// tags/foo.marko
const $template$1 = /* @__PURE__ */ ((_w0) => `${_w0}<header><div><!><a href=/something>Something</a> Test <!></div></header>`)("");
const $walks$1 = /* @__PURE__ */ ((_w0) => `0${_w0}&E%d%m`)("");
function loadHeader() {
	return new Promise((resolve) => {
		setTimeout(resolve, 100, [
			1,
			2,
			3,
			4
		]);
	});
}
const $for_content__collection = ($scope, collection) => {
	_attr($scope["#a/0"], "href", `/something/${collection}`);
	_text($scope["#text/1"], collection);
};
const $for_content__$params = ($scope, $params3) => $for_content__collection($scope, $params3[0]);
const $await_content__for = /* @__PURE__ */ _for_of("#text/0", "<a> </a>", " D l", 0, $for_content__$params);
const $await_content__collections = ($scope, collections) => $await_content__for($scope, [collections]);
const $await_content__$params = ($scope, $params2) => $await_content__collections($scope, $params2[0]);
const $pattern2 = _var_resume("__tests__/tags/foo.marko_0_$pattern/var", ($scope, $pattern) => $cart($scope, $pattern.cart));
const $if = /* @__PURE__ */ _if("#text/3", "<a href=/go-to>Go</a>", "b", 0, "<button>Go to</button>", "b");
const $hasHydrate = ($scope, hasHydrate) => $if($scope, !hasHydrate ? 0 : 1);
const $cart = ($scope, cart) => $hasHydrate($scope, cart !== null);
const $await_content = /* @__PURE__ */ _await_content("#text/2", "<!><!><!>", "b%c");
const $await_promise = /* @__PURE__ */ _await_promise("#text/2", $await_content__$params);
function $setup$1($scope) {
	_var($scope, "#childScope/0", $pattern2);
	$setup$2($scope["#childScope/0"]);
	$await_content($scope);
	$await_promise($scope, loadHeader());
}
var foo_default = /* @__PURE__ */ _template("__tests__/tags/foo.marko", $template$1, $walks$1, $setup$1);

// template.marko
const $template = $template$1;
const $walks = /* @__PURE__ */ ((_w0) => `/${_w0}&`)($walks$1);
function $setup($scope) {
	$setup$1($scope["#childScope/0"]);
}
var template_default = /* @__PURE__ */ _template("__tests__/template.marko", $template, $walks, $setup);
