// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_w = _filled_guard($scope0_reason, 2), $fg__input_v = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const d = input.v + "!";
	let on = true;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/0")}`);
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			let x = d;
			_html(`<p>${_text_mark($scope1_id, "#text/0", x)} ${_text_mark($scope1_id, "#text/1", input.w, _write_guard($scope0_reason, 2) * 2)}</p>`);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/template.marko_1_input_w#0:5/setup");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_d#0:6/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_w && _patch_render($scope0_id, "__tests__/template.marko_1_input_w#0:5/setup", "input_w");
	$fg__input_v && _patch_render($scope0_id, "__tests__/template.marko_1_d#0:6/setup", "d");
	_scope($scope0_id, {
		input_w: input.w,
		d,
		on
	}, "__tests__/template.marko", 0, {
		input_w: ["input.w"],
		d: "1:8",
		on: "2:6"
	}) || ($fg__input_w && _patch_write($scope0_id, "PatchMarkedWrite:input_w", input.w, !_server_guard($scope0_reason, 2)), $fg__input_v && _patch_write($scope0_id, "PatchMarkedWrite:d", d, !_server_guard($scope0_reason, 1)));
}, 1);
