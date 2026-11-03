// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const own = _id();
	let c = input.content;
	_html(`<input${_attr("id", own)}><label${_attr("for", own)}>own</label><button>clear</button>${_el_resume($scope0_id, "c")}`);
	_dynamic_tag($scope0_id, "d", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		card_default({ content: _content("a0", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_escape(row.id)}</label>`);
			$wi__input_rows && _scope($scope2_id, { _: _scope_with_id($scope1_id) });
			$wi__input_rows && _resume_branch($scope2_id);
		}, $scope1_id) });
		$wi__input_rows && _scope($scope1_id, {});
	}, "id", $scope0_id, "a", $wg__input_rows, $wg__input_rows);
	$wi__input_rows && _scope($scope0_id, {});
}, 1);
