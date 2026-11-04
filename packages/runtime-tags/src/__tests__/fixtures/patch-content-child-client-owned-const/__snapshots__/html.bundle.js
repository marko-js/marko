// tags/card/index.marko
const $template = "<section><h2> </h2><!><button>+</button></section>";
const $walks = "E l%b l";
const $setup$1 = [[], ["b1"]];
_shells({ b: "b !b1;E l%b ;<section><h2> </h2><!><button>+</button></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<section><h2>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h2>`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b");
	_html(`<button>+</button>${_el_mark($scope0_id, "c")}</section>`);
	_script($scope0_id, "b1");
	$fg__input_content && _patch_render($scope0_id, "b0", "g");
	_patch_fill($scope0_id, "vb2", open, 1);
	_scope($scope0_id, {
		g: input.content,
		h: open
	}) || $fg__input_content && _patch_write($scope0_id, "xg", input.content, !_server_guard($scope0_reason, 1));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)($walks)};${((_w0) => `<main>${_w0}</main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 0), $cg__input_note = _client_guard($scope0_reason, 0), $wi__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("a1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_mark($scope1_id, "a", input.note, $wg__input_note)}</em>`);
		$cg__input_note && _patch_render($scope1_id, "a0");
		_subscribe($wi__input_note && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_note && "a0", $wg__input_note);
	}, $scope0_id) });
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		d: input.note,
		e: $wi__input_note && $input_note__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.note, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a2", "d");
}, 1);
