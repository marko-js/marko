// child.marko
const $template$1 = "<button><!>:<!></button>";
const $walks$1 = " D%c%l";
const $setup$1 = [[], ["__tests__/child.marko_0"]];
_shells({ "__tests__/child.marko": "__tests__/child.marko !__tests__/child.marko_0; D%c%;<button><!>:<!></button>" });
var child_default = _template("__tests__/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", input.label, 1, $scope0_reason, 0)}:${_text_mark($scope0_id, "#text/2", count, 2)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/child.marko_0_count#6/fill", count, 1);
	_scope($scope0_id, { count }, "__tests__/child.marko", 0, { count: "1:6" });
});

// template.marko
const $template = "<button class=toggle>toggle</button><main></main>";
const $walks = " b b";
const $Child_withLoadAssets = withLoadAssets(() => child_default, "__tests__/child.marko", flush, "ready:__tests__/child.marko");
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b ;<button class=toggle>toggle</button><main></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 1), $cg__input_label = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $fg__input_show = _filled_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	let open = false;
	_html(`<button class=toggle>toggle</button>${_el_mark($scope0_id, "#button/0")}<main>`);
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope2_id = _scope_id();
					_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
					const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 0);
					$Child_withLoadAssets({ label: input.label });
					_patch_child_end();
					$cg__input_label && _patch_render($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe");
					_subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, {
						_: _scope_with_id($scope1_id),
						"#childScope/1": $wi__input_label && _existing_scope($childScope)
					}, "__tests__/template.marko", "7:6"), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe", 0);
					_write_guard($scope0_reason, 1) && _resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "#text/0", $wg__input_show, $wg__input_show);
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_input_show#0:4/setup");
			_scope($scope1_id, {}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#main/1", 1, 1, 1, "</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_show && _patch_render($scope0_id, "__tests__/template.marko_1_input_show#0:4/setup", "input_show");
	$fg__input_label && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	_scope($scope0_id, {
		input_show: input.show,
		input_label: input.label,
		open,
		"ClosureScopes:input_label/8": $wi__input_label && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		open: "3:6"
	}) || ($fg__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_show", input.show, !_server_guard($scope0_reason, 0)), $fg__input_label && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 1)));
}, 1);
