// template.marko
const $template = "<p> </p><input><!><button> </button>";
const $walks = "D l b%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D l b%b D ;<p> </p><input><!><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0));
	let count = 0;
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</p><input${_attr_input_value($scope0_id, "#input/1", input.label, _bind_resume(function(v) {
		console.log(v + ":" + input.label);
	}, "__tests__/template.marko_0/valueChange", $scope0_id), "PatchControl:2#input/1", $scope0_reason, 0, "PatchWrite:ControlledHandler:#input/1", $scope0_reason, 0)}>${_el_mark($scope0_id, "#input/1")}`);
	_if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", input.label, $wg__input_label)}</em>`);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_label#0:7/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_html(`<button>${_text_mark($scope0_id, "#text/4", count)}</button>${_el_mark($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_render($scope0_id, "__tests__/template.marko_1_input_label#0:7/setup", "input_label");
	_scope($scope0_id, {
		input_label: input.label,
		count
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		count: "1:6",
		"ControlledHandler:#input/1": ["valueChange", "3:26"]
	});
}, 1);
