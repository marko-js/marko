// tags/frag-host.marko
const $template = "<section></section><div id=partial></div>";
const $walks = " b b";
_shells({ b: "b !b3; b ;<section></section><div id=partial></div>" });
var frag_host_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
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
		_html(`<strong>${_patch_text($scope1_id, "a", input.b, void 0, $scope0_reason, 0)}</strong>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_b__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2");
	}, $scope0_id) };
	_html("<section");
	_patch_attrs_content({ content: input.mode ? one : two }, "a", $scope0_id, "section", void 0, void 0, $scope0_reason, 1);
	_html(`</section>${_el_resume($scope0_id, "a")}<div id=partial`);
	_patch_attrs_partial_content({ content: input.mode ? two : one }, { id: 1 }, "b", $scope0_id, "div", void 0, void 0, $scope0_reason, 1);
	_html(`</div>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b3");
	_patch_write($scope0_id, "wg", one, 1);
	_patch_write($scope0_id, "wh", two, 1);
	_client_guard($scope0_reason, 1) && _patch_init($scope0_id, "b5");
	$scope0_page ? _scope($scope0_id, {
		e: input.b,
		g: _unfilled_if($scope0_reason, 1) && one,
		h: _unfilled_if($scope0_reason, 1) && two,
		j: _write_if($scope0_reason, 0) && $input_b__closures
	}) : _filled_guard($scope0_reason, 0) && _content_withheld("b1") && _patch_value($scope0_id, "vb4", input.b);
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => ` b/${_w0}&`)($walks)};${((_w0) => `<button>toggle</button>${_w0}`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let mode = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(8 | _mask_group($scope0_reason, 0) << 1);
	const $childScope = _patch_child($scope0_id, "b");
	frag_host_default({
		mode,
		b: input.b
	});
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", mode, 1);
	$scope0_page && _scope($scope0_id, {
		f: mode,
		b: _existing_scope($childScope)
	});
}, 1);
