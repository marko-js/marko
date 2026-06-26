// child-a.marko
var child_a_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>A</span>");
	_script($scope0_id, "a0");
});

// child-b.marko
var child_b_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>B</span>");
	_script($scope0_id, "b0");
});

// template.marko
const $ChildA_withLoadAssets = withLoadAssets(child_a_default, "_a", [{
	type: "has",
	selector: ".shared"
}]);
withLoadAssets(child_b_default, "_b", [{
	type: "has",
	selector: ".shared"
}]);
var template_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>Show B</button>${_el_resume($scope0_id, "a")}`);
	$ChildA_withLoadAssets({});
	_if(() => {}, $scope0_id, "d");
	_script($scope0_id, "c0");
	writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
