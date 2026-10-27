// tags/child/index.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [["b6"], ["b2"]];
_shells({
	b: "b b6!b2;b%b ;<!><!><button>+</button>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_x = _server_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let n = 0;
	_if(() => {
		if (input.more) {
			const $scope1_id = _scope_id();
			_html(`<p>${_patch_text($scope1_id, "a", input.x, void 0, $scope0_reason, 1)}</p>`);
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b0");
			$scope0_page && _scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["b1"], $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_script($scope0_id, "b3");
	$sg__input_x && _patch_effect($scope0_id, "hb3", "f");
	_patch_fill($scope0_id, "vb5", n, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.x,
		g: n
	}) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 0) ? _patch_fill($scope0_id, "vb4", input.x, !$sg__input_x) : _patch_write($scope0_id, "xf", input.x, !$sg__input_x));
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _patch_child($scope1_id, "a", 0);
			child_default({
				x: input.x,
				more: input.more
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.x,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.more
	}) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "va3", input.x, !_server_guard($scope0_reason, 2)), _filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "va4", input.more, !_server_guard($scope0_reason, 3)));
}, 1);
