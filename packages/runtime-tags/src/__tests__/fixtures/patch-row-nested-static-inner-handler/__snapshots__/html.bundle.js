// template.marko
_shells({
	a: "a;b%bD ;<!><!><p> </p>",
	a2: "a2;b%;<!><!><!>",
	a1: "a1 !a0; ;<button class=r>x</button>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "wc", row, !_server_guard($scope0_reason, 0));
		_for_of([1, 2], (c) => {
			const $scope2_id = _scope_id();
			_html(`<button class=r>x</button>${_el_resume($scope2_id, "a")}`);
			_script($scope2_id, "a0");
			_patch_write($scope2_id, "wc", c, 1);
			_scope($scope2_id, {
				c,
				_: _scope_with_id($scope1_id)
			});
		}, 0, $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a1", 0, 0);
		_scope($scope1_id, {
			c: row,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a2", $scope0_reason, 0);
	_html(`<p>${_text_resume($scope0_id, "b", count)}</p>`);
	_scope($scope0_id, { f: count });
}, 1);
