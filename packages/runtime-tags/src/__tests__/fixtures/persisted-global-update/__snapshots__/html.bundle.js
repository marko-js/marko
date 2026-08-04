// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<main><h1>${_patch_text($scope0_id, "a", $global().brand)}${_escape($global().brand)}${_el_resume($scope0_id, "a")}</h1><button>read</button>${_el_resume($scope0_id, "b")}<p>${_escape("")}${_el_resume($scope0_id, "c")}</p></main>`);
	_script($scope0_id, "a0");
	$scope0_reason && writeScope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1);
