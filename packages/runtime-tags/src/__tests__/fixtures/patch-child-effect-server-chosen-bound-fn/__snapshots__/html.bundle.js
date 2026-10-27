// tags/child.marko
const $setup$1 = [[], []];
_shells({ b: "b," });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_script($scope0_id, "b0", 0);
	(_filled_guard($scope0_reason, 1) || _filled_guard($scope0_reason, 2)) && _patch_effect($scope0_id, _client_guard($scope0_reason, 1) || _client_guard($scope0_reason, 2) ? "hb0" : "eb0", _filled_guard($scope0_reason, 1) && "c", _filled_guard($scope0_reason, 2) && "d");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b1");
	$scope0_page ? _scope($scope0_id, {
		c: input.fn,
		d: input.v
	}) : (_filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xc", input.fn, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xd", input.v, !_server_guard($scope0_reason, 2)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&D l`)("")};${((_w0) => `${_w0}<p> </p>`)("")}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let last = "none";
	const fa = _resume(function(v) {
		last = "a" + v;
	}, "a0", $scope0_id);
	const fb = _resume(function(v) {
		last = "b" + v;
	}, "a1", $scope0_id);
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 3 | _mask_group($scope0_reason, 1) << 5);
	const $childScope = _patch_child($scope0_id, "a", 0);
	child_default({
		v: input.x,
		fn: input.pick ? fa : fb
	});
	_patch_child_end();
	_html(`<p>${_text_resume($scope0_id, "b", last)}</p>`);
	$scope0_page && _scope($scope0_id, {
		h: _unfilled_if($scope0_reason, 2) && fa,
		i: _unfilled_if($scope0_reason, 2) && fb,
		a: _existing_scope($childScope)
	});
}, 1);
