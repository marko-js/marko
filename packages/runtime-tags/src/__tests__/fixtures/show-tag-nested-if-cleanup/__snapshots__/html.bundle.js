// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let inner = true;
	_html("<div id=ref></div><div id=nestedRef></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		_if(() => {
			{
				const $scope2_id = _scope_id();
				_script($scope2_id, "a0");
				writeScope($scope2_id, {});
				return 0;
			}
		}, $scope1_id, "a");
		_script($scope1_id, "a1");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id, "a", show);
	_html(`<button id=inner>Inner</button>${_el_resume($scope0_id, "b")}<button id=toggle>Toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		d: show,
		e: inner
	});
	_resume_branch($scope0_id);
}, 1);
