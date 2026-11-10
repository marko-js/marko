// tags/label.marko
const $template = "<output></output>";
const $setup = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_get);
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const { v } = item;
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xd", v, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		label_default({ get: _bind_resume(function() {
			return v + "!";
		}, "a0", $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			d: v,
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "a", 1, 1, 1, 0, 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
