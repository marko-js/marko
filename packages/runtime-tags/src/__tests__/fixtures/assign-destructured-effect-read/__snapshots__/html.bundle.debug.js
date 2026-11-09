// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=inc>inc</button>${_el_mark($scope0_id, "#button/0")}<button class=reset>reset</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0_$countChange#4");
	_script($scope0_id, "__tests__/tags/counter.marko_0_input#3");
	_scope($scope0_id, {
		input,
		$countChange: input.countChange
	}, "__tests__/tags/counter.marko", 0, {
		input: 0,
		$countChange: "5:25"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $childScope = _peek_scope_id();
	counter_default({
		count: n,
		countChange: _resume((_new_n) => n = _new_n, "__tests__/template.marko_0/countChange", $scope0_id)
	});
	_html(`<div class=log>${_text_mark($scope0_id, "#text/1", n)}</div>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
