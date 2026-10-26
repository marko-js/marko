// tags/card.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "a", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a2: "a2; ; ",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template)}`)(),
	a1: /*@__PURE__*/ ((_w0) => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_cls = _client_guard($scope0_reason, 6), $cg__input_tag = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_user3_name__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _patch_child($scope1_id, "a");
			card_default({ user: input.user });
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "a0");
			$scope0_page && _scope($scope1_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["a1"], $scope0_reason, 2);
	_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
	const $childScope2 = _patch_child($scope0_id, "b");
	card_default({ user: input.user2 });
	_dynamic_tag($scope0_id, "c", input.tag, { class: input.cls }, _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		const $scope2_page = _page_render();
		_html(_patch_text($scope2_id, "a", input.user3.name, void 0, $scope0_reason, 7));
		_unfilled_if($scope0_reason, 7) && _patch_init($scope2_id, _client_guard($scope0_reason, 7) ? "a3" : "a4");
		$scope2_page && _subscribe(_unfilled_if($scope0_reason, 7) && $input_user3_name__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }));
	}, $scope0_id, ($scope) => $scope0_page ? [{ m: input.user3?.name }] : []), 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0, 0, 5);
	$scope0_page ? _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.user,
		i: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.tag,
		j: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.cls,
		m: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 7)) && input.user3?.name,
		b: _existing_scope($childScope2),
		o: _write_if($scope0_reason, 7) && $input_user3_name__closures
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.user, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_cls && _patch_fill($scope0_id, "va6", input.tag, !_server_guard($scope0_reason, 5)), $cg__input_cls && _content_withhold(input.tag), _filled_guard($scope0_reason, 6) && $cg__input_tag && _patch_fill($scope0_id, "va7", input.cls, !_server_guard($scope0_reason, 6)), $cg__input_tag && _content_withhold(input.cls), _filled_guard($scope0_reason, 7) && _content_withheld("a2", $scope0_id) && _patch_fill($scope0_id, "va8", input.user3?.name, !_server_guard($scope0_reason, 7)));
}, 1);
