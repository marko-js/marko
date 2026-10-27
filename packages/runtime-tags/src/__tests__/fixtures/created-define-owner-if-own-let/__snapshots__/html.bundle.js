// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $k__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	const Panel = { content: _content("b1", ({ open }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__open = _write_guard($scope1_reason, 0);
		_if(() => {
			if (open) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", k)}</p>`);
				_subscribe($k__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "b0");
				return 0;
			}
		}, $scope1_id, "a", $wg__open, $wg__open, 0, 0, 1);
		_scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Panel.content({ open: k });
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b2");
	_scope($scope0_id, {
		f: k,
		g: $k__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_n = _write_if($scope0_reason, 2), $wg__input_on = _write_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.on) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			card_default({ n: input.n });
			_write_if($scope0_reason, 0) && _scope($scope1_id, {
				_: $wi__input_n && _scope_with_id($scope0_id),
				a: $wi__input_n && _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", _write_guard($scope0_reason, 0), $wg__input_on);
	_write_if($scope0_reason, 1) && _scope($scope0_id, { e: input.n });
}, 1);
