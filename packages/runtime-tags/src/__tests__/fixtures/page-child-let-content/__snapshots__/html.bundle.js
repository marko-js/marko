// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<section><button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_html(`<p>${_text_resume($scope0_id, "c", input.user.name, _write_guard($scope0_reason, 0))}</p></section>`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_user = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_user << 1);
	const $childScope = _peek_scope_id();
	card_default({
		user: input.user,
		content: _content("a0", () => {
			_scope_reason();
			_scope_id();
			_html("<em>static</em>");
		}, $scope0_id)
	});
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
