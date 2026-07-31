// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let flip = false;
	_html(`<button>flip</button>${_el_resume($scope0_id, "a")}<div>x `);
	_if(() => {
		{
			const $scope2_id = _scope_id();
			_html("<span>B</span>");
			writeScope($scope2_id, {});
			return 1;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(" y</div>");
	_await($scope0_id, "c", resolveAfter(0, 1), (_) => {
		_scope_id();
		_html("ready");
	}, 0);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { d: flip });
	_resume_branch($scope0_id);
}, 1);
