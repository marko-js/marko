// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	let o = input.other;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_dynamic_tag($scope0_id, "c", o, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/relay.marko
var relay_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	card_default({
		other: input.content,
		content: _content("c0", () => {
			_scope_reason();
			_scope_id();
			const rid = _id();
			_html(`<input${_attr("id", rid)}><label${_attr("for", rid)}>relay</label>`);
		}, $scope0_id)
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		relay_default({ content: _content("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>p ${_escape(row.id)}</label>`);
			$wi__input_rows && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			$wi__input_rows && _resume_branch($scope2_id);
		}, $scope1_id) });
		$wi__input_rows && _scope($scope1_id, {});
	}, "id", $scope0_id, "a", $wg__input_rows, $wg__input_rows);
	$wi__input_rows && _scope($scope0_id, {});
}, 1);
