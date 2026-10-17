// tags/rows.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0;D%c%;<em><!>:<!></em>",
	b: "b !;b%;<!><!><!>",
	b1: "b1;D%c%;<em><!>:<!></em>",
	b2: "b2;D%;<div><!></div>"
});
var rows_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items__OR__input_promise = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		_html("<div>");
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", item.id, void 0, $scope0_reason, 1)}:${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_scope($scope2_id, { _: $wi__input_items__OR__input_promise && _scope_with_id($scope1_id) });
		}, 1, "b0");
		_html("</div>");
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "b3");
		$wi__input_items__OR__input_promise && _scope($scope1_id, {
			M: _unfilled_if($scope0_reason, 2) && item?.id,
			_: _write_if($scope0_reason, 2) && _scope_with_id($scope0_id)
		});
	}, "id", $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b2", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "vb4", input.promise, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !a0;${((_w0) => ` b/${_w0}&b`)("b%c")};${((_w0) => `<button>drop</button>${_w0}<!>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _patch_child($scope0_id, "b");
	rows_default({
		items,
		promise: input.promise
	});
	_script($scope0_id, "a0");
	_patch_value($scope0_id, "va1", items, 1);
	$scope0_page && _scope($scope0_id, {
		f: items,
		b: _existing_scope($childScope)
	});
}, 1);
