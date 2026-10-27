// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	let o = input.other;
	_html(`<button>clear</button>${_el_resume($scope0_id, "#button/0")}`);
	_dynamic_tag($scope0_id, "#text/1", c, {});
	_dynamic_tag($scope0_id, "#text/2", o, {});
	_script($scope0_id, "__tests__/tags/card.marko_0");
	_scope($scope0_id, {}, "__tests__/tags/card.marko", 0);
});

// tags/relay.marko
var relay_default = _template("__tests__/tags/relay.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	card_default({
		other: input.content,
		content: _content("__tests__/tags/relay.marko_1*content", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			const rid = _id();
			_html(`<input${_attr("id", rid)}><label${_attr("for", rid)}>relay</label>`);
		}, $scope0_id)
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/tags/relay.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_rows = _write_if($scope0_reason, 0), $wg__input_rows = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		relay_default({ content: _content("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _scope_reason();
			const $scope2_id = _scope_id();
			const uid = _id();
			_html(`<input${_attr("id", uid)}><label${_attr("for", uid)}>p ${_escape(row.id)}</label>`);
			$wi__input_rows && _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "2:4");
			$wi__input_rows && _resume_branch($scope2_id);
		}, $scope1_id) });
		$wi__input_rows && _scope($scope1_id, {}, "__tests__/template.marko", "1:2");
	}, "id", $scope0_id, "#text/0", $wg__input_rows, $wg__input_rows);
	$wi__input_rows && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
