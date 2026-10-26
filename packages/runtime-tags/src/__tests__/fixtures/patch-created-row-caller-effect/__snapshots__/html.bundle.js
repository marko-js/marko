// tags/child.marko
const $template = "<!><!><!>";
const $setup$1 = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b2: "b2;D ;<p> </p>"
});
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _patch_write($scope1_id, "xc", item, !_server_guard($scope0_reason, 1));
		_html(`<p>${_patch_text($scope1_id, "a", item, void 0, $scope0_reason, 1)}</p>`);
		_script($scope1_id, "b0");
		_patch_join_init($scope1_id, "b1", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "c") || (_filled_guard($scope0_reason, 2) || _filled_guard($scope0_reason, 1)) && _patch_effect($scope1_id, _client_guard($scope0_reason, 2) || _client_guard($scope0_reason, 1) ? "hb0" : "eb0", _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "c");
		$scope0_page && _scope($scope1_id, {
			c: item,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b2", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: input.count }) : _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "xe", input.count, !_server_guard($scope0_reason, 2));
});

// template.marko
const $setup = _shell_setup([[], ["a0"]], ["c>", $setup$1], ["d>", $setup$1]);
_shells({ a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0, _w1) => ` D l/${_w0}&/${_w1}&b`)("b%c", "b%c")};${((_w0, _w1) => `<button> </button>${_w0}${_w1}<!>`)($template, $template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(38 | _mask_group($scope0_reason, 1) << 3);
	const $childScope = _patch_child($scope0_id, "c");
	child_default({
		items: input.items,
		count
	});
	_set_scope_reason(_mask_group($scope0_reason, 0) << 1 | _mask_group($scope0_reason, 1) << 3 | _mask_group($scope0_reason, 2) << 5);
	const $childScope2 = _patch_child($scope0_id, "d");
	child_default({
		items: input.items,
		count: input.count
	});
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		i: count,
		c: _existing_scope($childScope),
		d: _existing_scope($childScope2)
	});
}, 1);
