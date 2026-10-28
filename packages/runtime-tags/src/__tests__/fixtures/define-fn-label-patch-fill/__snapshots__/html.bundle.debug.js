// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	const Row = { content: _content("__tests__/template.marko_1*content", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__fn__OR__label = _write_guard($scope1_reason, 0);
		_html(`<p>${_text_resume($scope1_id, "#text/0", fn() + label, $wg__fn__OR__label)}</p>`);
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			fn: _write_if($scope1_reason, 2) && fn,
			label: _write_if($scope1_reason, 1) && label
		}, "__tests__/template.marko", "2:2", {
			fn: "2:15",
			label: "2:19"
		});
	}, $scope0_id) };
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	Row.content({
		fn: _resume(() => count, "__tests__/template.marko_0/fn", $scope0_id),
		label: input.label
	});
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
