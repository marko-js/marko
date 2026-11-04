// tags/label.marko
const $template = "<output></output>";
const $setup = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_get = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0", 1, $fg__input_get, "d");
	_scope($scope0_id, { d: input.get }) || $fg__input_get && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a1: `a1${_shell_marker([[], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${$template}`,
	a2: `a2${_shell_marker([[], []], ["a>", $setup])};${((_w0) => `/${_w0}&`)(" b")};${$template}`,
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.v, (value) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xc", value, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		label_default({ get: _bind_resume(function() {
			return value;
		}, "a0", $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			c: value,
			a: _existing_scope($childScope)
		});
	}, 1, "a1", _unfilled_if($scope0_reason, 0), 1);
}, 1);
