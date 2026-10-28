// tags/frag-host.marko
const $template = "<section></section><div id=partial></div>";
const $walks = " b b";
const $setup$1 = [[], ["b4"]];
_shells({
	b0: "b0",
	b1: "b1",
	b: "b !b4; b ;<section></section><div id=partial></div>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_mode = _client_guard($scope0_reason, 1);
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
		_html(`<strong>${_text_resume($scope1_id, "a", input.b, void 0, $scope0_reason, 0)}</strong>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "b2" : "b3");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section");
	_patch_attrs_content({ content: input.mode ? one : two }, "a", $scope0_id, "section", 0, void 0, void 0, $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "a")}<div id=partial`);
	_patch_attrs_partial_content({ content: input.mode ? two : one }, { id: 1 }, "b", $scope0_id, "div", 1, void 0, void 0, $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b4");
	$cg__input_mode && _patch_write($scope0_id, "wg", one, 1);
	$cg__input_mode && _patch_write($scope0_id, "wh", two, 1);
	$cg__input_mode && _patch_init($scope0_id, "b6");
	_scope($scope0_id, {
		e: input.b,
		g: _unfilled_if($scope0_reason, 1) && one,
		h: _unfilled_if($scope0_reason, 1) && two,
		j: _write_if($scope0_reason, 0) && $input_b__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb5", input.b, !_server_guard($scope0_reason, 0));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>toggle</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b", 0);
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
