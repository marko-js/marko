// tags/wrap.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;D%;<div><!></div>"
});
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html("<div>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_html("</div>");
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b1"], $scope0_reason, 1);
	$fg__input_content && $cg__input_show && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && $cg__input_show && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a2: "a2",
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_prefix = _server_guard($scope0_reason, 2), $fg__input_prefix = _filled_guard($scope0_reason, 2), $wi__input_prefix = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_prefix__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1 | _updates_from($scope0_reason, 1) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	wrap_default({
		show: input.show,
		content: _content_resume("a2", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const inner = input.prefix + "!";
			_filled_guard($scope0_reason, 2) && _patch_write($scope1_id, "xb", inner, !$sg__input_prefix);
			_html(`<div></div>${_el_mark($scope1_id, "a")}`);
			_script($scope1_id, "a0", 1, _filled_guard($scope0_reason, 2), "b");
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a1", _client_guard($scope0_reason, 2));
			_subscribe($wi__input_prefix && $input_prefix__closures, _scope($scope1_id, {
				b: inner,
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
			}));
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_prefix && _patch_subscribers($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.prefix,
		f: $wi__input_prefix && $input_prefix__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_prefix && _client_guard($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.prefix, !$sg__input_prefix);
}, 1);
