// tags/plain-let.marko
var plain_let_default = _template("__tests__/tags/plain-let.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let value = input.value;
	const $return = value;
	_scope($scope0_id, { "#TagVariableChange": _resume(function(next) {
		value = next;
	}, "__tests__/tags/plain-let.marko_0/valueChange", $scope0_id) || void 0 }, "__tests__/tags/plain-let.marko", 0);
	_resume_branch($scope0_id);
	return $return;
});

// tags/row-list.marko
var row_list_default = _template("__tests__/tags/row-list.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_type = _write_guard($scope0_reason, 2), $wg__input_tally__OR__input_type = _write_guard($scope0_reason, 0), $wi__input_settled = _write_if($scope0_reason, 3);
	const $scope0_id = _scope_id();
	const $input_settled__closures = new Set();
	const $bounty__closures = new Set();
	const $childScope = _peek_scope_id();
	let bounty = plain_let_default({ value: 1 });
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/tags/row-list.marko_0_bounty#9/var");
	_for_of(input.tally, (t) => {
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.type) {
				const $scope2_id = _scope_id();
				_html(`<span>${_text_resume($scope2_id, "#text/0", t + bounty + input.settled)}</span>`);
				_subscribe($bounty__closures, _subscribe($wi__input_settled && $input_settled__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/row-list.marko", "3:4"), "__tests__/tags/row-list.marko_2_input_settled#0:8/subscribe"), "__tests__/tags/row-list.marko_2_bounty#0:9/subscribe");
				return 0;
			}
		}, $scope1_id, "#text/0", $wg__input_tally__OR__input_type, $wg__input_type, 0, 0, 1);
		_scope($scope1_id, {
			t,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/row-list.marko", "2:2", { t: "2:6" });
	}, 0, $scope0_id, "#text/2", $wg__input_tally__OR__input_type, _write_guard($scope0_reason, 1));
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/3")}`);
	_script($scope0_id, "__tests__/tags/row-list.marko_0");
	_scope($scope0_id, {
		input_type: _write_if($scope0_reason, 1) && input.type,
		input_settled: input.settled,
		bounty,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:input_settled/11": $wi__input_settled && $input_settled__closures,
		"ClosureScopes:bounty/12": $bounty__closures
	}, "__tests__/tags/row-list.marko", 0, {
		input_type: ["input.type"],
		input_settled: ["input.settled"],
		bounty: "1:12"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_set_scope_reason(_write_guard($scope0_reason, 0) << 1 | _write_guard($scope0_reason, 2) << 3 | _write_guard($scope0_reason, 3) << 5 | _write_guard($scope0_reason, 4) << 7);
	const $childScope = _peek_scope_id();
	row_list_default({
		tally: input.tally,
		type: input.type,
		settled: input.settled
	});
	let more = false;
	_html(`<p></p>${_el_resume($scope0_id, "#p/1")}`);
	_if(() => {
		if (more) {
			const $scope1_id = _scope_id();
			row_list_default({
				tally: [],
				type: "a",
				settled: 0
			});
			_scope($scope1_id, {}, "__tests__/template.marko", "4:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/0": _write_if($scope0_reason, 1) && _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
