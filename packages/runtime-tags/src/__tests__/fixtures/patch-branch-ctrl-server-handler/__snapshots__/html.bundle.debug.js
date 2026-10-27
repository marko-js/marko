// template.marko
const $template = "<main><!><button>+</button><output></output></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button><output></output></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_prefix = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_prefix", input.prefix, !$sg__input_prefix);
	const onChange = _bind_resume((next) => {
		document.querySelector("output").textContent = input.prefix + next;
	}, "__tests__/template.marko_0/onChange", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html(`<input${_attr_input_value($scope1_id, "#input/0", "x", onChange)}>${_el_resume($scope1_id, "#input/0")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4", { "ControlledHandler:#input/0": ["valueChange", "7:22"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}<output></output></main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_prefix: input.prefix,
		onChange,
		open
	}, "__tests__/template.marko", 0, {
		input_prefix: ["input.prefix"],
		onChange: "1:8",
		open: "4:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", onChange, !$sg__input_prefix);
}, 1);
