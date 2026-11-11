// tags/card/index.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({
	b1: "b1,<span>done</span>",
	b2: "b2,<span>done</span>",
	b3: "b3;b%;<!><!><!>",
	b: "b;D%;<section><!></section>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $cg__input_content = _client_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<section>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 1);
		_await($scope2_id, "a", input.promise, () => {
			_scope_id();
			_html("<span>done</span>");
		}, 1, "b1", $ui__input_promise && 2);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope2_id, "b4", 1);
		$wi__input_promise && _subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b4", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
		$cg__input_content && _patch_render($scope1_id, "b0");
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_content && "b0", $wg__input_content);
	}, void 0, "b5", void 0, "b3", 1);
	_html("</section>");
	_scope($scope0_id, {
		d: input.content,
		f: $wi__input_content && $input_content__closures,
		g: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xd", input.content, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "b6", "d");
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}&l`)("D%l")};${((_w0) => `<main>${_w0}</main>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_note = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		promise: input.promise,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.note, 1, $scope0_reason, 1)}</em>`);
			$cg__input_note && _patch_render($scope1_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_note && "a0");
		}, $scope0_id)
	});
	_patch_child_end();
	_html("</main>");
	_scope($scope0_id, {
		e: input.note,
		f: _write_if($scope0_reason, 1) && $input_note__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.note, !_server_guard($scope0_reason, 1)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
