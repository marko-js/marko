// tags/widget/index.marko
const $template$1 = "<p> </p><!><!>";
const $walks$1 = "D l%c";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/widget/index.marko": "__tests__/tags/widget/index.marko;D l%;<p> </p><!><!>" });
var widget_default = _template("__tests__/tags/widget/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</p>`);
	_dynamic_tag($scope0_id, "#text/1", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_scope($scope0_id, {}, "__tests__/tags/widget/index.marko", 0);
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell; ;<div></div>",
	"__tests__/template.marko_2*shell": `__tests__/template.marko_2*shell${_shell_marker([[], []], ["#childScope/0>", $setup$1])};${/*@__PURE__*/ ((_w0) => `/${_w0}&b`)($walks$1)};${/*@__PURE__*/ ((_w0) => `${_w0}<!>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_text = _client_guard($scope0_reason, 6), $cg__input_label = _client_guard($scope0_reason, 5), $wg__input_b = _write_guard($scope0_reason, 4), $wi__input_a__OR__input_b__OR__input_label__OR__input_text = _write_if($scope0_reason, 2), $wg__input_a = _write_guard($scope0_reason, 3), $fg__input_b = _filled_guard($scope0_reason, 4), $fg__input_label = _filled_guard($scope0_reason, 5), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_b = _client_guard($scope0_reason, 4), $fg__input_text = _filled_guard($scope0_reason, 6);
	const $scope0_id = _scope_id();
	const $input_text__closures = new Set();
	const $input_label__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.a) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_if(() => {
				if (input.b) {
					const $scope2_id = _scope_id();
					_set_scope_reason(_updates_from($scope0_reason, 5) << 1);
					const $childScope = _peek_scope_id($scope2_id, "#childScope/0", 0);
					widget_default({
						label: input.label,
						content: _content("__tests__/template.marko_3*content", () => {
							const $scope3_reason = _scope_reason();
							const $scope3_id = _scope_id();
							_html(`<em>${_text_mark($scope3_id, "#text/0", input.text, 1, $scope0_reason, 6)}</em>`);
							$cg__input_text && _patch_render($scope3_id, "__tests__/template.marko_3_input_text#0:6/subscribe");
							_subscribe(_unfilled_if($scope0_reason, 6) && $input_text__closures, _scope($scope3_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope2_id) }, "__tests__/template.marko", "5:10"), $cg__input_text && "__tests__/template.marko_3_input_text#0:6/subscribe");
						}, $scope2_id, 0)
					});
					_patch_child_end();
					_unfilled_if($scope0_reason, 5) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_label#0:5/subscribe", $cg__input_label);
					_subscribe(_unfilled_if($scope0_reason, 5) && $input_label__closures, _scope($scope2_id, {
						_: $wi__input_a__OR__input_b__OR__input_label__OR__input_text && _scope_with_id($scope1_id),
						"#childScope/0": _existing_scope($childScope)
					}, "__tests__/template.marko", "4:8"), $cg__input_label && "__tests__/template.marko_2_input_label#0:5/subscribe", 0);
					_resume_branch($scope2_id);
					return 0;
				}
			}, $scope1_id, "#div/0", 1, $wg__input_b, 1, 0, 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 4);
			_html(`</div>${_el_mark($scope1_id, "#div/0", $wg__input_b)}`);
			$cg__input_b && _patch_render($scope1_id, "__tests__/template.marko_1_input_b#0:4/setup");
			$wi__input_a__OR__input_b__OR__input_label__OR__input_text && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_a, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 3);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_a)}`);
	$fg__input_b && $cg__input_a && _patch_render($scope0_id, "__tests__/template.marko_1_input_b#0:4/setup", "input_b");
	$fg__input_label && ($cg__input_a || $cg__input_b) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_label#5/subscribers", "input_label");
	$fg__input_text && ($cg__input_a || $cg__input_b) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_text#6/subscribers", "input_text");
	_scope($scope0_id, {
		input_b: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && input.b,
		input_label: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 5)) && input.label,
		input_text: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 6)) && input.text,
		"ClosureScopes:input_text/9": _write_if($scope0_reason, 6) && (_unfilled_if($scope0_reason, 6) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && $input_text__closures,
		"ClosureScopes:input_label/8": _write_if($scope0_reason, 5) && (_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 4)) && $input_label__closures
	}, "__tests__/template.marko", 0, {
		input_b: ["input.b"],
		input_label: ["input.label"],
		input_text: ["input.text"]
	}) || ($fg__input_b && _unfilled_if($scope0_reason, 3) && _patch_write($scope0_id, "PatchMarkedWrite:input_b", input.b, !_server_guard($scope0_reason, 4)), $fg__input_label && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_label", input.label, !_server_guard($scope0_reason, 5)), $fg__input_text && _unfilled_if($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_text", input.text, !_server_guard($scope0_reason, 6)));
}, 1);
