// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = /* @__PURE__ */ new Set();
	const $k__closures = /* @__PURE__ */ new Set();
	let k = input.n;
	({ content: _content("b0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_script($scope1_id, "b1", 0);
		_subscribe($k__closures, _subscribe($wi__input_w && $input_w__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b2", 0), "b3", 0);
		_resume_branch($scope1_id);
	}, $scope0_id) }).content({});
	_html(`<button>x</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b4");
	_scope($scope0_id, {
		f: input.w,
		g: k,
		h: $wi__input_w && $input_w__closures,
		i: $k__closures
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
