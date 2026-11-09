// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ name: "ab" }, { name: "cde" }];
	let show = true;
	_for_of(items, ({ name }) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_html(`<span>${_escape(name.length)}</span>`);
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 0, 0, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, "name", $scope0_id, "a", 1, 0);
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, { d: show });
}, 1);
