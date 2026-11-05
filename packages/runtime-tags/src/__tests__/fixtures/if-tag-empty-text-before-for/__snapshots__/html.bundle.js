// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			forOf([{ id: 1 }, { id: 2 }], (item) => {
				_scope_id();
				_html(`<b>${_escape(item.id)}</b>`);
			});
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>toggle</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { c: show });
}, 1);
