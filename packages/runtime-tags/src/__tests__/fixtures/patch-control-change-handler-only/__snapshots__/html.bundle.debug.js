// template.marko
const $template = "<p> </p><input><span> </span>";
const $walks = "D l bD l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l bD ;<p> </p><input><span> </span>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<p>${_patch_text($scope0_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</p><input${_attr_input_value($scope0_id, "#input/1", void 0, _resume(function(v) {
		count += v.length;
	}, "__tests__/template.marko_0/valueChange", $scope0_id))}>${_el_resume($scope0_id, "#input/1")}<span>${_text_resume($scope0_id, "#text/2", count)}</span>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, {
		count: "1:6",
		"ControlledHandler:#input/1": ["valueChange", "3:8"]
	});
}, 1);
