// tags/brand.marko
var brand_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_label = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<span>${_escape($global$1.brand)}</span><b>${_text_resume($scope0_id, "b", input.label, $wg__input_label)}</b>`);
	_write_if($scope0_reason, 0) && _scope($scope0_id, {});
});

// tags/show-await.marko
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_set_scope_reason($wg__input_promise << 1);
		const $childScope = _peek_scope_id();
		brand_default({ label: x });
		_write_if($scope0_reason, 0) && _scope($scope1_id, { a: _existing_scope($childScope) });
	}, $wg__input_promise);
});

// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	show_await_default({ promise: p });
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
