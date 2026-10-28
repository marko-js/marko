// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let q = Promise.resolve("k");
		_html(`<p>${_text_resume($scope1_id, "a", x, _write_guard($scope0_reason, 0))}</p><button class=q>${_text_resume($scope1_id, "c", n)}</button>${_el_resume($scope1_id, "b")}`);
		_await($scope1_id, "d", q, (y) => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "a", y)}</b>`);
			_scope($scope2_id, {});
		});
		_script($scope1_id, "b0");
		_scope($scope1_id, { g: n });
	});
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
