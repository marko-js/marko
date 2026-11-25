// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	let total = 10;
	let left = 100;
	let label = "a";
	const Counter = { content: _content("a4", ({ valueChange: $valueChange, value }) => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_html(`<button class=counter>${_text_mark($scope1_id, "b", value)}</button>${_el_mark($scope1_id, "a")}`);
		_script($scope1_id, "a5");
		_scope($scope1_id, {
			e: value,
			f: $valueChange
		});
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Counter.content({
		value: count,
		valueChange: _resume_scoped((_new_count) => count = _new_count, "a0", $scope0_id)
	});
	_for_of([{
		amount: total,
		amountChange: _resume_scoped(function(next) {
			total = next;
		}, "a1", $scope0_id)
	}], ({ amountChange: $amountChange, amount }) => {
		const $scope2_id = _scope_id();
		_html(`<button class=amount>${_text_mark($scope2_id, "b", amount)}</button>${_el_mark($scope2_id, "a")}`);
		_script($scope2_id, "a6");
		_scope($scope2_id, {
			e: amount,
			f: $amountChange
		});
	}, 0, $scope0_id, "b", 1, 1, 0, 0, 1);
	const Pair = { content: _content("a7", ({ pair: { sideChange: $sideChange, side } }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<button class=side>${_text_mark($scope3_id, "b", side)}</button>${_el_mark($scope3_id, "a")}`);
		_script($scope3_id, "a8");
		_scope($scope3_id, {
			f: side,
			g: $sideChange
		});
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	Pair.content({ pair: {
		side: left,
		sideChange: _resume_scoped(function(next) {
			left = next;
		}, "a2", $scope0_id)
	} });
	const Label = { content: _content("a9", ({ textChange, text }) => {
		const $scope4_id = _scope_id();
		_scope_reason();
		_html(`<button class=label>${_text_mark($scope4_id, "b", text)} ${_escape(typeof textChange)}</button>${_el_mark($scope4_id, "a")}`);
		_script($scope4_id, "a10");
		_scope($scope4_id, {
			f: textChange,
			g: text
		});
	}, $scope0_id) };
	_set_scope_reason(8);
	const $childScope3 = _peek_scope_id();
	Label.content({
		text: label,
		textChange: _resume_scoped((_new_label) => label = _new_label, "a3", $scope0_id)
	});
	_html(`<div>${_text_mark($scope0_id, "e", count)} ${_text_mark($scope0_id, "f", total, 2)} ${_text_mark($scope0_id, "g", left, 2)} ${_text_mark($scope0_id, "h", label, 2)}</div>`);
	_scope($scope0_id, {
		a: _existing_scope($childScope),
		c: _existing_scope($childScope2),
		d: _existing_scope($childScope3)
	});
}, 1);
