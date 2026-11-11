// tags/card.marko
const $setup$2 = [[], ["b0"]];
_shells({ b: "b !b0; D ;<button> </button>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	_html(`<button>${_text_mark($scope0_id, "b", f(), 1, _client_guard($scope0_reason, 0) << 1, 0, 1)}</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/wrapper.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	c: "c;b%;<!><!><!>",
	c1: "c1;b%;<!><!><!>"
});
var wrapper_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 2), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $fg__input_content = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "c0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["c1"], $scope0_reason, 1);
	$fg__input_content && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "c0", "e");
	_scope($scope0_id, { e: ($ui__input_show || _unfilled_if($scope0_reason, 2)) && input.content }) || $fg__input_content && $ui__input_show && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: `a1${_shell_marker([[], []], ["a>", $setup$2])}`,
	a: `a${_shell_marker($setup)};${((_w0) => `b/${_w0}&b`)("b%c")};${((_w0) => `<!>${_w0}<!>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 2), $uf__input_show = _updates_from($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason($uf__input_show << 1 | $uf__input_show << 3);
	const $childScope2 = _peek_scope_id($scope0_id, "a", 1);
	wrapper_default({
		show: input.show,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 2) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({ fn: function() {
				return "f:" + input.label;
			} });
			_patch_child_end();
			_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope1_id, "a0", $cg__input_label);
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_label__closures, _scope($scope1_id, {
				_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			}), $cg__input_label && "a0", 0);
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_patch_child_end();
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.label,
		f: _write_if($scope0_reason, 2) && $input_label__closures,
		a: _existing_scope($childScope2)
	}) || _filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 2)) && _patch_subscribers($scope0_id, "a2", "e");
}, 1);
