// tags/card.marko
const $template = "<p> </p>";
const $setup = [[], []];
_shells({ b: "b;D ;<p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const f = input.opts.fn;
	_html(`<p>${_patch_text($scope0_id, "a", f(), void 0, (_mask_group($scope0_reason, 0) & 1) << 1, 0)}</p>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a2: /*@__PURE__*/ ((_w0) => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $sg__input_label = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.label, !$sg__input_label);
	const opts = { fn: _bind_resume(function() {
		return "f:" + input.label;
	}, "a0", $scope0_id) };
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({ opts: _patch_live($childScope, opts, $scope1_id, ">d") });
			_client_guard($scope0_reason, 0) && _patch_init($scope1_id, "a1");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.label,
		f: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && opts
	}) : _filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", opts, !$sg__input_label);
}, 1);
