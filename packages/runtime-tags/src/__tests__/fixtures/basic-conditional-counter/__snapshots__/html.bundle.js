// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let count = 0;
	_html(`<button class=inc></button>${_el_resume($scope0_id, "a")}<button class=toggle></button>${_el_resume($scope0_id, "b")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(count)}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "c", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "a0");
	_script($scope0_id, "a1");
	writeScope($scope0_id, {
		d: show,
		e: count
	});
	_resume_branch($scope0_id);
}, 1);
