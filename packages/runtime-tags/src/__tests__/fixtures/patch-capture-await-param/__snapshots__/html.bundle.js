// tags/label.marko
const $template = "<output></output>";
const $setup = [[], []];
_shells({ b: "b; ;<output></output>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<output></output>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.get }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.get, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template),
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template),
	a: "a;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.v, (value) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "xc", value, !_server_guard($scope0_reason, 0));
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _patch_child($scope1_id, "a");
		label_default({ get: _bind_resume(function() {
			return value;
		}, "a0", $scope1_id) });
		$scope0_page && _scope($scope1_id, {
			c: value,
			a: _existing_scope($childScope)
		});
	}, 1, "a1", 1);
}, 1);
