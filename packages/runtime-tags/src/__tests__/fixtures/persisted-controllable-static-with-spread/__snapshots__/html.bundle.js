// template.marko
_shells({ a: "a !; bD ;<input><p> </p>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let text = "init";
	_html(`<input${_attrs({
		value: text,
		valueChange: _resume((_new_text) => {
			text = _new_text;
		}, "a0", $scope0_id),
		...input.rest
	}, "a", $scope0_id, "input")}>${_el_resume($scope0_id, "a")}<p>${_escape(text)}${_el_resume($scope0_id, "b")}</p>`);
	_script($scope0_id, "a1");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.rest,
		f: text
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.rest);
	_resume_branch($scope0_id);
}, 1, 0);
