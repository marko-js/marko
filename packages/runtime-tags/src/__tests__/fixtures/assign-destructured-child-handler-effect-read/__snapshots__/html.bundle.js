// tags/picker.marko
var picker_default = _template("c", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=pick>pick</button>${_el_mark($scope0_id, "a")}`);
	_script($scope0_id, "c0");
	_scope($scope0_id, { d: input.onPick });
});

// tags/counter.marko
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	picker_default({ onPick: _resume(function() {
		count = 5;
	}, "b0", $scope0_id) });
	_script($scope0_id, "b1", 0);
	_scope($scope0_id, {
		c: input,
		d: input.countChange,
		a: _write_if($scope0_reason, 0) && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	counter_default({
		count: n,
		countChange: _resume((_new_n) => n = _new_n, "a0", $scope0_id)
	});
	_html(`<div class=log>${_text_mark($scope0_id, "b", n)}</div>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
