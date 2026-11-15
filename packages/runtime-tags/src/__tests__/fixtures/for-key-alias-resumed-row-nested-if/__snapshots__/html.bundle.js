// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_for_of(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				if (item) {
					const $scope3_id = _scope_id();
					_html(_escape(index));
					_scope($scope3_id, { _: _scope_with_id($scope2_id) });
				}
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {
			c: item,
			M: index,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
