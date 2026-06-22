// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	let message = "hi";
	_html(`<button></button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(message)}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {
		c: show,
		d: message
	});
	_resume_branch($scope0_id);
}, 1);
