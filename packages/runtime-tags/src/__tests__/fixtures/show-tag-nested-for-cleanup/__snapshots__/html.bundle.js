// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let items = ["a"];
	_html("<div id=refa></div>");
	_show_branch(() => {
		const $scope1_id = _scope_id();
		_for_of(items, (item) => {
			const $scope2_id = _scope_id();
			_script($scope2_id, "a0");
			writeScope($scope2_id, { b: item });
		}, 0, $scope1_id, "a", 1, 1, 0);
		_script($scope1_id, "a1");
		writeScope($scope1_id, {});
	}, $scope0_id, "a", show);
	_html(`<button id=toggle>Toggle</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a2");
	writeScope($scope0_id, {
		c: show,
		d: items
	});
	_resume_branch($scope0_id);
}, 1);
