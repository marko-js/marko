// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let a = x;
		let l = input.label;
		let e = a;
		let f = a + ":" + l;
		_html(`<p class=v>${_text_resume($scope1_id, "#text/0", e)}|${_text_resume($scope1_id, "#text/1", f, 2)}</p><button class=e>e</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/tags/show-await.marko_1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			e,
			f
		}, "__tests__/tags/show-await.marko", "1:2", {
			e: "4:8",
			f: "5:8"
		}), "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	});
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/5": $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_write_guard($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id();
			show_await_default({
				promise: p,
				label: input.label
			});
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: $wi__input_show && input.label,
		p: $wi__input_show && p
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		p: "1:6"
	});
}, 1);
