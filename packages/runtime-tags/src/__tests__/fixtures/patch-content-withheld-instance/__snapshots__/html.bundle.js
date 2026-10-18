// tags/frag-host.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0,",
	b: "b;b%;<!><!><!>",
	b1: "b1; ;<section></section>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note__OR__input_mode = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_for_of([0, 1], (i) => {
		const $scope1_id = _scope_id();
		const frag = { content: _content_resume("b0", () => {
			const $scope2_id = _scope_id();
			_scope_reason();
			_html(`<em>${_patch_text($scope2_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, _client_guard($scope0_reason, 1) ? "b2" : "b3");
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: $wi__input_note__OR__input_mode && _scope_with_id($scope1_id) }));
		}, $scope1_id) };
		_html("<section>");
		_patch_attr_content("a", $scope1_id, i || input.mode ? frag.content : null, void 0, $scope0_reason, 2);
		_html(`</section>${_el_resume($scope1_id, "a", _mask_group($scope0_reason, 2))}`);
		_patch_write($scope1_id, "we", frag?.content, 1);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b4");
		_scope($scope1_id, {
			c: _unfilled_if($scope0_reason, 2) && i,
			e: _unfilled_if($scope0_reason, 2) && frag?.content,
			_: $wi__input_note__OR__input_mode && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", 0, 0);
	$scope0_page ? _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1)) && input.note,
		f: _write_if($scope0_reason, 1) && $input_note__closures
	}) : _filled_guard($scope0_reason, 1) && (_content_withheld("b0", $scope0_id) || _client_guard($scope0_reason, 2)) && _patch_value($scope0_id, "vb5", input.note, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>toggle</button>${_w0}<!>`)($template)}`)() });
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
