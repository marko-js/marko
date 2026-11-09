// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_mark($scope0_id, "#text/0", input.obj.label, _write_guard($scope0_reason, 0))}</span><button class=inc>inc</button>${_el_mark($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0_input#3");
	_scope($scope0_id, { input }, "__tests__/tags/counter.marko", 0, { input: 0 });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
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
		}, "__tests__/template.marko_0/obj", $scope0_id)
	} });
	_html(`<div class=log>${_text_mark($scope0_id, "#text/1", n)}</div>`);
	_scope($scope0_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
