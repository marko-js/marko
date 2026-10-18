// tags/child.marko
const $template = "<section></section><!><!>";
const $walks = " b%c";
_shells({
	b0: "b0,",
	b: "b !; b%;<section></section><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<i>${_patch_text($scope1_id, "a", input.a, void 0, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "b2" : "b3");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 4))}`);
	_if(() => {
		if (input.b) {
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope2_id, "b4", $scope0_reason, 1);
			_scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["b1"], $scope0_reason, 5);
	_patch_write($scope0_id, "wg", input.b, !(_filled_guard($scope0_reason, 5) && _client_guard($scope0_reason, 3)));
	_patch_write($scope0_id, "wi", frag?.content, 1);
	_client_guard($scope0_reason, 4) && _patch_init($scope0_id, "b7");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.b,
		i: _unfilled_if($scope0_reason, 4) && frag?.content,
		k: _write_if($scope0_reason, 3) && $input_a__closures
	}) : _filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 5) ? _patch_value($scope0_id, "vb6", input.a) : _content_withheld("b0", _client_guard($scope0_reason, 4)) && _patch_value($scope0_id, "vb5", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=m>m</button><button class=n>n</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let m = true;
	let n = "";
	_set_scope_reason(614 | (_mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 2) << 11));
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.x,
		b: input.y,
		mode: m
	});
	_set_scope_reason(2622 | _mask_group($scope0_reason, 1) << 7);
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		a: input.x,
		b: n,
		mode: m
	});
	_html(`<button class=m>m</button>${_el_resume($scope0_id, "c")}<button class=n>n</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", m, 1);
	_patch_value($scope0_id, "va2", n, 1);
	$scope0_page && _scope($scope0_id, {
		i: m,
		j: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
