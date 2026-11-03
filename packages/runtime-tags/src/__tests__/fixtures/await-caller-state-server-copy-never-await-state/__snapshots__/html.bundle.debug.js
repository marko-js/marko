// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let n = 0;
		let q = Promise.resolve("k");
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, _write_guard($scope0_reason, 0))}</p><button class=q>${_text_resume($scope1_id, "#text/2", n)}</button>${_el_resume($scope1_id, "#button/1")}`);
		_await($scope1_id, "#text/3", q, (y) => {
			const $scope2_id = _scope_id();
			_html(`<b>${_text_resume($scope2_id, "#text/0", y)}</b>`);
			_scope($scope2_id, {}, "__tests__/tags/show-await.marko", "6:4");
		});
		_script($scope1_id, "__tests__/tags/show-await.marko_1");
		_scope($scope1_id, { n }, "__tests__/tags/show-await.marko", "1:2", { n: "3:8" });
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_set_scope_reason(2);
	const $childScope = _peek_scope_id();
	show_await_default({ promise: p });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { "#childScope/1": _existing_scope($childScope) }, "__tests__/template.marko", 0);
}, 1);
