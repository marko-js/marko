// tags/child.marko
const $template = "<section></section><!><!>";
const $walks = " b%c";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<i> </i>",
	b: "b !; b%;<section></section><!><!>",
	b4: "b4;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $cg__input_a = _client_guard($scope0_reason, 3), $cg__input_mode = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	const $input_a__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_html(`<i>${_patch_text($scope1_id, "a", input.a, void 0, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, $cg__input_a ? "b1" : "b2");
		$scope1_page && _subscribe(_unfilled_if($scope0_reason, 3) && $input_a__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 4))}`);
	_if(() => {
		if (input.b) {
			const $scope2_id = _scope_id();
			_html(`<p>${_patch_text($scope2_id, "a", input.a + input.b, void 0, $scope0_reason, 1)}</p>`);
			_patch_join_init($scope2_id, "b3", $scope0_reason, 1, _filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 5) && ">g");
			$scope0_page && _scope($scope2_id, { _: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 5), void 0, void 0, void 0, ["b4"], $scope0_reason, 5);
	$cg__input_a && _patch_write($scope0_id, "xg", input.b, !(_filled_guard($scope0_reason, 5) && $cg__input_a));
	$cg__input_mode && _patch_write($scope0_id, "wi", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "b7");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.a,
		g: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1)) && input.b,
		i: _unfilled_if($scope0_reason, 4) && frag?.content,
		k: _write_if($scope0_reason, 3) && $input_a__closures
	}) : _filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 5) ? _patch_fill($scope0_id, "vb6", input.a) : (_content_withheld("b0", $scope0_id) || $cg__input_mode) && _patch_fill($scope0_id, "vb5", input.a, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1], ["b>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => `/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `${_w0}${_w1}<button class=m>m</button><button class=n>n</button>`)($template, $template)}`)() });
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
	$scope0_page && _scope($scope0_id, {
		i: m,
		j: n,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
