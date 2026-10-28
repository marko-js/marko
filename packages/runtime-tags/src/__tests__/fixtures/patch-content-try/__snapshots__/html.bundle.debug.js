// tags/card/index.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D%;<section><!></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_5*content": "__tests__/template.marko_5*content,loading",
	"__tests__/template.marko_4*content": "__tests__/template.marko_4*content;D ;<em> </em>",
	"__tests__/template.marko_3_#text#0/await": "__tests__/template.marko_3_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;b%;<!><!><!>",
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko": "__tests__/template.marko !; ;<main></main>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_value = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_value = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $wi__input_value = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_value__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_try($scope2_id, "#text/0", () => {
					const $scope3_reason = _scope_reason();
					const $scope3_id = _scope_id();
					_await($scope3_id, "#text/0", Promise.resolve(input.value), () => {
						const $scope4_id = _scope_id();
						_html(`<em>${_text_resume($scope4_id, "#text/0", input.value, 1, $scope0_reason, 2)}</em>`);
						$cg__input_value && _patch_init($scope4_id, "__tests__/template.marko_4_input_value#0:4/init");
						_subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope4_id, { "ClosureSignalIndex:input_value/5": $wi__input_value && 1 }, "__tests__/template.marko", "5:10"));
					}, 1, "__tests__/template.marko_4*content");
					$cg__input_value && _patch_init($scope3_id, "__tests__/template.marko_3_input_value#0:4/init");
					$wi__input_show__OR__input_value && _subscribe(_unfilled_if($scope0_reason, 2) && $input_value__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "4:8"));
					$wi__input_show__OR__input_value && _resume_branch($scope3_id);
				}, () => {
					const $scope5_reason = _scope_reason();
					const $scope5_id = _scope_id();
					_html("loading");
				}, void 0, "__tests__/template.marko_5*content", void 0, "__tests__/template.marko_3*content", void 0, void 0, 2);
				$wi__input_show__OR__input_value && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "3:6");
			}, $scope1_id, 1) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_value && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_resume($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_value: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.value,
		"ClosureScopes:input_value/5": $wi__input_value && _unfilled_if($scope0_reason, 2) && $input_value__closures
	}, "__tests__/template.marko", 0, { input_value: ["input.value"] }) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.value, !_server_guard($scope0_reason, 2));
}, 1);
