// template.marko
const $template = "<!><!>";
const $walks = "/&c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko;/&;<!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const sep = ":";
	const Row = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $fg__a = _filled_guard($scope1_reason, 0), $fg__b = _filled_guard($scope1_reason, 1);
		_script($scope1_id, "__tests__/template.marko_1_sep#0:5_a#2", 0, $fg__a, $fg__a && "a", "__tests__/template.marko_1_sep#0:5_a#2/setup", $scope1_reason, 0);
		_script($scope1_id, "__tests__/template.marko_1_sep#0:5_b#4", 0, $fg__b, $fg__b && "b", "__tests__/template.marko_1_sep#0:5_b#4/setup", $scope1_reason, 1);
		_scope($scope1_id, {
			a,
			b,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}) || ($fg__a && _patch_write($scope1_id, "PatchMarkedWrite:a", a, !_server_guard($scope1_reason, 0)), $fg__b && _patch_write($scope1_id, "PatchMarkedWrite:b", b, !_server_guard($scope1_reason, 1)));
	}, $scope0_id) };
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Row.content({
		a: input.a,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, {
		sep,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { sep: "1:8" });
}, 1);
