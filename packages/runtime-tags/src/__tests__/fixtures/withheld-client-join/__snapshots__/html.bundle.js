// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let c = input.content;
	_html(`<button>clear</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "b", c, {});
	_dynamic_tag($scope0_id, "c", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	card_default({ content: _content("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		let n = 0;
		_html(`<button class=inc>inc</button>${_el_resume($scope1_id, "a")}<span>${_text_resume($scope1_id, "b", input.label, _write_guard($scope0_reason, 0))}:${_text_resume($scope1_id, "c", n, 2)}</span>`);
		_script($scope1_id, "a0");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			d: n,
			_: $wi__input_label && _scope_with_id($scope0_id)
		}), "a1");
	}, $scope0_id) });
	$wi__input_label && _scope($scope0_id, { e: $input_label__closures });
}, 1);
