// template.marko
const $template = "<!><!>";
const $walks = "/&c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;/&;<!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_c = _client_guard($scope0_reason, 1), $fg__input_c = _filled_guard($scope0_reason, 1), $wi__input_c = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_c__closures = new Set();
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 1), $fg__b = _filled_guard($scope1_reason, 2);
		_script($scope1_id, "__tests__/template.marko_1_input_c#0:3_a#2", 0, (_filled_guard($scope0_reason, 1) || $fg__a) && ($cg__input_c || _client_guard($scope1_reason, 1) ? 2 : 1), [_filled_guard($scope0_reason, 1) && ">input_c", $fg__a && "a"], "__tests__/template.marko_1_input_c#0:3_a#2/setup", (_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 1)) << 1, 0);
		_script($scope1_id, "__tests__/template.marko_1_input_c#0:3_b#4", 0, (_filled_guard($scope0_reason, 1) || $fg__b) && ($cg__input_c || _client_guard($scope1_reason, 2) ? 2 : 1), [_filled_guard($scope0_reason, 1) && ">input_c", $fg__b && "b"], "__tests__/template.marko_1_input_c#0:3_b#4/setup", (_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 2)) << 1, 0);
		_subscribe(_unfilled_if((_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 0)) << 1, 0) && $wi__input_c && $input_c__closures, _scope($scope1_id, {
			a,
			b,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "1:2", {
			a: "1:15",
			b: "1:18"
		}), _client_guard((_updates_from($scope0_reason, 1) | _updates_from($scope1_reason, 0)) << 1, 0) && "__tests__/template.marko_1_input_c#0:3/subscribe", 0) || ($fg__a && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !_server_guard($scope1_reason, 1)), $fg__b && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !_server_guard($scope1_reason, 2)));
		_write_guard($scope0_reason, 1) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 3) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	$fg__input_c && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_c#3/subscribers", "input_c");
	_scope($scope0_id, {
		input_c: input.c,
		"ClosureScopes:input_c/6": $wi__input_c && $input_c__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_c: ["input.c"] }) || $fg__input_c && _patch_write($scope0_id, "PatchMarkedWrite:input_c", input.c, !_server_guard($scope0_reason, 1));
}, 1);
