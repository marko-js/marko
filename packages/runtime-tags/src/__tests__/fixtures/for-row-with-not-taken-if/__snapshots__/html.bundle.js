// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [1, 2];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}`);
	_for_of(items, (i) => {
		const $scope1_id = _scope_id();
		_html(`<div>item ${_text_resume($scope1_id, "a", i, 2)}</div>`);
		_if(() => {
			if (i > 9) {
				const $scope2_id = _scope_id();
				_html("never");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "b");
		_scope($scope1_id, {});
	}, 0, $scope0_id, "b");
	_script($scope0_id, "a0");
	_scope($scope0_id, {});
}, 1);
