// tags/cart-state.marko
var cart_state_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $return = { cart: null };
	_script($scope0_id, "b0");
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
var foo_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let { cart } = cart_state_default({});
	_var($scope0_id, "b", $childScope, "c0");
	const hasHydrate = cart !== null;
	_html("<header><div>");
	_await($scope0_id, "c", loadHeader(), (collections) => {
		_scope_id();
		forOf(collections, (collection) => {
			_scope_id();
			_html(`<a${_attr("href", `/something/${collection}`)}>${_escape(collection)}</a>`);
		});
	}, 0);
	_html("<a href=/something>Something</a> Test ");
	_if(() => {
		if (!hasHydrate) {
			const $scope3_id = _scope_id();
			_html("<a href=/go-to>Go</a>");
			writeScope($scope3_id, {});
			return 0;
		} else {
			const $scope4_id = _scope_id();
			_html("<button>Go to</button>");
			writeScope($scope4_id, {});
			return 1;
		}
	}, $scope0_id, "d", 1, 1, 1, 0, 1);
	_html("</div></header>");
	writeScope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	foo_default({});
}, 1);
