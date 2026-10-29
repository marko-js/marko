// tags/child.marko
const $template = "<button class=set>set</button><p> </p>";
const $walks = " bD l";
const $setup = [[], ["b0"]];
_shells({ b: "b !b0; bD ;<button class=set>set</button><p> </p>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_data = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let value = input.data;
	let n = 1;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}<p>${_text_resume($scope0_id, "b", value + n, 1, $cg__input_data << 1, 0, 1)}</p>`);
	_script($scope0_id, "b0");
	_patch_write($scope0_id, "wg", n, 1);
	$cg__input_data && _patch_init($scope0_id, "b1");
	_scope($scope0_id, { g: n });
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks)};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({ data: input.label });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.label, !_server_guard($scope0_reason, 1));
}, 1);
