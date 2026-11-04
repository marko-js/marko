// template.marko
_shells({
	a1: "a1;D%;<div><!> done</div>",
	a2: "a2; ;<section></section>",
	a: "a !a7; D l%;<button> </button><!><!>",
	a3: "a3;D%;<div><!> done</div>",
	a4: "a4;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_items = _client_guard($scope0_reason, 0), $wi__input_items = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_items__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "b", count)}</button>${_el_mark($scope0_id, "a")}`);
	_try($scope0_id, "c", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html("<section>");
		_for_of(input.items, (item) => {
			const $scope3_id = _scope_id(), $ui__input_items = _unfilled_if($scope0_reason, 0);
			const $for_content__item_msg__closures = /* @__PURE__ */ new Set();
			const $scope4_id = _await($scope3_id, "a", item.promise, () => {
				const $scope4_id = _scope_id();
				_html(`<div>${_text_mark($scope4_id, "a", item.msg, 1, $scope0_reason, 0)} done</div>`);
				_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope4_id, "a0", $cg__input_items);
				_subscribe(_unfilled_if($scope0_reason, 0) && $for_content__item_msg__closures, _scope($scope4_id, {}), $cg__input_items && "a0");
			}, 1, "a1", $ui__input_items && 2);
			if ($scope4_id) _unfilled_if($scope0_reason, 0) && _patch_subscribe($scope4_id, "a0", $cg__input_items);
			$wi__input_items && _scope($scope3_id, { i: $ui__input_items && $for_content__item_msg__closures });
		}, "id", $scope1_id, "a", 1, 1, 1, 0, 0, "a4", $scope0_reason, 0);
		_html(`</section>${_el_mark($scope1_id, "a")}`);
		_unfilled_if($scope0_reason, 0) && _patch_subscribe($scope1_id, "a5", $cg__input_items);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_items__closures, _scope($scope1_id, { _: $wi__input_items && _scope_with_id($scope0_id) }), $cg__input_items && "a5");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>loading</em>");
	}, void 0, "a6", void 0, "a2", 1);
	_script($scope0_id, "a7");
	_scope($scope0_id, {
		g: count,
		h: $wi__input_items && _unfilled_if($scope0_reason, 0) && $input_items__closures
	});
}, 1);
