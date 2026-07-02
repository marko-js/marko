// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = 1;
	_html(`<button>${_escape(value)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_await($scope0_id, "c", resolveAfter(0, 4), () => {
		_scope_id();
		_html("<span>Hello</span>");
	}, 0);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<span>${_escape(value)}${_el_resume($scope1_id, "a")}</span>`);
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "d", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { e: value });
	_resume_branch($scope0_id);
}, 1);
