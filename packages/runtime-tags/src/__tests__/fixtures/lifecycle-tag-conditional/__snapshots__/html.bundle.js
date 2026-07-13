// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = 0;
	let show = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_script($scope1_id, "a0");
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<div id=ref></div><button id=increment>Increment</button>${_el_resume($scope0_id, "b")}<button id=toggle>Toggle</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: x,
		e: show
	});
	_resume_branch($scope0_id);
}, 1);
