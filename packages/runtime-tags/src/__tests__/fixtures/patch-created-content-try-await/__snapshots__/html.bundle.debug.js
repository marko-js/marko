// tags/wrap.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;b%;<!><!><!>",
	"__tests__/tags/wrap.marko_1*shell": "__tests__/tags/wrap.marko_1*shell;D%;<section><!></section>"
});
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $scope0_page = _page_render(), $wg__input_show = _write_guard($scope0_reason, 1), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/tags/wrap.marko_1_input_content#0:4/init");
			$scope0_page && _write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/wrap.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/tags/wrap.marko_1*shell"], $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { input_content: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/wrap.marko", 0, { input_content: ["input.content"] }) : (_filled_guard($scope0_reason, 2) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 2)), $cg__input_show && _content_withhold(input.content));
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
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 3), $wi__input_id = _write_if($scope0_reason, 3), $wi__input_show__OR__input_id__OR__input_value = _write_if($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_id__closures = new Set();
	const $input_value__closures = new Set();
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1 | _mask_group($scope0_reason, 2) << 3);
	const $childScope = _patch_child($scope0_id, "#childScope/0", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason(), $scope1_page = _page_render();
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_await($scope3_id, "#text/0", input.value, (v) => {
					const $scope4_id = _scope_id();
					_html(`<p>${_patch_text($scope4_id, "#text/0", input.id, void 0, $scope0_reason, 3)}:${_patch_text($scope4_id, "#text/1", v, 2, $scope0_reason, 4)}</p>`);
					_unfilled_if($scope0_reason, 3) && _patch_init($scope4_id, _client_guard($scope0_reason, 3) ? "__tests__/template.marko_4_input_id#0:4/init" : "__tests__/template.marko_4_input_id#0:4/subscribe");
					$scope1_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_id__closures, _scope($scope4_id, { "ClosureSignalIndex:input_id/6": $wi__input_id && 1 }, "__tests__/template.marko", "3:6"));
				}, 1, "__tests__/template.marko_4*content");
				_unfilled_if($scope0_reason, 4) && _patch_init($scope3_id, _client_guard($scope0_reason, 4) ? "__tests__/template.marko_3_input_value#0:5/init" : "__tests__/template.marko_3_input_value#0:5/subscribe");
				$scope1_page && $wi__input_show__OR__input_id__OR__input_value && _subscribe(_unfilled_if($scope0_reason, 4) && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4"));
				$wi__input_show__OR__input_id__OR__input_value && _resume_branch($scope3_id);
			}, () => {
				const $scope2_reason = _scope_reason(), $scope2_page = _page_render();
				const $scope2_id = _scope_id();
				_html(`loading ${_text_resume($scope2_id, "#text/0", input.id, $wg__input_id * 2)}`);
				$scope2_page && _subscribe($wi__input_id && $input_id__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "6:6"));
				$wg__input_id || _resume_branch($scope2_id);
			}, void 0, "__tests__/template.marko_2*content", void 0, "__tests__/template.marko_3*content");
			$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2");
		}, $scope0_id)
	});
	_patch_child_end();
	$scope0_page ? _scope($scope0_id, {
		input_id: input.id,
		input_value: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && input.value,
		"ClosureScopes:input_id/6": $wi__input_id && $input_id__closures,
		"ClosureScopes:input_value/7": _write_if($scope0_reason, 4) && $input_value__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_id: ["input.id"],
		input_value: ["input.value"]
	}) : (_filled_guard($scope0_reason, 3) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.id, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 2) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.value, !_server_guard($scope0_reason, 4)));
}, 1);
