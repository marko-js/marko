// tags/frag-host.marko
const $template = "<section></section><div id=partial></div>";
const $walks = " b b";
const $setup$1 = [[], ["b3", "b4"]];
_shells({
	b0: "b0",
	b1: "b1",
	b: "b !b3 b4; b ;<section></section><div id=partial></div>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("b0", () => {
		_scope_id();
		_scope_reason();
		_html("<em>one</em>");
	}, $scope0_id) };
	const two = { content: _content_resume("b1", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<strong>${_text_mark($scope1_id, "a", input.b, 1, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "b2", _client_guard($scope0_reason, 0));
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	const sectionAttrs = { content: input.mode ? one : two };
	_html("<section");
	_attrs_content(sectionAttrs, "a", $scope0_id, "section", 0, 1, 0, $scope0_reason, 1);
	const divAttrs = { content: input.mode ? two : one };
	_html(`</section>${_el_mark($scope0_id, "a")}<div id=partial`);
	_attrs_partial_content(divAttrs, { id: 1 }, "b", $scope0_id, "div", 1, 1, 0, $scope0_reason, 1);
	_html(`</div>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b3");
	_script($scope0_id, "b4");
	$cg__input_mode && _patch_write($scope0_id, "wg", one, 1);
	$cg__input_mode && _patch_write($scope0_id, "wh", two, 1);
	$fg__input_b && _patch_subscribers($scope0_id, "b5", "e");
	$cg__input_mode && _patch_render($scope0_id, "b6");
	_scope($scope0_id, {
		e: input.b,
		g: _unfilled_if($scope0_reason, 1) && one,
		h: _unfilled_if($scope0_reason, 1) && two,
		l: _write_if($scope0_reason, 0) && $input_b__closures
	}) || $fg__input_b && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>toggle</button>${_w0}`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_mark($scope0_id, "a")}`);
	_set_scope_reason(8 | _updates_from($scope0_reason, 0) << 1);
	const $childScope = _peek_scope_id($scope0_id, "b", 0);
	frag_host_default({
		mode,
		b: input.b
	});
	_patch_child_end();
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		f: mode,
		b: _existing_scope($childScope)
	});
}, 1);
