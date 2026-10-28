// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	const Row = { content: _content("__tests__/tags/show-await.marko_1*content", ({ text }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason(), $wg__text = _write_guard($scope1_reason, 0), $wi__text = _write_if($scope1_reason, 0);
		_await($scope1_id, "#text/0", text && input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", x, $wg__input_promise || $wg__text)}</p>`);
			_script($scope2_id, "__tests__/tags/show-await.marko_2_x#2", $wg__input_promise || $wg__text);
			_scope($scope2_id, { x }, "__tests__/tags/show-await.marko", "2:4", { x: "2:10" });
		});
		($wi__input_promise || $wi__text) && _subscribe($wi__input_promise && $input_promise__closures, _scope($scope1_id, {
			text: $wi__input_promise && text,
			_: _scope_with_id($scope0_id)
		}, "__tests__/tags/show-await.marko", "1:2", { text: "1:15" }), "__tests__/tags/show-await.marko_1_input_promise#0:3/subscribe", 0);
		($wi__input_promise || $wi__text) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	Row.content({ text: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		input_promise: $wi__input_label && input.promise,
		"ClosureScopes:input_promise/5": $wi__input_promise && $input_promise__closures,
		"#childScope/0": $wi__input_label && _existing_scope($childScope)
	}, "__tests__/tags/show-await.marko", 0, { input_promise: ["input.promise"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
