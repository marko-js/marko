// tags/show-value.marko
var show_value_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_value = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<em>${_text_resume($scope0_id, "a", input.value, $wg__input_value)}</em>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = input.n;
	_if(() => {
		if (n) {
			const $scope1_id = _scope_id();
			_html(`<section><h3>Branch heading</h3><p>Static paragraph text that only the branch renders.</p></section><b>${_escape(n)}</b> <i>${_text_resume($scope1_id, "b", input.w, $wg__input_w)}</i>`);
			_set_scope_reason($wg__input_w << 1);
			const $childScope = _peek_scope_id();
			show_value_default({ value: input.w });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				c: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", $wg__input_w, 0);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_on__OR__input_n__OR__input_w = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	_html("<main>");
	_dynamic_tag($scope0_id, "a", input.on ? card_default : "div", {
		n: input.n,
		w: input.w
	}, 0, 0, $wg__input_on__OR__input_n__OR__input_w);
	_html("</main>");
	_write_if($scope0_reason, 3) && _scope($scope0_id, {
		d: _write_if($scope0_reason, 2) && input.on,
		e: _write_if($scope0_reason, 1) && input.n,
		f: _write_if($scope0_reason, 0) && input.w
	});
}, 1);
