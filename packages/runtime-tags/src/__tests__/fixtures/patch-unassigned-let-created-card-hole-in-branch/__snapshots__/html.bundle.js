// tags/show-value.marko
_shells({ c: "c;D ;<em> </em>" });
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// tags/card.marko
_shells({ b: "b !;b%;<!><!><!>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section><b>${_text_resume($scope1_id, "a", n)}</b> <i>${_text_resume($scope1_id, "b", input.w, _write_guard($scope0_reason, 1))}</i>`);
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "c", 0);
			show_value_default({ value: input.w });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				c: _write_if($scope0_reason, 1) && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a");
	!_client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb1", n, 1);
	_scope($scope0_id, { e: input.w }) || _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "vb0", input.w, !_server_guard($scope0_reason, 1));
});

// template.marko
_shells({ a: "a !;D%;<main><!></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3), $cg__input_n__OR__input_w = _client_guard($scope0_reason, 2), $cg__input_on__OR__input_w = _client_guard($scope0_reason, 1), $cg__input_on__OR__input_n = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 1, 0, 0, $wg__input_on__OR__input_n__OR__input_w, $scope0_reason, 3);
	_html("</main>");
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 3)) && input.on,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3)) && input.n,
		f: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3)) && input.w
	}) || (_filled_guard($scope0_reason, 4) && $cg__input_n__OR__input_w && _patch_fill($scope0_id, "va0", input.on, !_server_guard($scope0_reason, 4)), $cg__input_n__OR__input_w && _content_withhold(input.on), _filled_guard($scope0_reason, 5) && $cg__input_on__OR__input_w && _patch_fill($scope0_id, "va1", input.n, !_server_guard($scope0_reason, 5)), $cg__input_on__OR__input_w && _content_withhold(input.n), _filled_guard($scope0_reason, 6) && $cg__input_on__OR__input_n && _patch_fill($scope0_id, "va2", input.w, !_server_guard($scope0_reason, 6)), $cg__input_on__OR__input_n && _content_withhold(input.w));
}, 1);
