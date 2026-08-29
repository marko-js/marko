// template.marko
_shells({ a: "a !a1; bD ;<input><p> </p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let text = "";
	_html(`<input${_patch_attrs({
		type: "text",
		...input.field,
		valueChange: _resume((next) => {
			text = next;
		}, "a0", $scope0_id)
	}, "a", $scope0_id, "input", 1, $scope0_owned, 0)}>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", text)}</p>`);
	_script($scope0_id, "a1");
	$scope0_reason && _scope($scope0_id, {});
	_resume_branch($scope0_id);
}, 1, 0);
