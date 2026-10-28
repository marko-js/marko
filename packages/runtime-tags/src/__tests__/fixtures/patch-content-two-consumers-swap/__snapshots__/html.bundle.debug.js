// tags/card/index.marko
const $template$1 = "<section><h2> </h2><!></section>";
const $walks$1 = "E l%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_resume($scope0_id, "#text/0", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}<!></main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&%l`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&%l`)($walks$1)};${((_w0) => `<main>${_w0}<!></main>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_2*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)($walks$1)};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 3), $wi__input_note = _write_if($scope0_reason, 3), $cg__input_show = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 2) << 1);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		title: input.t1,
		content: _content("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "#text/0", input.note, void 0, $scope0_reason, 3)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope1_id, { _: $wi__input_note && _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4"), $cg__input_note && "__tests__/template.marko_1_input_note#0:5/subscribe");
		}, $scope0_id)
	});
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 5) << 1);
			const $childScope2 = _peek_scope_id($scope2_id, "#childScope/0", 1);
			card_default({
				title: input.t2,
				content: _content_elide("__tests__/template.marko_3*content", () => {
					const $scope3_reason = _scope_reason();
					const $scope3_id = _scope_id();
					_html(`<em>${_text_resume($scope3_id, "#text/0", input.note, void 0, $scope0_reason, 3)}</em>`);
					$cg__input_note && _patch_init($scope3_id, "__tests__/template.marko_3_input_note#0:5/init");
					_subscribe(_unfilled_if($scope0_reason, 3) && $input_note__closures, _scope($scope3_id, {
						_: _write_if($scope0_reason, 0) && _scope_with_id($scope2_id),
						"ClosureSignalIndex:input_note/8": $wi__input_note && 1
					}, "__tests__/template.marko", "6:6"));
				}, $scope2_id)
			});
			_patch_child_end();
			_client_guard($scope0_reason, 5) && _patch_init($scope2_id, "__tests__/template.marko_2_input_t2#0:7/init");
			_scope($scope2_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 4), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 4);
	_html("</main>");
	_scope($scope0_id, {
		input_note: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 3)) && input.note,
		input_t2: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 5)) && input.t2,
		"ClosureScopes:input_note/8": $wi__input_note && _unfilled_if($scope0_reason, 3) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		input_t2: ["input.t2"]
	}) || (_filled_guard($scope0_reason, 3) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.note, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_show && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.t2, !_server_guard($scope0_reason, 5)));
}, 1);
