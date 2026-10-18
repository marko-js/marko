// tags/child.marko
const $template = "<section></section>";
_shells({
	b0: "b0,",
	b: "b; ;<section></section>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<em>${_patch_text($scope1_id, "a", input.a + input.b, void 0, $scope0_reason, 0)}</em>`);
		(_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b1");
		(_unfilled_if($scope0_reason, 5) || _unfilled_if($scope0_reason, 0)) && _patch_init($scope1_id, "b2");
		_patch_join_init($scope1_id, "b3", $scope0_reason, 0);
		_subscribe(_unfilled_if($scope0_reason, 5) && $input_b__closures, _subscribe(_unfilled_if($scope0_reason, 4) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) })));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 6);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 6))}`);
	_filled_guard($scope0_reason, 4) && (_content_withheld("b0", $scope0_id) || _client_guard($scope0_reason, 6)) ? _patch_value($scope0_id, "vb4", input.a) : _patch_write($scope0_id, "wd", input.a, !(_filled_guard($scope0_reason, 4) && _client_guard($scope0_reason, 5)));
	_filled_guard($scope0_reason, 5) && (_content_withheld("b0", $scope0_id) || _client_guard($scope0_reason, 6)) ? _patch_value($scope0_id, "vb5", input.b) : _patch_write($scope0_id, "we", input.b, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 4)));
	_patch_write($scope0_id, "wh", frag?.content, 1);
	_client_guard($scope0_reason, 6) && _patch_init($scope0_id, "b6");
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.a,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.b,
		h: _unfilled_if($scope0_reason, 6) && frag?.content,
		j: _write_if($scope0_reason, 4) && $input_a__closures,
		k: _write_if($scope0_reason, 5) && $input_b__closures
	});
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)(" b", " b")};${((_w0, _w1) => `${_w0}${_w1}<button class=n>+</button><button class=m>m</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	let m = false;
	_set_scope_reason(9198 | _mask_group($scope0_reason, 1) << 11);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: n,
		b: input.x,
		mode: m
	});
	_set_scope_reason(8696 | (_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 2) << 9 | _mask_group($scope0_reason, 1) << 11));
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.y,
		b: input.x,
		mode: m
	});
	_html(`<button class=n>+</button>${_el_resume($scope0_id, "c")}<button class=m>m</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", n, 1);
	_patch_value($scope0_id, "va2", m, 1);
	$scope0_page && _scope($scope0_id, {
		i: n,
		j: m,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
