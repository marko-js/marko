// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<section><!></section>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/wrap.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D%c%;<p><!>:<!></p>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": "__tests__/template.marko_1*content",
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 3), $cg__input_id = _client_guard($scope0_reason, 3), $wi__input_id = _write_if($scope0_reason, 3), $wi__input_show__OR__input_id__OR__input_value = _write_if($scope0_reason, 1), $uf__input_show = _updates_from($scope0_reason, 2), $ui__input_show = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	const $input_value__closures = new Set();
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id(), $ui__input_value = _unfilled_if($scope0_reason, 4);
				_await($scope3_id, "#text/0", input.value, (v) => {
					const $scope4_id = _scope_id();
					_html(`<p>${_text_mark($scope4_id, "#text/0", input.id, 1, $scope0_reason, 3)}:${_text_mark($scope4_id, "#text/1", v, 2, $scope0_reason, 4)}</p>`);
					_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope4_id, "__tests__/template.marko_4_input_id#0:4/subscribe", $cg__input_id);
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_id__closures, _scope($scope4_id, { "ClosureSignalIndex:input_id/6": $wi__input_id && 1 }, "__tests__/template.marko", "3:6"), $cg__input_id && "__tests__/template.marko_4_input_id#0:4/subscribe");
				}, 1, "__tests__/template.marko_4*content", $ui__input_value);
				_unfilled_if($scope0_reason, 4) && _patch_subscribe($scope3_id, "__tests__/template.marko_3_input_value#0:5/subscribe", 1);
				$wi__input_show__OR__input_id__OR__input_value && _subscribe($ui__input_value && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"), _client_guard($scope0_reason, 4) && "__tests__/template.marko_3_input_value#0:5/subscribe", 0);
				$wi__input_show__OR__input_id__OR__input_value && _resume_branch($scope3_id);
			}, () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_mark($scope2_id, "#text/0", input.id, $wg__input_id * 2)}`);
				$cg__input_id && _patch_render($scope2_id, "__tests__/template.marko_2_input_id#0:4/subscribe");
				_subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"), $cg__input_id && "__tests__/template.marko_2_input_id#0:4/subscribe", $wg__input_id);
			}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_3*content");
			_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		input_id: input.id,
		input_value: ($ui__input_show || _unfilled_if($scope0_reason, 4)) && input.value,
		"ClosureScopes:input_id/6": $wi__input_id && $input_id__closures,
		"ClosureScopes:input_value/7": _write_if($scope0_reason, 4) && $input_value__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_id: ["input.id"],
		input_value: ["input.value"]
	}) || (_filled_guard($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_id", input.id, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_id#4/subscribers", "input_id"), _filled_guard($scope0_reason, 4) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_value", input.value, !_server_guard($scope0_reason, 4)) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_value#5/subscribers", "input_value"));
}, 1);
