// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Inner = { content: _content("__tests__/template.marko_1*content", ({ fn, label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button>${_text_mark($scope1_id, "#text/1", label, _write_guard($scope1_reason, 0))}</button>${_el_mark($scope1_id, "#button/0")}`);
		_script($scope1_id, "__tests__/template.marko_1_fn#4");
		_scope($scope1_id, { fn }, "__tests__/template.marko", "2:2", { fn: "2:17" });
	}, $scope0_id) };
	const Outer = { content: _content("__tests__/template.marko_2*content", ({ fn, label }) => {
		const $scope2_id = _scope_id();
		const $scope2_reason = _scope_reason();
		_set_scope_reason(_write_guard($scope2_reason, 1) << 1);
		const $childScope = _peek_scope_id();
		Inner.content({
			fn,
			label
		});
		_scope($scope2_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "5:2");
	}, $scope0_id) };
	_set_scope_reason(2 | _write_guard($scope0_reason, 0) << 3);
	const $childScope2 = _peek_scope_id();
	Outer.content({
		fn: _resume(function() {
			n += input.step;
		}, "__tests__/template.marko_0/fn", $scope0_id),
		label: input.label
	});
	_html(`<p>${_text_mark($scope0_id, "#text/1", n)}</p>`);
	_scope($scope0_id, {
		input_step: input.step,
		n,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0, {
		input_step: ["input.step"],
		n: "1:6"
	});
}, 1);
