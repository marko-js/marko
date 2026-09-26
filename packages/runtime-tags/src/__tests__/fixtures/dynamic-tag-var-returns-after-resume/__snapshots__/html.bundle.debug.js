// tags/counter.marko
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const $return = {
		n,
		set: _resume(function(value) {
			n = value;
		}, "__tests__/tags/counter.marko_0/_return", $scope0_id)
	};
	return $return;
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Double = { content: _content_resume("__tests__/template.marko_1*content", ({ value }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $return = value * 2;
		return $return;
	}, $scope0_id) };
	let count = 1;
	let CounterTag = counter_default;
	let DoubleTag = Double;
	const $CounterTag_scope = _peek_scope_id();
	let counter = _dynamic_tag($scope0_id, "#text/0", CounterTag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/1", $CounterTag_scope, "__tests__/template.marko_0_counter#13/var");
	const $DoubleTag_scope = _peek_scope_id();
	let doubled = _dynamic_tag($scope0_id, "#text/2", DoubleTag, { value: count }, void 0, void 0, void 0, 1);
	_var($scope0_id, "#scopeOffset/3", $DoubleTag_scope, "__tests__/template.marko_0_doubled#15/var");
	_html(`<button class=counter>${_text_resume($scope0_id, "#text/5", counter.n)}</button>${_el_resume($scope0_id, "#button/4")}<button class=doubled>${_text_resume($scope0_id, "#text/7", doubled)}</button>${_el_resume($scope0_id, "#button/6")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		DoubleTag,
		counter
	}, "__tests__/template.marko", 0, {
		count: "6:6",
		DoubleTag: "8:6",
		counter: "9:16"
	});
}, 1);
