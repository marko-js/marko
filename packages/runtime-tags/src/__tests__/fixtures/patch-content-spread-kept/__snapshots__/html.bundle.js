// tags/frag-host.marko
const $template = "<section></section>";
const $setup$1 = [[], ["b3"]];
_shells({
	b0: "b0",
	b: "b !b3; ;<section></section>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 0), $cg__input_b = _client_guard($scope0_reason, 1), $ui__input_mode = _unfilled_if($scope0_reason, 0), $fg__input_mode = _filled_guard($scope0_reason, 0), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_mode__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_text_mark($scope1_id, "a", input.mode ? "x" : "y", 1, $scope0_reason, 0)} ${_text_mark($scope1_id, "b", input.b, 2, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b1", $cg__input_mode);
		_unfilled_if($scope0_reason, 1) && _patch_subscribe($scope1_id, "b2", $cg__input_b);
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_mode__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_mode && "b1"), $cg__input_b && "b2");
	}, $scope0_id) };
	const attrs = { content: input.mode ? one : null };
	_html("<section");
	_attrs_content(attrs, "a", $scope0_id, "section", 0, 1, 0, $scope0_reason, 0);
	_html(`</section>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "b3");
	$ui__input_mode && _patch_write($scope0_id, "wf", one, 1);
	$fg__input_mode && _patch_subscribers($scope0_id, "b4", "d");
	$fg__input_b && _patch_subscribers($scope0_id, "b5", "e");
	$cg__input_mode && _patch_render($scope0_id, "b6");
	_scope($scope0_id, {
		d: input.mode,
		e: input.b,
		f: $ui__input_mode && one,
		i: _write_if($scope0_reason, 0) && $input_mode__closures,
		j: _write_if($scope0_reason, 1) && $input_b__closures
	}) || ($fg__input_mode && _patch_write($scope0_id, "xd", input.mode, !_server_guard($scope0_reason, 0)), $fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 1)));
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)(" b")};${$template}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_updates_from($scope0_reason, 0) << 3);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	frag_host_default({
		mode: true,
		b: input.b
	});
	_patch_child_end();
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
