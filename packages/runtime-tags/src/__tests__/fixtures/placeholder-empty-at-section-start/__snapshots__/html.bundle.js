// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let x = "";
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`${_escape(x) || "<!>"}${_el_resume($scope1_id, "a")}`);
			writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, 0, 0, 0, 1);
	_for_of([1], (i) => {
		const $scope2_id = _scope_id();
		_html(`${_escape(x) || "<!>"}${_el_resume($scope2_id, "a")} tail`);
		writeScope($scope2_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "b", 1, 0, 0);
	_html(`<button>fill</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
