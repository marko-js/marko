// template.marko
_shells({
	a0: "a0;D%;<div><!> done</div>",
	a1: "a1; ;<section></section>",
	a: "a !a7; D l%;<button> </button><!><!>",
	a2: "a2;D%;<div><!> done</div>",
	a3: "a3;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_items = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_items__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id();
			const $for_content__item_msg__closures = /* @__PURE__ */ new Set();
			_await($scope3_id, "a", item.promise, () => {
				const $scope4_id = _scope_id();
				_html(`<div>${_patch_text($scope4_id, "a", item.msg, void 0, $scope0_reason, 0)} done</div>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope4_id, "a4");
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_msg__closures, _scope($scope4_id, { _: $wi__input_items && _scope_with_id($scope3_id) }), _client_guard($scope0_reason, 0) && "a4");
			}, 1, "a0");
			$wi__input_items && _scope($scope3_id, { i: _unfilled_if($scope0_reason, 0) && $for_content__item_msg__closures });
		}, "id", $scope1_id, "a", 1, void 0, void 0, void 0, void 0, "a3", $scope0_reason, 0);
		_html(`</section>${_el_resume($scope1_id, "a")}`);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a5");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_items__closures, _scope($scope1_id, { _: $wi__input_items && _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 0) && "a5");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a6", void 0, "a1", 1);
	_script($scope0_id, "a7");
	_patch_value($scope0_id, "va8", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: count,
		h: $wi__input_items && _unfilled_if($scope0_reason, 0) && $input_items__closures
	});
}, 1);
