// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_mark($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_dynamic_tag($scope0_id, "c", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label, $wg__input_label)}</p>`);
	card_default({ content: _content("a0", () => {
		_scope_reason();
		_scope_id();
		forOf([1, 2], (n) => {
			_scope_id();
			const rid = _id();
			_html(`<input type=radio name=r${_attr("id", rid)}><label${_attr("for", rid)}>${_escape(n)}</label>`);
		});
	}, $scope0_id) });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
}, 1);
