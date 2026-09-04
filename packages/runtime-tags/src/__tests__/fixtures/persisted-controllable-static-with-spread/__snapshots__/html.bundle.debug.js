// template.marko
const $template = "<input><p> </p>";
const $walks = " bD l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !; bD ;<input><p> </p>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let text = "init";
	_html(`<input${_attrs({
		value: text,
		valueChange: _resume((_new_text) => {
			text = _new_text;
		}, "__tests__/template.marko_0/valueChange", $scope0_id),
		...input.rest
	}, "#input/0", $scope0_id, "input")}>${_el_resume($scope0_id, "#input/0")}<p>${_text_resume($scope0_id, "#text/1", text)}</p>`);
	_script($scope0_id, "__tests__/template.marko_0_input_rest#4_text#5");
	$scope0_reason ? _scope($scope0_id, {
		input_rest: input.rest,
		text
	}, "__tests__/template.marko", 0, {
		input_rest: ["input.rest"],
		text: "1:6",
		"ControlledHandler:#input/0": ["...input.rest", "2:23"],
		"EventAttributes:#input/0": ["...input.rest", "2:23"]
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.rest);
}, 1, 0);
