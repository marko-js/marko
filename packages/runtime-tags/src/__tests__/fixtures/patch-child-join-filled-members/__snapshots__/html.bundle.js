// tags/child.marko
const $template = "<p> </p><!><!>";
const $walks = "D l%c";
const $setup$1 = [[], []];
_shells({
	b: "b !;D l%;<p> </p><!><!>",
	b2: "b2;D%c%;<em><!>|<!></em>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_b = _client_guard($scope0_reason, 4), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	_html(`<p>${_patch_text($scope0_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</p>`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.a, void 0, $scope0_reason, 3)}|${_patch_text($scope1_id, "b", input.b, 2, $scope0_reason, 4)}</em>`);
			$cg__input_a && _patch_init($scope1_id, "b0");
			$cg__input_b && _patch_init($scope1_id, "b1");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["b2"], $scope0_reason, 5);
	_patch_join_init($scope0_id, "b5", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && "e", _filled_guard($scope0_reason, 4) && "f");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.a,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.b
	}) : (_filled_guard($scope0_reason, 3) && ($cg__input_b || $cg__input_show) && _patch_fill($scope0_id, "vb3", input.a, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && ($cg__input_a || $cg__input_show) && _patch_fill($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 4)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	let s = true;
	_set_scope_reason(2286 | _mask_group($scope0_reason, 1) << 9);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: n,
		b: input.x,
		show: s
	});
	_set_scope_reason(158 | (_mask_group($scope0_reason, 0) << 5 | _mask_group($scope0_reason, 1) << 9 | _mask_group($scope0_reason, 2) << 11));
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: n,
		b: input.x,
		show: input.show
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		i: n,
		j: s,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
