// child-a.marko
var child_a_default = _template("__tests__/child-a.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>A</span>");
	_script($scope0_id, "__tests__/child-a.marko_0");
});

// child-b.marko
var child_b_default = _template("__tests__/child-b.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span>B</span>");
	_script($scope0_id, "__tests__/child-b.marko_0");
});

// template.marko
const $ChildA_withLoadAssets = withLoadAssets(child_a_default, "ready:__tests__/child-a.marko", [{
	type: "has",
	selector: ".shared"
}]);
const $ChildB_withLoadAssets = withLoadAssets(child_b_default, "ready:__tests__/child-b.marko", [{
	type: "has",
	selector: ".shared"
}]);
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let showB = false;
	_html(`<button>Show B</button>${_el_resume($scope0_id, "#button/0")}`);
	$ChildA_withLoadAssets({});
	_if(() => {
		if (showB) {
			const $scope1_id = _scope_id();
			$ChildB_withLoadAssets({});
			writeScope($scope1_id, {}, "__tests__/template.marko", "8:2");
			return 0;
		}
	}, $scope0_id, "#text/3");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, {}, "__tests__/template.marko", 0);
	_resume_branch($scope0_id);
}, 1);
