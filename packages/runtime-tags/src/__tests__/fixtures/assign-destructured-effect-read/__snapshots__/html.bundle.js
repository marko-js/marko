// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=inc>inc</button>${_el_mark($scope0_id, "a")}<button class=reset>reset</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_script($scope0_id, "b1");
	_scope($scope0_id, {
		d: input,
		e: input.countChange
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $childScope = _peek_scope_id();
	counter_default({
		count: n,
		countChange: _resume((_new_n) => n = _new_n, "a0", $scope0_id)
	});
	_html(`<div class=log>${_text_mark($scope0_id, "b", n)}</div>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
