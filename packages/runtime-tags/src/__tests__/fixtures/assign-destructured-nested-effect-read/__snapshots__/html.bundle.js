// tags/counter.marko
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "a", input.obj.label, _write_guard($scope0_reason, 0))}</span><button class=inc>inc</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { d: input });
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	counter_default({ obj: {
		label: "x",
		count: n,
		countChange: _resume(function(v) {
			n = v;
		}, "a0", $scope0_id)
	} });
	_html(`<div class=log>${_text_mark($scope0_id, "b", n)}</div>`);
	_scope($scope0_id, { a: _existing_scope($childScope) });
}, 1);
