// template.marko
const $template = "<input><p> </p>";
const $walks = " bD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0_field#6; bD ;<input><p> </p>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let text = "";
	const field = {
		...input.field,
		valueChange: _resume((next) => {
			text = next;
		}, "__tests__/template.marko_0/field", $scope0_id)
	};
	_html(`<input${_patch_attrs({
		type: "text",
		...field
	}, "#input/0", $scope0_id, "input", 1, $scope0_owned, 0)}>${_el_resume($scope0_id, "#input/0")}<p>${_escape(text)}${_el_resume($scope0_id, "#text/1")}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_field#6");
	$scope0_reason && writeScope($scope0_id, {}, "__tests__/template.marko", 0, {
		"ControlledHandler:#input/0": ["...field", "3:23"],
		"EventAttributes:#input/0": ["...field", "3:23"]
	});
	_resume_branch($scope0_id);
}, 1, 0);
