// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a1: "a1;D ;<em> </em>",
	a: "a !a2;E l%b Db%;<main><h1> </h1><!><button>Count <!></button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><h1>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h1>`);
	_await($scope0_id, "b", input.promise, (value) => {
		const $scope1_id = _scope_id();
		_html(`<em>${_patch_text($scope1_id, "a", value, $scope0_owned, 1)}${_el_resume($scope1_id, "a")}</em>`);
		writeScope($scope1_id, {});
	}, void 0, "a1", 1);
	_html(`<button>Count <!>${_escape(count)}${_el_resume($scope0_id, "d")}</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a2");
	$scope0_reason && writeScope($scope0_id, { i: count });
	_resume_branch($scope0_id);
}, 1, 0);
