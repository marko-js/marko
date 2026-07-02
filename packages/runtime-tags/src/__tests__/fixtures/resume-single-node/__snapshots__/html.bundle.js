// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let itemId = 0;
	let items = [0];
	_for_of(items, () => {
		const $scope1_id = _scope_id();
		_html("<div>a</div>");
		_if(() => {
			if (items.length > 1) {
				const $scope2_id = _scope_id();
				_html("<div>b</div>");
				writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a");
	_html(`<button>More</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: itemId,
		d: items,
		e: items?.length
	});
	_resume_branch($scope0_id);
}, 1);
