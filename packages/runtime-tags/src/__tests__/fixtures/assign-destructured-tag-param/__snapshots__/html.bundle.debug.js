// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 1;
	let total = 10;
	let left = 100;
	let label = "a";
	const Counter = { content: _content("__tests__/template.marko_1*content", ({ valueChange: $valueChange, value }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button class=counter>${_text_mark($scope1_id, "#text/1", value)}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_$valueChange#5");
		_scope($scope1_id, {
			value,
			$valueChange
		}, "__tests__/template.marko", "5:2", {
			value: "5:19",
			$valueChange: "6:31"
		});
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	Counter.content({
		value: count,
		valueChange: _resume((_new_count) => count = _new_count, "__tests__/template.marko_0/valueChange2", $scope0_id)
	});
	_for_of([{
		amount: total,
		amountChange: _resume(function(next) {
			total = next;
		}, "__tests__/template.marko_0/of", $scope0_id)
	}], ({ amountChange: $amountChange, amount }) => {
		const $scope2_id = _scope_id();
		_html(`<button class=amount>${_text_mark($scope2_id, "#text/1", amount)}</button>${_el_mark($scope2_id, "#button/0")}`);
		_script($scope2_id, "__tests__/template.marko_2_$amountChange#5");
		_scope($scope2_id, {
			amount,
			$amountChange
		}, "__tests__/template.marko", "9:2", {
			amount: "9:8",
			$amountChange: "10:30"
		});
	}, 0, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	const Pair = { content: _content("__tests__/template.marko_3*content", ({ pair: { sideChange: $sideChange, side } }) => {
		const $scope3_id = _scope_id();
		const $scope3_reason = _scope_reason();
		_html(`<button class=side>${_text_mark($scope3_id, "#text/1", side)}</button>${_el_mark($scope3_id, "#button/0")}`);
		_script($scope3_id, "__tests__/template.marko_3_$sideChange#6");
		_scope($scope3_id, {
			side,
			$sideChange
		}, "__tests__/template.marko", "12:2", {
			side: "12:24",
			$sideChange: "13:28"
		});
	}, $scope0_id) };
	_set_scope_reason(2);
	const $childScope2 = _peek_scope_id();
	Pair.content({ pair: {
		side: left,
		sideChange: _resume(function(next) {
			left = next;
		}, "__tests__/template.marko_0/pair2", $scope0_id)
	} });
	const Label = { content: _content("__tests__/template.marko_4*content", ({ textChange, text }) => {
		const $scope4_id = _scope_id();
		const $scope4_reason = _scope_reason();
		_html(`<button class=label>${_text_mark($scope4_id, "#text/1", text)} ${_escape(typeof textChange)}</button>${_el_mark($scope4_id, "#button/0")}`);
		_script($scope4_id, "__tests__/template.marko_4_textChange#5");
		_scope($scope4_id, {
			textChange,
			text
		}, "__tests__/template.marko", "16:2", {
			textChange: "16:17",
			text: "16:29"
		});
	}, $scope0_id) };
	_set_scope_reason(8);
	const $childScope3 = _peek_scope_id();
	Label.content({
		text: label,
		textChange: _resume((_new_label) => label = _new_label, "__tests__/template.marko_0/textChange", $scope0_id)
	});
	_html(`<div>${_text_mark($scope0_id, "#text/4", count)} ${_text_mark($scope0_id, "#text/5", total, 2)} ${_text_mark($scope0_id, "#text/6", left, 2)} ${_text_mark($scope0_id, "#text/7", label, 2)}</div>`);
	_scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/2": _existing_scope($childScope2),
		"#childScope/3": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0);
}, 1);
