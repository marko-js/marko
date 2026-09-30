// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_for_of([{
		id: "a",
		class: "x"
	}, {
		id: "b",
		title: "y"
	}], (item) => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_html("<div");
				_attrs_content(item, "a", $scope2_id, "div");
				_html(`</div>${_el_resume($scope2_id, "a")}`);
				_script($scope2_id, "a0");
				_scope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a", 1, 1, 1, 0, 1);
		_scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 0, 0);
	const attrs = { class: "z" };
	_if(() => {
		{
			const $scope3_id = _scope_id();
			_html("<span");
			_attrs_content(attrs, "a", $scope3_id, "span");
			_html(`</span>${_el_resume($scope3_id, "a")}`);
			_script($scope3_id, "a1");
			_scope($scope3_id, {});
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		d: show,
		e: attrs
	});
}, 1);
