// tags/plain-let.marko
var plain_let_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	const $return = value;
	_scope($scope0_id, { U: _resume(function(next) {
		value = next;
	}, "b0", $scope0_id) || void 0 });
	_resume_branch($scope0_id);
	return $return;
});

// tags/row-list.marko
var row_list_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_type = _write_guard($scope0_reason, 2), $wg__input_tally__OR__input_type = _write_guard($scope0_reason, 0), $wi__input_settled = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_settled__closures = /* @__PURE__ */ new Set();
	const $bounty__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id();
	let bounty = plain_let_default({ value: 1 });
	_var($scope0_id, "b", $childScope, "c0");
	_for_of(input.tally, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.type) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "a", t + bounty + input.settled)}</span>`);
				_subscribe($bounty__closures, _subscribe($wi__input_settled && $input_settled__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "c1"), "c2");
				return 0;
			}
		}, $scope1_id, "a", $wg__input_tally__OR__input_type, $wg__input_type, 0, 0, 1);
		_scope($scope1_id, {
			c: t,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "c", $wg__input_tally__OR__input_type, _write_guard($scope0_reason, 1));
	_html(`<button>+</button>${_el_resume($scope0_id, "d")}`);
	_script($scope0_id, "c3");
	_scope($scope0_id, {
		h: _write_if($scope0_reason, 1) && input.type,
		i: input.settled,
		j: bounty,
		a: _existing_scope($childScope),
		l: $wi__input_settled && $input_settled__closures,
		m: $bounty__closures
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 2) << 3 | _write_guard($scope0_reason, 3) << 5 | _write_guard($scope0_reason, 4) << 7);
	const $childScope = _peek_scope_id();
	row_list_default({
		tally: input.tally,
		type: input.type,
		settled: input.settled
	});
	_html(`<p></p>${_el_resume($scope0_id, "b")}`);
	_if(() => {}, $scope0_id, "c");
	_script($scope0_id, "a0");
	_scope($scope0_id, { a: _write_if($scope0_reason, 1) && _existing_scope($childScope) });
}, 1);
