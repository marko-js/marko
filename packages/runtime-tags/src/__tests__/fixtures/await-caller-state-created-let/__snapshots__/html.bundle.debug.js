// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let m = x;
		let n = x;
		let s = x;
		let c = s;
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, _write_guard($scope0_reason, 0))}</p><span></span>${_el_resume($scope1_id, "#span/1")}<button class=set>set</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/tags/show-await.marko_1_m#5_n#6_s#8_c#9");
		_script($scope1_id, "__tests__/tags/show-await.marko_1");
		_scope($scope1_id, {
			m,
			n,
			s,
			c,
			"TagVariableChange:n": _resume(function(v) {
				m = v + "?";
			}, "__tests__/tags/show-await.marko_1/valueChange", $scope1_id) || void 0,
			"TagVariableChange:c": _resume(function(v) {
				s = v;
			}, "__tests__/tags/show-await.marko_1/valueChange2", $scope1_id) || void 0
		}, "__tests__/tags/show-await.marko", "1:2", {
			m: "2:8",
			n: "3:8",
			s: "4:8",
			c: "5:8",
			"TagVariableChange:n": ["nChange", "3:8"],
			"TagVariableChange:c": ["cChange", "5:8"]
		});
	});
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			show_await_default({ promise: p });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { p: _write_if($scope0_reason, 0) && p }, "__tests__/template.marko", 0, { p: "1:6" });
}, 1);
