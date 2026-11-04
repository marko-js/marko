// template.marko
const $template = "<button> </button><!><!>";
const $walks = " D l%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; D l%;<button> </button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_show = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const { label, ...rest } = input;
	let on = true;
	_html(`<button>${_text_mark($scope0_id, "#text/1", label, 1, $scope0_reason, 0)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show && on) {
			const $scope1_id = _scope_id();
			_html("<span>shown</span>");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_show#6_on#7/setup", $fg__input_show && "input_show");
	_scope($scope0_id, {
		input_show: input.show,
		on
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		on: "2:6"
	}) || $fg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 1));
}, 1);
