// tags/counter-box/index.marko
var counter_box_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	_html(`<span>${_text_resume($scope0_id, "a", mode)}</span><button class=mode>b</button>${_el_resume($scope0_id, "b")}`);
	const $return = mode;
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.onA,
		f: input.onB,
		g: mode,
		U: input.onA || void 0
	});
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	let count = counter_box_default({
		onA: input.a,
		onB: input.b
	});
	_var($scope0_id, "b", $childScope, "a0");
	_html(`<p>${_text_resume($scope0_id, "c", count)}</p>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
