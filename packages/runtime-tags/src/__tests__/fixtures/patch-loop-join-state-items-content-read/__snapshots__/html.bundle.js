// tags/child.marko
const $template = "<section></section><!><!>";
const $walks = " b%c";
const $setup$1 = [[], []];
_shells({
	b0: "b0;D ;<i> </i>",
	b: "b; b%;<section></section><!><!>",
	b3: "b3;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_b = _client_guard($scope0_reason, 3), $ui__input_mode__OR__input_items = _unfilled_if($scope0_reason, 2), $ui__input_mode = _unfilled_if($scope0_reason, 4), $fg__input_b = _filled_guard($scope0_reason, 3), $wi__input_b = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_b__closures = /* @__PURE__ */ new Set();
	const frag = { content: _content_resume("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<i>${_text_mark($scope1_id, "a", input.b, 1, $scope0_reason, 3)}</i>`);
		_unfilled_if($scope0_reason, 3) && _patch_subscribe($scope1_id, "b1", $cg__input_b);
		_subscribe(_unfilled_if($scope0_reason, 3) && $input_b__closures, _scope($scope1_id, { _: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id) }), $cg__input_b && "b1");
	}, $scope0_id) };
	_html("<section>");
	_attr_content("a", $scope0_id, input.mode ? frag.content : null, 0, 1, $scope0_reason, 4);
	_html(`</section>${_el_mark($scope0_id, "a", _updates_from($scope0_reason, 4))}`);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id(), $fg__input_items = _filled_guard($scope0_reason, 5);
		$fg__input_items && _unfilled_if($scope0_reason, 3) && _patch_write($scope2_id, "xc", item, !_server_guard($scope0_reason, 5));
		const d = input.b + item;
		_html(`<p>${_text_mark($scope2_id, "a", d, 1, $scope0_reason, 1)}</p>`);
		_patch_render($scope2_id, "b2", ((_filled_guard($scope0_reason, 3) ? " >e" : "") + ($fg__input_items ? " c" : "")).slice(1), $scope0_reason, 1);
		_scope($scope2_id, {
			c: $wi__input_b && _unfilled_if($scope0_reason, 1) && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "b3", $scope0_reason, 5);
	$ui__input_mode && _patch_write($scope0_id, "wi", frag.content, 1);
	$fg__input_b && _client_guard($scope0_reason, 5) && _patch_render($scope0_id, "b5", "e");
	_client_guard($scope0_reason, 4) && _patch_render($scope0_id, "b6");
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 2) && ($ui__input_mode__OR__input_items || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b,
		i: $ui__input_mode && frag.content,
		k: $wi__input_b && $input_b__closures
	}) || $fg__input_b && $ui__input_mode__OR__input_items && _patch_write($scope0_id, "xe", input.b, !_server_guard($scope0_reason, 3)) && _patch_subscribers($scope0_id, "b4", "e");
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: `a${_shell_marker($setup)};${((_w0) => `/${_w0}& b b`)($walks)};${((_w0) => `${_w0}<button class=l>l</button><button class=m>m</button>`)($template)}` });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let m = false;
	_set_scope_reason(2622 | _updates_from($scope0_reason, 0) << 7);
	const $childScope = _peek_scope_id($scope0_id, "a", 0);
	child_default({
		b: input.b,
		items: list,
		mode: m
	});
	_patch_child_end();
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}<button class=m>m</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		g: list,
		h: m,
		a: _existing_scope($childScope)
	});
}, 1);
