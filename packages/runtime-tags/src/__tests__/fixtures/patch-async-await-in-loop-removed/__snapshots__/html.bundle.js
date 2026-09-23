// tags/rows.marko
const $template = "<!><!><!>";
_shells({
	b0: "b0;D%c%;<em><!>:<!></em>",
	b: "b !;b%;<!><!><!>",
	b1: "b1;D%c%;<em><!>:<!></em>",
	b2: "b2;D%;<div><!></div>"
});
var rows_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_items__OR__input_promise = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.items, (item) => {
		const $scope1_id = _scope_id();
		const $for_content__setup__closures = /* @__PURE__ */ new Set();
		_html("<div>");
		_await($scope1_id, "a", input.promise, (v) => {
			const $scope2_id = _scope_id();
			_html(`<em>${_patch_text($scope2_id, "a", item.id, void 0, $scope0_reason, 1)}:${_patch_text($scope2_id, "b", v, 2, $scope0_reason, 2)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 1) && $for_content__setup__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
		}, 1, "b0");
		_html("</div>");
		$scope0_page && _scope($scope1_id, {
			M: _source_if($scope0_reason, 2) && item?.id,
			_: _scope_with_id($scope0_id),
			c: $for_content__setup__closures
		});
	}, "id", $scope0_id, "a", 1, $sg__input_items__OR__input_promise, _source_guard($scope0_reason, 1), void 0, void 0, "b2", $scope0_reason, 1);
	$scope0_page ? _scope($scope0_id, { e: _source_if($scope0_reason, 1) && input.promise }) : _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_value($scope0_id, "b0", input.promise);
}, 0, 0);

// template.marko
_shells({ a: /*@__PURE__*/ ((_w0, _w1) => `a !a0;${_w0};${_w1}`)(((_w0) => ` b/${_w0}&b`)("b%c"), ((_w0) => `<button>drop</button>${_w0}<!>`)($template)) });
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let items = [{ id: 1 }, { id: 2 }];
	_html(`<button>drop</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	rows_default({
		items,
		promise: input.promise
	});
	_script($scope0_id, "a0");
	$scope0_page && _scope($scope0_id, {
		f: items,
		b: _existing_scope($childScope)
	});
}, 1, () => [rows_default]);
