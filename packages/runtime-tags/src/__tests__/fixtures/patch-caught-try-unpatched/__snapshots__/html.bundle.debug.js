// template.marko
const $template = "<main><!><button>Toggle</button></main>";
const $walks = "D%b l";
function check(fail) {
	if (fail) throw new Error("down");
}
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>Toggle</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wg__input_fail = _write_guard($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 0), $cg__input_fail = _client_guard($scope0_reason, 1), $fg__input_label = _filled_guard($scope0_reason, 0), $fg__input_fail = _filled_guard($scope0_reason, 1), $wi__input_label = _write_if($scope0_reason, 0), $wi__input_fail = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $input_fail__closures = new Set();
	let open = true;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_mark($scope2_id, "#text/0", input.label, $wg__input_label)}${_text_mark($scope2_id, "#text/1", check(input.fail), $wg__input_fail * 2)}</p>`);
				$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:4/subscribe");
				$cg__input_fail && _patch_render($scope2_id, "__tests__/template.marko_2_input_fail#0:5/subscribe");
				_subscribe($wi__input_fail && $input_fail__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:6"), $cg__input_label && "__tests__/template.marko_2_input_label#0:4/subscribe", $wg__input_label || $wg__input_fail), $cg__input_fail && "__tests__/template.marko_2_input_fail#0:5/subscribe", $wg__input_label || $wg__input_fail);
			}, void 0, () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html("Unavailable");
			}, 0, "__tests__/template.marko_3*content", "__tests__/template.marko_2*content");
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>Toggle</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#4/subscribers", "input_label");
	$fg__input_fail && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_fail#5/subscribers", "input_fail");
	_scope($scope0_id, {
		input_label: input.label,
		input_fail: input.fail,
		open,
		"ClosureScopes:input_label/7": $wi__input_label && $input_label__closures,
		"ClosureScopes:input_fail/8": $wi__input_fail && $input_fail__closures
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		input_fail: ["input.fail"],
		open: "4:6"
	}) || ($fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 0)), $fg__input_fail && _patch_write($scope0_id, "PatchMarkedWrite:input_fail", input.fail, !_server_guard($scope0_reason, 1)));
}, 1);
