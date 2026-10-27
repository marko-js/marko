// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.fn,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show__OR__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_dynamic_tag($scope0_id, "a", input.show && card_default, { fn: _resume(function() {
		return "f:" + input.label;
	}, "a0", $scope0_id) }, 0, 0, $wg__input_show__OR__input_label);
	_scope($scope0_id, {
		d: _write_if($scope0_reason, 1) && input.show,
		e: input.label
	});
}, 1);
