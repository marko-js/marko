// tags/frag-host.marko
const $template = "<section></section>";
_shells({
	b0: "b0,",
	b: "b; ;<section></section>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b1" : "b2");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 2);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 2))}`);
	_patch_write($scope0_id, "wg", frag?.content, 1);
	_client_guard($scope0_reason, 2) && _patch_init($scope0_id, "b4");
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		g: _unfilled_if($scope0_reason, 2) && frag?.content,
		i: _write_if($scope0_reason, 1) && $input_note__closures
	}) : _filled_guard($scope0_reason, 1) && (_content_withheld("b0", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_value($scope0_id, "vb3", input.note, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => ` b/${_w0}&`)(" b")};${((_w0) => `<button>toggle</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "b");
	frag_host_default({
		mode,
		note: input.note
	});
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", mode, 1);
	$scope0_page && _scope($scope0_id, {
		f: mode,
		b: _existing_scope($childScope)
	});
}, 1);
