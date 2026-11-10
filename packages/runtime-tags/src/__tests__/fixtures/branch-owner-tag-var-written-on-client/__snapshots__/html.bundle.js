// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	_html(`<button>inc</button>${_el_mark($scope0_id, "a")}`);
	const $return = count;
	_script($scope0_id, "b0");
	_scope($scope0_id, { b: count });
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let count = counter_default({});
	_var($scope0_id, "b", $childScope, "a0");
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<p>${_text_mark($scope1_id, "a", count)}</p>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 0, 0, 1);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
