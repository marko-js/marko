// tags/child.marko
var child_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<p>child</p>");
	_script($scope0_id, "b0");
	_resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<div id=ref>initial</div><button id=toggle>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			child_default({});
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_script($scope0_id, "a0");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
