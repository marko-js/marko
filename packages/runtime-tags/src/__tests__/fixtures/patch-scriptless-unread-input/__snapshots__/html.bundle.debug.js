// tags/card.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<div> </div>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_mark($scope0_id, "#text/0", input.user.name, 1, $scope0_reason, 0)}</div>`);
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)("D l");
const $setup = _shell_setup([[], []], ["#childScope/1>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content; ; ",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template$1)}`,
	"__tests__/template.marko_1*shell": `__tests__/template.marko_1*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${$template$1}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_user3_name = _client_guard($scope0_reason, 7), $wg__input_tag__OR__input_cls = _write_guard($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 2), $ui__input_tag__OR__input_cls = _unfilled_if($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 2), $fg__input_user = _filled_guard($scope0_reason, 3), $fg__input_tag = _filled_guard($scope0_reason, 5), $fg__input_cls = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_user3_name__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ user: input.user });
			_patch_child_end();
			_client_guard($scope0_reason, 3) && _patch_render($scope1_id, "__tests__/template.marko_1_input_user#0:6/setup");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_set_scope_reason(_updates_from($scope0_reason, 4) << 1);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/1", 1);
	card_default({ user: input.user2 });
	_patch_child_end();
	_dynamic_tag($scope0_id, "#text/2", input.tag, { class: input.cls }, 17, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(_text_mark($scope2_id, "#text/0", input.user3.name, 2, $scope0_reason, 7));
		_unfilled_if($scope0_reason, 7) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_user3_name#0:12/subscribe", $cg__input_user3_name);
		_subscribe(_unfilled_if($scope0_reason, 7) && $input_user3_name__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), $cg__input_user3_name && "__tests__/template.marko_2_input_user3_name#0:12/subscribe");
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_user3_name: input.user3?.name }] : []), 0, $wg__input_tag__OR__input_cls, $scope0_reason, 0, 0, 5, void 0, 0, "__tests__/template.marko_2*content");
	$fg__input_user && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "__tests__/template.marko_1_input_user#0:6/setup", "input_user");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_tag#8_input_cls#9/setup", (($fg__input_tag ? " input_tag" : "") + ($fg__input_cls ? " input_cls" : "")).slice(1), $scope0_reason, 0);
	_scope($scope0_id, {
		input_user: _write_if($scope0_reason, 2) && ($ui__input_show || _unfilled_if($scope0_reason, 3)) && input.user,
		input_tag: _write_if($scope0_reason, 6) && $ui__input_tag__OR__input_cls && input.tag,
		input_cls: _write_if($scope0_reason, 5) && $ui__input_tag__OR__input_cls && input.cls,
		input_user3_name: _write_if($scope0_reason, 0) && ($ui__input_tag__OR__input_cls || _unfilled_if($scope0_reason, 7)) && input.user3?.name,
		"#childScope/1": _existing_scope($childScope2),
		"ClosureScopes:input_user3_name/14": _write_if($scope0_reason, 7) && $input_user3_name__closures
	}, "__tests__/template.marko", 0, {
		input_user: ["input.user"],
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_user3_name: ["input.user3.name"]
	}) || ($fg__input_user && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_user", input.user, !_server_guard($scope0_reason, 3)), $fg__input_tag && _unfilled_if($scope0_reason, 6) && _patch_write($scope0_id, "PatchMarkedWrite:input_tag", input.tag, !_server_guard($scope0_reason, 5)), $fg__input_cls && _unfilled_if($scope0_reason, 5) && _patch_write($scope0_id, "PatchMarkedWrite:input_cls", input.cls, !_server_guard($scope0_reason, 6)), _filled_guard($scope0_reason, 7) && (_client_branch_if("__tests__/template.marko_2*content", $scope0_id) || $ui__input_tag__OR__input_cls) && _patch_write($scope0_id, "PatchMarkedWrite:input_user3_name", input.user3?.name, !_server_guard($scope0_reason, 7)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_user3_name#12/subscribers", "input_user3_name"));
}, 1);
