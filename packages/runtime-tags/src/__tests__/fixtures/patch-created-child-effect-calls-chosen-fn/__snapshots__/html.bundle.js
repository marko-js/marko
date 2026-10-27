// tags/child.marko
const $template = "<span> </span>";
const $setup = [[], []];
_shells({ b: "b;D ;<span> </span>" });
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 1)}</span>`);
	_script($scope0_id, "b0");
	_filled_guard($scope0_reason, 0) && _patch_effect($scope0_id, _client_guard($scope0_reason, 0) ? "hb0" : "eb0", "d");
	$scope0_page ? _scope($scope0_id, { d: input.fn }) : _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.fn, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({
	a: "a !;D%bD ;<main><!><p> </p></main>",
	a4: /*@__PURE__*/ ((_w0) => `a4${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let flag = 0;
	const fa = _resume(function() {
		flag = 1;
		const m = document.querySelector("main");
		m.dataset.a = String(+(m.dataset.a || 0) + 1);
	}, "a0", $scope0_id);
	const fb = _resume(function() {
		flag = 2;
		const m = document.querySelector("main");
		m.dataset.b = String(+(m.dataset.b || 0) + 1);
	}, "a1", $scope0_id);
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1 | _mask_group($scope0_reason, 3) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			child_default({
				label: input.x,
				fn: input.pick ? fa : fb
			});
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a2");
			_client_guard($scope0_reason, 4) && _patch_init($scope1_id, "a3");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a4"], $scope0_reason, 2);
	_html(`<p>${_text_resume($scope0_id, "b", flag)}</p></main>`);
	$scope0_page ? _scope($scope0_id, {
		f: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.x,
		g: _unfilled_if($scope0_reason, 2) && input.pick,
		i: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && fa,
		j: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && fb
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va5", input.x, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && $cg__input_show && _patch_fill($scope0_id, "va6", input.pick, !_server_guard($scope0_reason, 4)));
}, 1);
