// template.marko
const $template = "<main><!><button>toggle</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>toggle</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let on = false;
	_html("<main>");
	_if(() => {
		if (on) {
			const $scope1_id = _scope_id();
			_html(`<b>${_text_mark($scope1_id, "#text/0", input.title, $wg__input_title)}</b>`);
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_input_title#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "3:4");
			return 0;
		} else {
			const $scope2_id = _scope_id();
			_html(`<i>${_text_mark($scope2_id, "#text/0", input.title, $wg__input_title)}</i>`);
			$cg__input_title && _patch_render($scope2_id, "__tests__/template.marko_2_input_title#0:4/setup");
			_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
			return 1;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>toggle</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_input_title#0:4/setup", "input_title");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_2_input_title#0:4/setup", "input_title");
	_scope($scope0_id, {
		input_title: input.title,
		on
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		on: "1:6"
	}) || $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !_server_guard($scope0_reason, 0));
}, 1);
