// tags/child.marko
const $template = "<!><!><!><!>";
const $walks = "b%b%c";
_shells({
	b: "b !;b%b%;<!><!><!><!>",
	b0: "b0;D ;<i> </i>",
	b1: "b1;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_html(`<i>${_patch_text($scope1_id, "a", input.b, void 0, $scope0_reason, 3)}</i>`);
			_client_guard($scope0_reason, 3) && _patch_init($scope1_id, "b2");
			_scope($scope1_id, { _: _write_if($scope0_reason, 3) && _scope_with_id($scope0_id) });
			return 0;
		}
	}, $scope0_id, "a", 1, _write_guard($scope0_reason, 2), void 0, void 0, void 0, ["b0"], $scope0_reason, 2);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_patch_text($scope2_id, "a", d, void 0, $scope0_reason, 1)}</p>`);
		_client_guard($scope0_reason, 1) && _patch_init($scope2_id, "b3");
		_scope($scope2_id, {
			c: (_unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 4)) && item,
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, { f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.b }) : _filled_guard($scope0_reason, 3) && (_client_guard($scope0_reason, 4) ? _patch_value($scope0_id, "vb5", input.b) : (_client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 4)) && _patch_value($scope0_id, "vb4", input.b, !_server_guard($scope0_reason, 3)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0, _w1) => `b/${_w0}&/${_w1}& b b`)($walks, $walks)};${((_w0, _w1) => `<!>${_w0}${_w1}<button class=l>l</button><button class=s>s</button>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	let show = true;
	_set_scope_reason(570 | _mask_group($scope0_reason, 2) << 7);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		b: input.b,
		items: list,
		show
	});
	_set_scope_reason(_mask_group($scope0_reason, 1) << 1 | _mask_group($scope0_reason, 0) << 3 | _mask_group($scope0_reason, 4) << 5 | _mask_group($scope0_reason, 2) << 7 | _mask_group($scope0_reason, 3) << 9);
	const $childScope2 = _patch_child($scope0_id, "b");
	child_default({
		b: input.b,
		items: input.items,
		show: input.show
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "c")}<button class=s>s</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", list, 1);
	_patch_value($scope0_id, "va2", show, 1);
	$scope0_page && _scope($scope0_id, {
		j: list,
		k: show,
		a: _existing_scope($childScope),
		b: _existing_scope($childScope2)
	});
}, 1);
