// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const own = _id();
	let c = input.content;
	_html(`<input${_attr("id", own)}><label${_attr("for", own)}>own</label><button>clear</button>${_el_resume($scope0_id, "#button/2")}`);
	_dynamic_tag($scope0_id, "#text/3", c, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		card_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>${_escape(row.id)}</label>`);
			$wi__input_rows && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
			$wi__input_rows && _resume_branch($scope2_id);
		}, $scope1_id) });
		$wi__input_rows && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows);
	$wi__input_rows && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
