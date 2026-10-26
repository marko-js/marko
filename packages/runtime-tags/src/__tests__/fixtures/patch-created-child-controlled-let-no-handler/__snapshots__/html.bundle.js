// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3 !b0; D ;<button> </button>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 1;
			_html(`<button>${_text_resume($scope1_id, "b", count)}</button>${_el_resume($scope1_id, "a")}`);
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
			const $countChange = input.on || void 0;
			_patch_let_change($scope1_id, "vb2", count, "wd", $countChange, $scope0_reason, 1, 1);
			$scope0_page && _scope($scope1_id, {
				c: count,
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.on }) : _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.on, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		show: input.show,
		on: input.on
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
