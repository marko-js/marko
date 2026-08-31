// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>b</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<div>zero</div>");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	const $show = false;
	_show_start($show);
	_html("<span>shown</span>");
	_show_end($scope0_id, "d", $show, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	_scope($scope0_id, { e: n });
	_resume_branch($scope0_id);
}, 1);
