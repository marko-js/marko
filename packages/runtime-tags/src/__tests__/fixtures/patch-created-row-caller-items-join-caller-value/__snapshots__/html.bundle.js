// tags/child.marko
const $template = "<!><!><!><button class=t>t</button>";
const $walks = "b%b%b b";
const $setup = [[], ["b3"]];
_shells({
	b: "b !b3;b%b%b ;<!><!><!><button class=t>t</button>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $fg__input_b = _filled_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	let open = true;
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<i>${_text_mark($scope1_id, "a", input.b, $wg__input_b)}</i>`);
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "b0");
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		_filled_guard($scope0_reason, 2) && _unfilled_if($scope0_reason, 1) && _patch_write($scope2_id, "xc", item, !_server_guard($scope0_reason, 2));
		const d = input.b + item;
		_html(`<p>${_text_mark($scope2_id, "a", d, 1, $scope0_reason, 0)}</p>`);
		_patch_render($scope2_id, "b1", [_filled_guard($scope0_reason, 1) && ">f", _filled_guard($scope0_reason, 2) && "c"], $scope0_reason, 0);
		_scope($scope2_id, {
			c: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "b2", $scope0_reason, 2);
	_html(`<button class=t>t</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b3");
	$fg__input_b && _patch_render($scope0_id, "b0", "f");
	$fg__input_b && _client_guard($scope0_reason, 2) && _patch_render($scope0_id, "b4", "f");
	_patch_fill($scope0_id, "vb5", open, 1);
	_scope($scope0_id, {
		f: input.b,
		h: open
	}) || $fg__input_b && _patch_write($scope0_id, "xf", input.b, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({
	a: "a !a1;b%b b ;<!><!><button class=l>l</button><button class=bb>b</button>",
	a0: `a0${_shell_marker([["a3", "a4"], []], ["a>", $setup])};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template)}`
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let b = "m";
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(42);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			child_default({
				b,
				items: list
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 0), 1, 0, 0, ["a0"], $scope0_reason, 0);
	_html(`<button class=l>l</button>${_el_mark($scope0_id, "b")}<button class=bb>b</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		g: list,
		h: b
	});
}, 1);
