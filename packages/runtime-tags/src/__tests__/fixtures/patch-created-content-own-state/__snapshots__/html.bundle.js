// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D%;<section><!></section>"
});
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</section>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a3: "a3 !a0",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_id = _client_guard($scope0_reason, 2), $fg__input_id = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("a3", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			let c = 0;
			_html(`<button>${_text_mark($scope1_id, "b", c)} ${_text_mark($scope1_id, "c", input.id, 2, $scope0_reason, 2)}</button>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", $cg__input_id);
			_patch_fill($scope1_id, "va2", c, 1);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope1_id, {
				d: c,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}), $cg__input_id && "a1");
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_id && _patch_subscribers($scope0_id, "a4", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.id,
		f: _write_if($scope0_reason, 2) && $input_id__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_id && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.id, !_server_guard($scope0_reason, 2));
}, 1);
