// child.marko
var child_default = _template("a", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span>child</span>");
});

// template.marko
const $load_Child = withAssets(child_default, "_a", [{
	type: "visible",
	selector: ":is(body)"
}]);
var template_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let show = true;
	_html(`<button>Toggle</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			$load_Child({});
			writeScope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_script($scope0_id, "b0");
	writeScope($scope0_id, { c: show });
	_resume_branch($scope0_id);
}, 1);
