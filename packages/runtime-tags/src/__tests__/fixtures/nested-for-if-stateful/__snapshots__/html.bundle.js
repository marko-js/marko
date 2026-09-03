// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let counts = [
		0,
		0,
		0
	];
	_for_of(counts, (count, i) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope3_id = _scope_id();
				_html(`<button>Increment ${_text_resume($scope3_id, "b", count, 2)}</button>${_el_resume($scope3_id, "a")}`);
				_script($scope3_id, "a1");
				_scope($scope3_id, {});
				return 1;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			c: count,
			M: i
		});
	}, 0, $scope0_id, "a");
	_scope($scope0_id, { b: counts });
}, 1);
