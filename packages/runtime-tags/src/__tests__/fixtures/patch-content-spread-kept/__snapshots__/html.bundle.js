// tags/frag-host.marko
const $template = "<section></section>";
_shells({
	b0: "b0,",
	b: "b; ;<section></section>"
});
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_mode__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const one = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.mode ? "x" : "y", void 0, $scope0_reason, 0)} ${_patch_text($scope1_id, "b", input.b, 2, $scope0_reason, 1)}</em>`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "b1" : "b2");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, _client_guard($scope0_reason, 1) ? "b3" : "b4");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 0) && $input_mode__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_html("<section");
	_patch_attrs_content({ content: input.mode ? one : null }, "a", $scope0_id, "section", void 0, void 0, $scope0_reason, 0);
	_html(`</section>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b5", 1, 1);
	_patch_write($scope0_id, "wf", one, 1);
	_client_guard($scope0_reason, 0) && _patch_init($scope0_id, "b8");
	$scope0_page ? _scope($scope0_id, {
		d: input.mode,
		e: input.b,
		f: _unfilled_if($scope0_reason, 0) && one,
		h: _write_if($scope0_reason, 0) && $input_mode__closures,
		i: _write_if($scope0_reason, 1) && $input_b__closures
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb6", input.mode, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb7", input.b, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0) => `a;${((_w0) => `/${_w0}&`)(" b")};${_w0}`)($template) });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	frag_host_default({
		mode: true,
		b: input.b
	});
	$scope0_page && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
