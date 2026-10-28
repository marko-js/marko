// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let a = x;
		let g = a + ":" + input.label;
		_html(`<p>${_text_resume($scope1_id, "#text/0", g)}</p><button class=g>g</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/tags/show-await.marko_1");
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			a: $wi__input_label && a,
			"TagVariableChange:g": _resume(function(v) {
				a = v;
			}, "__tests__/tags/show-await.marko_1/valueChange", $scope1_id) || void 0
		}, "__tests__/tags/show-await.marko", "1:2", {
			a: "2:8",
			"TagVariableChange:g": ["gChange", "3:8"]
		}), "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	});
	_scope($scope0_id, {
		input_label: input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let l = input.label;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			show_await_default({
				promise: input.promise,
				label: l
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
		input_promise: $wi__input_show && input.promise,
		l: $wi__input_show && l
	}, "__tests__/template.marko", 0, {
		input_promise: ["input.promise"],
		l: "1:6"
	});
}, 1);
