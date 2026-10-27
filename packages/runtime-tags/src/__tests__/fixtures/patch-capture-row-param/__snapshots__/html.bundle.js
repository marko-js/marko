// tags/label.marko
const $template = "<output></output>";
const $setup = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	_scope($scope0_id, { d: input.get }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xd", item?.label, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a", 0);
		label_default({ get: _bind_resume(function() {
			return item.label;
		}, "a0", $scope1_id) });
		_patch_child_end();
		_scope($scope1_id, {
			d: item?.label,
			a: _existing_scope($childScope)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "a1", $scope0_reason, 0);
	_scope($scope0_id, {});
}, 1);
