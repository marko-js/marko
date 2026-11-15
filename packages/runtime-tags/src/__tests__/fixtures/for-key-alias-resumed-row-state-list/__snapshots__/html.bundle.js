// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = ["a", "b"];
	_for_of(items, (item, index) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_html(_escape(index));
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_scope($scope1_id, { M: index });
	}, 0, $scope0_id, "a");
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "b")}<button class=add>add</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		d: show,
		e: items
	});
}, 1);
