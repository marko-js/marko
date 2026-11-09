// tags/card.marko
const $template$1 = "<!><!><button>+</button>";
const $walks$1 = "b%b b";
const $setup$1 = [[], ["__tests__/tags/card.marko_0"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0;b%b ;<!><!><button>+</button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = input.open;
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_html("<div");
			_attrs_content(input, "#div/0", $scope1_id, "div", 0);
			_html(`</div>${_el_mark($scope1_id, "#div/0")}`);
			_script($scope1_id, "__tests__/tags/card.marko_1_input#0:3");
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/tags/card.marko_1_input#0:3/setup");
			_scope($scope1_id, {}, "__tests__/tags/card.marko", "2:2", { "EventAttributes:#div/0": ["...input", "3:11"] });
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0");
	$fg__input && _patch_render($scope0_id, "__tests__/tags/card.marko_1_input#0:3/setup", "input");
	_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/card.marko_0_open#5/fill", open, 1);
	_scope($scope0_id, {
		input,
		open
	}, "__tests__/tags/card.marko", 0, {
		input: 0,
		open: "1:6"
	}) || $fg__input && _patch_write($scope0_id, "PatchMarkedWrite:input", input, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1);
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({ "__tests__/template.marko": `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `b/${_w0}&`)($walks$1)};${((_w0) => `<!>${_w0}`)($template$1)}` });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 1), $cg__input_note = _client_guard($scope0_reason, 1), $uf__input_open = _updates_from($scope0_reason, 0), $fg__input_note = _filled_guard($scope0_reason, 1), $wi__input_note = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	_set_scope_reason($uf__input_open << 1 | $uf__input_open << 3);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	card_default({
		open: input.open,
		content: _content_resume("__tests__/template.marko_1*content", () => {
			const $scope1_reason = _scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "#text/0", input.note, $wg__input_note)}</em>`);
			$cg__input_note && _patch_render($scope1_id, "__tests__/template.marko_1_input_note#0:4/subscribe");
			_subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "1:2"), $cg__input_note && "__tests__/template.marko_1_input_note#0:4/subscribe", $wg__input_note);
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_note && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_note#4/subscribers", "input_note");
	_scope($scope0_id, {
		input_note: input.note,
		"ClosureScopes:input_note/5": $wi__input_note && $input_note__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { input_note: ["input.note"] }) || $fg__input_note && _patch_write($scope0_id, "PatchMarkedWrite:input_note", input.note, !_server_guard($scope0_reason, 1));
}, 1);
