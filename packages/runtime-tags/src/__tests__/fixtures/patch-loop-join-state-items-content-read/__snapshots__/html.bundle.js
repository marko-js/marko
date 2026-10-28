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
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 5), $cg__input_mode = _client_guard($scope0_reason, 4), $wi__input_b = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_resume($scope1_id, "a", input.b, 1, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_init($scope1_id, _client_guard($scope0_reason, 3) ? "b1" : "b2");
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }));
	}, $scope0_id) };
	_html("<section>");
	_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 4);
	_html(`</section>${_el_resume($scope0_id, "a", _mask_group($scope0_reason, 4))}`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 5) && _patch_write($scope2_id, "xc", item, !_server_guard($scope0_reason, 5));
		const d = input.b + item;
		_html(`<p>${_text_resume($scope2_id, "a", d, 1, $scope0_reason, 1)}</p>`);
		(_filled_guard($scope0_reason, 3) && !$cg__input_items || _filled_guard($scope0_reason, 5)) && _patch_init_entry($scope2_id, "b3", [_filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 5) && "c"], $scope0_reason, 1);
		_scope($scope2_id, {
			c: $wi__input_b && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "b4", $scope0_reason, 5);
	$cg__input_mode && _patch_write($scope0_id, "wi", frag?.content, 1);
	$cg__input_mode && _patch_init($scope0_id, "b7");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b,
		i: _unfilled_if($scope0_reason, 4) && frag?.content,
		k: $wi__input_b && $input_b__closures
	}) || _filled_guard($scope0_reason, 3) && ($cg__input_items ? _patch_fill($scope0_id, "vb6", input.b) : (_content_withheld("b0", $scope0_id) || $cg__input_mode) && _patch_fill($scope0_id, "vb5", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b b`)($walks)};${((_w0) => `${_w0}<button class=l>l</button><button class=m>m</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let m = false;
	_set_scope_reason(2622 | _mask_group($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		b: input.b,
		items: list,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}<button class=m>m</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: list,
		h: m,
		a: _existing_scope($childScope)
	});
}, 1);
