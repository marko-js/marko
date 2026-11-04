// card.marko
const $template = "<button>+</button><!><!>";
const $walks = " b%c";
const $setup$1 = [[], ["a1"]];
_shells({ a: "a !a1; b%;<button>+</button><!><!>" });
var card_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $fg__input_content = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html(`<button>+</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html("<section>");
			_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, 0, $wg__input_content);
			_html("</section>");
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "a0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "b", 1, 1, 0, 0, 1);
	_script($scope0_id, "a1");
	$fg__input_content && _patch_render($scope0_id, "a0", "e");
	_patch_fill($scope0_id, "va2", open, 1);
	_scope($scope0_id, {
		e: input.content,
		f: open
	}) || $fg__input_content && _patch_write($scope0_id, "xe", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ b: `b${_shell_marker($setup)};${((_w0) => `/${_w0}&b`)($walks)};${((_w0) => `${_w0}<!>`)($template)}` });
var template_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 0), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	card_default({ content: _content_resume("b1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(_text_mark($scope1_id, "a", input.label, 1, $scope0_reason, 0));
		$cg__input_label && _patch_render($scope1_id, "b0");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_label && "b0");
	}, $scope0_id) });
	_patch_child_end();
	$fg__input_label && _patch_subscribers($scope0_id, "b2", "d");
	_scope($scope0_id, {
		d: input.label,
		e: _write_if($scope0_reason, 0) && $input_label__closures,
		a: _existing_scope($childScope)
	}) || $fg__input_label && _patch_write($scope0_id, "xd", input.label, !_server_guard($scope0_reason, 0));
}, 1);
