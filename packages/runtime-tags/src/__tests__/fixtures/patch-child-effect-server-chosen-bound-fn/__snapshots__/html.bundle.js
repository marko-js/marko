// tags/child.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_fn = _filled_guard($scope0_reason, 1), $fg__input_v = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0, ($fg__input_fn || $fg__input_v) && (_client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? 2 : 1), [$fg__input_fn && "c", $fg__input_v && "d"], "b1", $scope0_reason, 0);
	_scope($scope0_id, {
		c: input.fn,
		d: input.v
	}) || ($fg__input_fn && _patch_write($scope0_id, "xc", input.fn, !_server_guard($scope0_reason, 1)), $fg__input_v && _patch_write($scope0_id, "xd", input.v, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("")};${((_w0) => `${_w0}<p> </p>`)("")}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = "none";
	const fa = _resume(function(v) {
		last = "a" + v;
	}, "a0", $scope0_id);
	const fb = _resume(function(v) {
		last = "b" + v;
	}, "a1", $scope0_id);
	_set_scope_reason(_updates_from($scope0_reason, 0) << 1 | _updates_from($scope0_reason, 2) << 3 | _updates_from($scope0_reason, 1) << 5);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		v: input.x,
		fn: input.pick ? fa : fb
	});
	_patch_child_end();
	_html(`<p>${_text_mark($scope0_id, "b", last)}</p>`);
	_scope($scope0_id, {
		h: _unfilled_if($scope0_reason, 2) && fa,
		i: _unfilled_if($scope0_reason, 2) && fb,
		a: _existing_scope($childScope)
	});
}, 1);
