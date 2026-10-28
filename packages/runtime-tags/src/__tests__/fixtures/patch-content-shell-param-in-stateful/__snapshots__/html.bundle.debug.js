// tags/note.marko
const $template$2 = "<i>note</i>";
const $walks$2 = "b";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/note.marko": "__tests__/tags/note.marko,<i>note</i>" });
var note_default = _template("__tests__/tags/note.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html("<i>note</i>");
});

// tags/wrap.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !;D%;<section><!></section>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content__OR__input_label = _write_guard($scope0_reason, 0), $cg__input_label = _client_guard($scope0_reason, 2), $cg__input_content = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, { label: input.label }, 1, 0, 0, $wg__input_content__OR__input_label, $scope0_reason, 0, 0, 1);
	_html("</section>");
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "__tests__/tags/wrap.marko_0_input_content#3_input_label#4/init");
	_scope($scope0_id, {
		input_content: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.content,
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.label
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		input_label: ["input.label"]
	}) || (_filled_guard($scope0_reason, 1) && $cg__input_label && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 1)), $cg__input_label && _content_withhold(input.content), _filled_guard($scope0_reason, 2) && $cg__input_content && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill1", input.label, !_server_guard($scope0_reason, 2)), $cg__input_content && _content_withhold(input.label));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_2*content": /*@__PURE__*/ (() => `__tests__/template.marko_2*content${_shell_marker(_shell_setup([[], ["__tests__/template.marko_2"]], ["#childScope/2>", $setup$2]))}`)(),
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0), $cg__input_show = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 1) << 5);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/0", 1);
			wrap_default({
				label: input.label,
				content: attrTag({ content: _content_resume("__tests__/template.marko_2*content", ({ label }) => {
					const $scope2_reason = _scope_reason(), $wg__label = _write_guard($scope2_reason, 0);
					const $scope2_id = _scope_id();
					_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill1", label);
					let open = true;
					_if(() => {
						if (open) {
							const $scope3_id = _scope_id();
							_html(`<p>${_text_resume($scope3_id, "#text/0", label, $wg__label)}</p>`);
							_scope($scope3_id, {}, "__tests__/template.marko", "5:8");
							return 0;
						}
					}, $scope2_id, "#text/0", 1, 1, 0, 0, 1);
					_html(`<button>toggle</button>${_el_resume($scope2_id, "#button/1")}`);
					const $childScope = _peek_scope_id($scope2_id, "#childScope/2", 0);
					note_default({});
					_patch_child_end();
					_script($scope2_id, "__tests__/template.marko_2");
					_patch_fill($scope2_id, "PatchFill:__tests__/template.marko_fill2", open, 1);
					_scope($scope2_id, {
						label,
						open,
						"#childScope/2": _existing_scope($childScope)
					}, "__tests__/template.marko", "3:6", {
						label: "3:17",
						open: "4:12"
					});
				}, $scope1_id, void 0, 1) })
			});
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:4/init");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, { input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.label }, "__tests__/template.marko", 0, { input_label: ["input.label"] }) || (_filled_guard($scope0_reason, 1) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 1)), $cg__input_show && _content_withhold(input.label));
}, 1);
