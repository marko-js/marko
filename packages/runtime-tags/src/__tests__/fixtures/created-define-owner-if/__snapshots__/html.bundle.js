// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_w = _write_guard($scope0_reason, 0), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	const Panel = { content: _content("b1", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0), $wi__open = _write_if($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.w, $wg__input_w)}</p>`);
				($wi__input_w || $wi__open) && _subscribe($wi__input_w && $input_w__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0", $wg__input_w);
				return 0;
			}
		}, $scope1_id, "a", $wg__open, $wg__open, 0, 0, 1);
		($wi__input_w || $wi__open) && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Panel.content({ open: k });
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		f: input.w,
		h: $wi__input_w && $input_w__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n__OR__input_w = _write_if($scope0_reason, 0), $wg__input_on = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 3) << 1);
			const $childScope = _peek_scope_id();
			card_default({
				n: input.n,
				w: input.w
			});
			_write_if($scope0_reason, 1) && _scope($scope1_id, {
				_: $wi__input_n__OR__input_w && _scope_with_id($scope0_id),
				a: $wi__input_n__OR__input_w && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 1), $wg__input_on);
	_write_if($scope0_reason, 2) && _scope($scope0_id, {
		e: input.n,
		f: input.w
	});
}, 1);
