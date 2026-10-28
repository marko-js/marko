// tags/card.marko
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_fn = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<p>${_text_resume($scope0_id, "a", g(), $wg__input_fn)}</p>`);
	_script($scope0_id, "b1", $wg__input_fn);
	_scope($scope0_id, {
		e: _write_if($scope0_reason, 0) && open,
		g
	});
	$wg__input_fn || _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	card_default({ fn: _resume(function() {
		return "f:" + input.label + n;
	}, "a0", $scope0_id) });
	_html(`<button>more</button>${_el_resume($scope0_id, "b")}<span>${_text_resume($scope0_id, "c", input.x, _write_guard($scope0_reason, 0))}</span>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.label,
		h: n,
		a: _existing_scope($childScope)
	});
}, 1);
