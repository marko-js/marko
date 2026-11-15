// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_for_of(["a", "b"], (item, index) => {
		const $scope1_id = _scope_id();
		const Key = { content: _content("a0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(_escape(index));
			_scope($scope2_id, { _: _scope_with_id($scope1_id) });
		}, $scope1_id) };
		_if(() => {
			{
				const $scope3_id = _scope_id();
				Key.content({});
				_scope($scope3_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, {
			M: index,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, 0);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, { c: show });
}, 1);
