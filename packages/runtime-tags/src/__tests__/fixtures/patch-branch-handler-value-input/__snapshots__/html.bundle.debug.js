// template.marko
const $template = "<button class=toggle>toggle</button><!><output> </output>";
const $walks = " b%bD l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%bD ;<button class=toggle>toggle</button><!><output> </output>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_mode = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	let out = "-";
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<button class=go>go</button>${_el_mark($scope1_id, "#button/0")}`);
			_script($scope1_id, "__tests__/template.marko_1_input_mode#0:5", 1, _filled_guard($scope0_reason, 0), ">input_mode");
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_mode#0:5/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html(`<output>${_text_mark($scope0_id, "#text/2", out)}</output>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_mode && _patch_render($scope0_id, "__tests__/template.marko_1_input_mode#0:5/setup", "input_mode");
	_scope($scope0_id, {
		input_mode: input.mode,
		open
	}, "__tests__/template.marko", 0, {
		input_mode: ["input.mode"],
		open: "1:6"
	}) || $fg__input_mode && _patch_write($scope0_id, "PatchMarkedWrite:input_mode", input.mode, !_server_guard($scope0_reason, 0));
}, 1);
