// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let f = input.fn;
	let c = input.content;
	_html(`<button>${_text_resume($scope0_id, "b", f())}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", c, {});
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/wrap.marko
var wrap_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $childScope = _peek_scope_id();
	card_default({
		fn: function() {
			return "f:" + input.label;
		},
		content: _content("c1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}</em>`);
			$wi__input_label && _subscribe($input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "c0", $wg__input_label);
			$wg__input_label || $wi__input_label && _resume_branch($scope1_id);
		}, $scope0_id)
	});
	$wi__input_label && _scope($scope0_id, {
		e: $input_label__closures,
		a: _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	wrap_default({ label: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
