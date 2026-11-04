// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_onChange = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "#input/0", "x", input.onChange)}>${_el_mark($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_onChange#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4", { "ControlledHandler:#input/0": ["valueChange", "4:22"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_onChange && _patch_render($scope0_id, "__tests__/template.marko_1_input_onChange#0:4/setup", "input_onChange");
	_scope($scope0_id, {
		input_onChange: input.onChange,
		open
	}, "__tests__/template.marko", 0, {
		input_onChange: ["input.onChange"],
		open: "1:6"
	}) || $fg__input_onChange && _patch_write($scope0_id, "PatchMarkedWrite:input_onChange", input.onChange, !_server_guard($scope0_reason, 0));
}, 1);
