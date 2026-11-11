// tags/card.marko
const $template = "<div> </div>";
const $setup$1 = [[], []];
_shells({ b: "b;D ;<div> </div>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "a", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["b>", $setup$1]);
_shells({
	a2: "a2; ; ",
	a: `a${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template)}`,
	a1: `a1${_shell_marker([[], []], ["a>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_user3_name = _client_guard($scope0_reason, 7), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_tag__OR__input_cls = _unfilled_if($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_user = _filled_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 5), $fg__input_cls = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_user3_name__closures = /* @__PURE__ */ new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ user: input.user });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 2);
	_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "b", 1);
	card_default({ user: input.user2 });
	_patch_child_end();
	_dynamic_tag($scope0_id, "c", input.tag, { class: input.cls }, 17, _content_resume("a2", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(_text_mark($scope2_id, "a", input.user3.name, 2, $scope0_reason, 7));
		_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope2_id, "a3", $cg__input_user3_name);
		_subscribe(_unfilled_if($scope0_reason, 7) && $input_user3_name__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }), $cg__input_user3_name && "a3");
	}, $scope0_id, ($scope) => $scope0_page ? [{ m: input.user3?.name }] : []), 0, $wg__input_tag__OR__input_cls, $scope0_reason, 0, 0, 5, void 0, 0, "a2");
	$fg__input_user && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "a0", "g");
	_patch_render($scope0_id, "a5", (($fg__input_tag ? " i" : "") + ($fg__input_cls ? " j" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		g: _write_if($scope0_reason, 2) && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.user,
		i: _write_if($scope0_reason, 6) && $ui__input_tag__OR__input_cls && input.tag,
		j: _write_if($scope0_reason, 5) && $ui__input_tag__OR__input_cls && input.cls,
		m: _write_if($scope0_reason, 0) && ($ui__input_tag__OR__input_cls || _unfilled_if($scope0_reason, 7)) && input.user3?.name,
		b: _existing_scope($childScope2),
		o: _write_if($scope0_reason, 7) && $input_user3_name__closures
	}) || ($fg__input_user && $ui__input_show && _patch_write($scope0_id, "xg", input.user, !_server_guard($scope0_reason, 3)), $fg__input_tag && _unfilled_if($scope0_reason, 6) && _patch_write($scope0_id, "xi", input.tag, !_server_guard($scope0_reason, 5)), $fg__input_cls && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "xj", input.cls, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 7) && (_client_branch_if("a2", $scope0_id) || $ui__input_tag__OR__input_cls) && _patch_write($scope0_id, "xm", input.user3?.name, !_server_guard($scope0_reason, 7)) && _patch_subscribers($scope0_id, "a4", "m"));
}, 1);
