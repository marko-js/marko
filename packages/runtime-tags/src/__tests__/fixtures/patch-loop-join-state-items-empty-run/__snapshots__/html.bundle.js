// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 2), $scope0_page = _page_render(), $cg__input_items__OR__input_b = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 2) && (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 2));
		const d = input.b + item;
		_html(`<p>${_patch_text($scope1_id, "a", input.a + d, void 0, $scope0_reason, 1)}</p>`);
		_filled_guard($scope0_reason, 0) && _client_guard($scope0_reason, 4) && _patch_write($scope1_id, "xe", d);
		(_filled_guard($scope0_reason, 3) && !$cg__input_items || _filled_guard($scope0_reason, 2)) && _patch_join_init($scope1_id, "b0", $scope0_reason, 0, _filled_guard($scope0_reason, 3) && ">e", _filled_guard($scope0_reason, 2) && "c");
		(_filled_guard($scope0_reason, 4) && !$cg__input_items || _filled_guard($scope0_reason, 0)) && _patch_join_init($scope1_id, "b1", $scope0_reason, 1, _filled_guard($scope0_reason, 4) && ">f", _filled_guard($scope0_reason, 0) && "e");
		$scope0_page && _scope($scope1_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && item,
			e: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1)) && d,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b2", $scope0_reason, 2);
	_filled_guard($scope0_reason, 3) && $cg__input_items ? _patch_fill($scope0_id, "vb3", input.b) : $cg__input_items && _patch_write($scope0_id, "xe", input.b, 1);
	_filled_guard($scope0_reason, 4) && $cg__input_items ? _patch_fill($scope0_id, "vb4", input.a) : $cg__input_items__OR__input_b && _patch_write($scope0_id, "xf", input.a, !(_filled_guard($scope0_reason, 4) && $cg__input_items__OR__input_b));
	$scope0_page && _scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.b,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.a
	});
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["a>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => `b/${_w0}& b`)("b%c")};${((_w0) => `<!>${_w0}<button class=l>l</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(62 | (_mask_group($scope0_reason, 1) << 7 | _mask_group($scope0_reason, 0) << 9));
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		a: input.a,
		b: input.b,
		items: list
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		g: list,
		a: _existing_scope($childScope)
	});
}, 1);
