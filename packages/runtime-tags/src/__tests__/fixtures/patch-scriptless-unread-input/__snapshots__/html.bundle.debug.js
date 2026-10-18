// tags/card.marko
const $template$1 = "<div> </div>";
const $walks$1 = "D l";
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko;D ;<div> </div>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<div>${_patch_text($scope0_id, "#text/0", input.user.name, void 0, $scope0_reason, 0)}</div>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b%b/${_w0}&%c`)("D l");
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content,",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko !;${((_w0) => `b%b/${_w0}&%c`)("D l")};${((_w0) => `<!><!>${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell;${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_user3_name__closures = new Set();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 3) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0");
			card_default({ user: input.user });
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 2);
	_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
	const $childScope2 = _patch_child($scope0_id, "#childScope/1");
	card_default({ user: input.user2 });
	_dynamic_tag($scope0_id, "#text/2", input.tag, { class: input.cls }, _content_resume("__tests__/template.marko_2*content", () => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_html(_patch_text($scope2_id, "#text/0", input.user3.name, void 0, $scope0_reason, 7));
		_unfilled_if($scope0_reason, 7) && _patch_init($scope2_id, "__tests__/template.marko_2_input_user3_name#0:12/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 7) && $input_user3_name__closures, _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"));
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_user3_name: input.user3?.name }] : []), 0, _write_guard($scope0_reason, 0), void 0, 1, $scope0_reason, 0);
	_patch_write($scope0_id, "PatchWrite:input_tag", input.tag, 1);
	_patch_write($scope0_id, "PatchWrite:input_cls", input.cls, 1);
	$scope0_page ? _scope($scope0_id, {
		input_user: _unfilled_if($scope0_reason, 2) && input.user,
		input_tag: (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 0)) && input.tag,
		input_cls: (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && input.cls,
		input_user3_name: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 7)) && input.user3?.name,
		"#childScope/1": _existing_scope($childScope2),
		"ClosureScopes:input_user3_name/14": _write_if($scope0_reason, 7) && $input_user3_name__closures
	}, "__tests__/template.marko", 0, {
		input_user: ["input.user"],
		input_tag: ["input.tag"],
		input_cls: ["input.cls"],
		input_user3_name: ["input.user3.name"]
	}) : (_filled_guard($scope0_reason, 3) && _client_guard($scope0_reason, 2) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill0", input.user, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 7) && _content_withheld("__tests__/template.marko_2*content", $scope0_id) && _patch_value($scope0_id, "PatchValue:__tests__/template.marko_fill1", input.user3?.name, !_server_guard($scope0_reason, 7)));
}, 1);
