// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	forOf([1, 2], (n) => {
		const $scope2_id = _scope_id();
		_html(`<button class=add>+${_escape(n)}</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a0");
		_scope($scope2_id, {
			d: n,
			_: _scope_with_id($scope0_id)
		});
	});
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<button class=inc>inc</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "a1");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button class=toggle>toggle</button>${_el_resume($scope0_id, "c")}<p>${_text_resume($scope0_id, "d", count)}</p>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: count,
		f: show
	});
}, 1);
