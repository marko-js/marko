// tags/cart-state.marko
function subscribeCartState(callback) {
	Promise.resolve().then(() => {
		callback({ totalQuantity: 30 });
	});
}
var cart_state_default = _template("__tests__/tags/cart-state.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let cart = null;
	const $return = { cart };
	_script($scope0_id, "__tests__/tags/cart-state.marko_0");
	_resume_branch($scope0_id);
	return $return;
});

// tags/foo.marko
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
var foo_default = _template("__tests__/tags/foo.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { cart } = cart_state_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/foo.marko_0_$pattern/var");
	const hasHydrate = cart !== null;
	_html("<header><div>");
	_await($scope0_id, "#text/2", loadHeader(), (collections) => {
		const $scope1_id = _scope_id();
		forOf(collections, (collection) => {
			const $scope2_id = _scope_id();
			_html(`<a${_attr("href", `/something/${collection}`)}>${_escape(collection)}</a>`);
		});
	}, 0);
	_html("<a href=/something>Something</a> Test ");
	_if(() => {
		if (!hasHydrate) {
			const $scope3_id = _scope_id();
			_html("<a href=/go-to>Go</a>");
			writeScope($scope3_id, {}, "__tests__/tags/foo.marko", "19:6");
			return 0;
		} else {
			const $scope4_id = _scope_id();
			_html("<button>Go to</button>");
			writeScope($scope4_id, {}, "__tests__/tags/foo.marko", "20:6");
			return 1;
		}
	}, $scope0_id, "#text/3", 1, 1, 1, 0, 1);
	_html("</div></header>");
	writeScope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/foo.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	foo_default({});
}, 1);
