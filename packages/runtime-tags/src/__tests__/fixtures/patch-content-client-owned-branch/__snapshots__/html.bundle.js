// tags/panel/index.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_body = _write_guard($scope0_reason, 2), $wg__input_open = _write_guard($scope0_reason, 1), $ui__input_open = _unfilled_if($scope0_reason, 1), $fg__input_body = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.open) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.body, {}, 2, 0, 0, $wg__input_body, $scope0_reason, 2);
			_client_guard($scope0_reason, 2) && _patch_render($scope1_id, "b0");
			_write_if($scope0_reason, 0) && _scope($scope1_id, { _: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_open, 1, 0, 0, ["b1"], $scope0_reason, 1);
	$fg__input_body && _client_guard($scope0_reason, 1) && _patch_render($scope0_id, "b0", "e");
	_scope($scope0_id, { e: _write_if($scope0_reason, 1) && ($ui__input_open || _unfilled_if($scope0_reason, 2)) && input.body }) || $fg__input_body && $ui__input_open && _patch_write($scope0_id, "xe", input.body, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a2"]], ["a>", $setup$1]);
_shells({
	a1: "a1",
	a: `a${_shell_marker($setup)};${((_w0) => `D/${_w0}& l`)("b%c")};${((_w0) => `<main>${_w0}<button>+</button></main>`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_set_scope_reason(10);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	panel_default({
		open: true,
		body: attrTag({ content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_mark($scope1_id, "a", input.title, 1, $scope0_reason, 0)}</em>`);
			_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a0", $cg__input_title);
			_subscribe(_unfilled_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_title && "a0");
		}, $scope0_id) })
	});
	_patch_child_end();
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: count,
		g: _write_if($scope0_reason, 0) && $input_title__closures,
		a: _existing_scope($childScope)
	}) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0)) && _patch_subscribers($scope0_id, "a3", "e");
}, 1);
