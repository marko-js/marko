// box.marko
const $template$2 = "<div><!></div>";
const $walks$2 = "D%l";
const $setup$2 = [[], []];
_shells({ "__tests__/box.marko": "__tests__/box.marko;D%;<div><!></div>" });
var box_default = _template("__tests__/box.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {}, "__tests__/box.marko", 0);
});

// tags/card/index.marko
const $template$1 = "<section></section>";
const $walks$1 = " b";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko; ;<section></section>",
	"__tests__/tags/card/index.marko_1*shell": "__tests__/tags/card/index.marko_1*shell;b%;<!><!><!>"
});
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_html("<section>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "__tests__/tags/card/index.marko_1_input_content#0:4/setup");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) }, "__tests__/tags/card/index.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#section/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/tags/card/index.marko_1*shell"], $scope0_reason, 1);
	_html(`</section>${_el_mark($scope0_id, "#section/0", $wg__input_show)}`);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "__tests__/tags/card/index.marko_1_input_content#0:4/setup", "input_content");
	_scope($scope0_id, { input_content: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.content }, "__tests__/tags/card/index.marko", 0, { input_content: ["input.content"] }) || $fg__input_content && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_content", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<main>${_w0}</main>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `D/${_w0}&l`)(" b");
const $Box_withLoadAssets = withLoadAssets(() => box_default, "__tests__/box.marko", flush, "ready:__tests__/box.marko");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;D ;<em> </em>",
	"__tests__/template.marko_1*content": `__tests__/template.marko_1*content${_shell_marker([[], []], ["#childScope/1>", $setup$2])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&b`)("D%l")};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}<!>`)($template$2)}`,
	"__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)(" b")};${((_w0) => `<main>${_w0}</main>`)($template$1)}`
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 2), $wi__input_show__OR__input_note = _write_if($scope0_reason, 0), $uf__input_show = _updates_from($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_note = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_html("<main>");
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	card_default({
		show: input.show,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/1", 0);
			$Box_withLoadAssets({ content: _content("__tests__/template.marko_2*content", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id();
				_html(`<em>${_text_mark($scope2_id, "#text/0", input.note, 1, $scope0_reason, 2)}</em>`);
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_note#0:4/subscribe", $cg__input_note);
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_note__closures, _scope($scope2_id, { _: $wi__input_show__OR__input_note && _scope_with_id($scope1_id) }, "__tests__/template.marko", "5:6"), $cg__input_note && "__tests__/template.marko_2_input_note#0:4/subscribe");
			}, $scope1_id, 0) });
			_patch_child_end();
			_scope($scope1_id, {
				_: $wi__input_show__OR__input_note && _scope_with_id($scope0_id),
				"#childScope/1": _existing_scope($childScope)
			}, "__tests__/template.marko", "4:4");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	$fg__input_note && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#4/subscribers", "input_note");
	_scope($scope0_id, {
		input_note: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.note,
		"ClosureScopes:input_note/5": _write_if($scope0_reason, 2) && $input_note__closures,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || $fg__input_note && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 2));
}, 1);
