// tags/counter.marko
var counter_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	return {
		n,
		set: _resume(function(value) {
			n = value;
		}, "b0", $scope0_id)
	};
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Double = { content: _content_resume("a0", ({ value }) => {
		_scope_id();
		_scope_reason();
		return value * 2;
	}, $scope0_id) };
	let count = 1;
	let CounterTag = counter_default;
	let DoubleTag = Double;
	const $CounterTag_scope = _peek_scope_id();
	let counter = _dynamic_tag($scope0_id, "a", CounterTag, {}, void 0, void 0, void 0, 1);
	_var($scope0_id, "b", $CounterTag_scope, "a1");
	const $DoubleTag_scope = _peek_scope_id();
	let doubled = _dynamic_tag($scope0_id, "c", DoubleTag, { value: count }, void 0, void 0, void 0, 1);
	_var($scope0_id, "d", $DoubleTag_scope, "a2");
	_html(`<button class=counter>${_text_resume($scope0_id, "f", counter.n)}</button>${_el_resume($scope0_id, "e")}<button class=doubled>${_text_resume($scope0_id, "h", doubled)}</button>${_el_resume($scope0_id, "g")}`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		j: count,
		l: DoubleTag,
		n: counter
	});
}, 1);
