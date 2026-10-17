// tags/child.marko
const $template = "<section></section><!><!>";
const $walks = " b%c";
_shells({
	b0: "b0,",
	b: "b !; b%;<section></section><!><!>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_b = _write_if($scope0_reason, 3), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<i>${_patch_text($scope1_id, "a", input.b, void 0, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "b2" : "b3");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_patch_attr_content("a", $scope0_id, input.mode ? frag.content : null, void 0, $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 4))}`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_patch_text($scope2_id, "a", d, void 0, $scope0_reason, 1)}</p>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "b4");
		_scope($scope2_id, {
			c: $wi__input_b && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 5);
	_patch_write($scope0_id, "wi", frag?.content, 1);
	_client_guard($scope0_reason, 4) && _patch_init($scope0_id, "b8");
	$scope0_page ? _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b,
		i: _unfilled_if($scope0_reason, 4) && frag?.content,
		k: $wi__input_b && $input_b__closures
	}) : _filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 5) ? _patch_value($scope0_id, "vb7", input.b) : _content_withheld("b0") && _client_guard($scope0_reason, 4) && _patch_value($scope0_id, "vb6", input.b));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `/${_w0}& b b`)($walks)};${((_w0) => `${_w0}<button class=l>l</button><button class=m>m</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let m = false;
	_set_scope_reason(2622 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		b: input.b,
		items: list,
		mode: m
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}<button class=m>m</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", list, 1);
	_patch_value($scope0_id, "va2", m, 1);
	$scope0_page && _scope($scope0_id, {
		g: list,
		h: m,
		a: _existing_scope($childScope)
	});
}, 1);
