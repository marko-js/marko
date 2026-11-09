// tags/picker.marko
var picker_default = _template("__tests__/tags/picker.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button class=pick>pick</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/picker.marko_0");
	_scope($scope0_id, { input_onPick: input.onPick }, "__tests__/tags/picker.marko", 0, { input_onPick: ["input.onPick"] });
});

// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	picker_default({ onPick: _resume(function() {
		count = 5;
	}, "__tests__/tags/counter.marko_0/onPick", $scope0_id) });
	_script($scope0_id, "__tests__/tags/counter.marko_0_input#2", 0);
	_scope($scope0_id, {
		input,
		$countChange: input.countChange,
		"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope)
	}, "__tests__/tags/counter.marko", 0, {
		input: 0,
		$countChange: "5:20"
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	counter_default({
		count: n,
		countChange: _resume((_new_n) => n = _new_n, "__tests__/template.marko_0/countChange", $scope0_id)
	});
	_html(`<div class=log>${_text_mark($scope0_id, "#text/1", n)}</div>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
