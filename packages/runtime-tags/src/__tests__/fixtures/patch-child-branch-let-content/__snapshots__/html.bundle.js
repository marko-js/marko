// tags/card.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2 !b0; b%;<button>clear</button><!><!>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_content = _client_guard($scope0_reason, 1), $wg__input_show = _write_guard($scope0_reason, 0), $ui__input_show = _unfilled_if($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let c = input.content;
			_html(`<button>clear</button>${_el_mark($scope1_id, "a")}`);
			_dynamic_tag($scope1_id, "b", c, {}, 2, 0, 0, 1, $cg__input_content << 1, 0, 1);
			_script($scope1_id, "b0");
			$cg__input_content && _patch_render($scope1_id, "b1");
			_scope($scope1_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["b2"], $scope0_reason, 0);
	$fg__input_content && _client_guard($scope0_reason, 0) && _patch_render($scope0_id, "b1", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 1)) && input.content }) || (_client_branch(input.content), $fg__input_content && $ui__input_show && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $fg__input_label = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({
		show: input.show,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>static ${_text_mark($scope1_id, "a", input.label, 2, $scope0_reason, 2)}</em>`);
			$cg__input_label && _patch_render($scope1_id, "a0");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_label && "a0");
		}, $scope0_id)
	});
	_patch_child_end();
	$fg__input_label && _patch_subscribers($scope0_id, "a2", "e");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2));
}, 1);
