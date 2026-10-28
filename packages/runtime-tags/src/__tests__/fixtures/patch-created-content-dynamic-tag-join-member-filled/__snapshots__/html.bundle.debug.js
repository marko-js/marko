// tags/one.marko
const $template$3 = "<i>one <!></i>";
const $walks$3 = "Db%l";
const $setup$3 = [[], []];
_shells({ "__tests__/tags/one.marko": "__tests__/tags/one.marko;Db%;<i>one <!></i>" });
var one_default = _template("__tests__/tags/one.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>one ${_text_resume($scope0_id, "#text/0", input.id, 2, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {}, "__tests__/tags/one.marko", 0);
});

// tags/two.marko
const $template$2 = "<b>two <!></b>";
const $walks$2 = "Db%l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/two.marko": "__tests__/tags/two.marko;Db%;<b>two <!></b>" });
var two_default = _template("__tests__/tags/two.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>two ${_text_resume($scope0_id, "#text/0", input.id, 2, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {}, "__tests__/tags/two.marko", 0);
});

// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<section><!></section>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/init");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	_scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) || (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<p> </p>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 4), $wi__input_id = _write_if($scope0_reason, 4), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 1), $cg__input_id = _client_guard($scope0_reason, 4), $cg__input_show = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	const $input_which__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 1);
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.which ? one_default : two_default, { id: input.id }, 5, 0, 0, $wg__input_which__OR__input_id, $scope0_reason, 1);
			_try($scope1_id, "#text/1", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_html(`<p>${_text_resume($scope3_id, "#text/0", input.id, 1, $scope0_reason, 4)}</p>`);
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, $cg__input_id ? "__tests__/template.marko_3_input_id#0:5/init" : "__tests__/template.marko_3_input_id#0:5/subscribe");
				_subscribe(_unfilled_if($scope0_reason, 4) && $input_id__closures, _scope($scope3_id, {
					_: _write_if($scope0_reason, 0) && _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_id/7": $wi__input_id && 2
				}, "__tests__/template.marko", "5:4"));
			}, () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_resume($scope2_id, "#text/0", input.id, $wg__input_id * 2)}`);
				_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					"ClosureSignalIndex:input_id/7": $wi__input_id && 1
				}, "__tests__/template.marko", "7:6"));
				$wg__input_id || _resume_branch($scope2_id);
			}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_3*content");
			(_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_which#0:4/subscribe");
			(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && _patch_init($scope1_id, "__tests__/template.marko_1_input_id#0:5/subscribe");
			_patch_init_entry($scope1_id, "__tests__/template.marko_1_input_which#0:4_input_id#0:5/init", [_filled_guard($scope0_reason, 3) && ">input_which", _filled_guard($scope0_reason, 4) && ">input_id"], $scope0_reason, 1);
			_subscribe(_unfilled_if($scope0_reason, 4) && $input_id__closures, _subscribe(_unfilled_if($scope0_reason, 3) && $input_which__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2")));
			$wg__input_which__OR__input_id || _resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_filled_guard($scope0_reason, 3) && $cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0/unpatched", input.which) : _filled_guard($scope0_reason, 3) && $cg__input_id && _patch_write($scope0_id, "PatchMarkedWrite:input_which", input.which);
	_scope($scope0_id, {
		input_which: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.which,
		input_id: input.id,
		"ClosureScopes:input_id/7": $wi__input_id && $input_id__closures,
		"ClosureScopes:input_which/6": _write_if($scope0_reason, 3) && $input_which__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_which: ["input.which"],
		input_id: ["input.id"]
	}) || (_filled_guard($scope0_reason, 4) && ($cg__input_show ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1/unpatched", input.id) : _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.id, !_server_guard($scope0_reason, 4))), _client_guard($scope0_reason, 3) && _content_withhold(input.id));
}, 1);
