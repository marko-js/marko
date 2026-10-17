// tags/child.marko
const $template = "<!><!><!><button class=t>t</button>";
const $walks = "b%b%b b";
_shells({
	b: "b !b2;b%b%b ;<!><!><!><button class=t>t</button>",
	b0: "b0;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_b = _write_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = true;
	if ($scope0_page) _if(() => {
		{
			const $scope1_id = _scope_id();
			_html(`<i>${_text_resume($scope1_id, "a", input.b, $wg__input_b)}</i>`);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_for_of(input.items, (item) => {
		const $scope2_id = _scope_id();
		const d = input.b + item;
		_html(`<p>${_patch_text($scope2_id, "a", d, void 0, $scope0_reason, 0)}</p>`);
		_client_guard($scope0_reason, 0) && _patch_init($scope2_id, "b1");
		_scope($scope2_id, {
			c: _write_if($scope0_reason, 1) && item,
			_: _write_if($scope0_reason, 0) && _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "b", 1, void 0, void 0, void 0, void 0, "b0", $scope0_reason, 2);
	_html(`<button class=t>t</button>${_el_resume($scope0_id, "c")}`);
	_script($scope0_id, "b2");
	_patch_value($scope0_id, "vb5", open, 1);
	$scope0_page ? _scope($scope0_id, {
		f: input.b,
		h: open
	}) : _filled_guard($scope0_reason, 1) && (_client_guard($scope0_reason, 2) ? _patch_value($scope0_id, "vb4", input.b) : _patch_value($scope0_id, "vb3", input.b, !_server_guard($scope0_reason, 1)));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => `b/${_w0}& b`)($walks)};${((_w0) => `<!>${_w0}<button class=l>l</button>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let list = ["p", "q"];
	_set_scope_reason(38 | _mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	child_default({
		b: input.b,
		items: list
	});
	_html(`<button class=l>l</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", list, 1);
	$scope0_page && _scope($scope0_id, {
		f: list,
		a: _existing_scope($childScope)
	});
}, 1);
