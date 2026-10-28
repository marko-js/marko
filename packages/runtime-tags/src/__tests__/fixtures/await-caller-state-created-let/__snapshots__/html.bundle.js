// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let m = x;
		let n = x;
		let s = x;
		let c = s;
		_html(`<p>${_text_resume($scope1_id, "a", x, _write_guard($scope0_reason, 0))}</p><span></span>${_el_resume($scope1_id, "b")}<button class=set>set</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "b2");
		_script($scope1_id, "b3");
		_scope($scope1_id, {
			f: m,
			g: n,
			i: s,
			j: c,
			h: _resume(function(v) {
				m = v + "?";
			}, "b0", $scope1_id) || void 0,
			k: _resume(function(v) {
				s = v;
			}, "b1", $scope1_id) || void 0
		});
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id();
			show_await_default({ promise: p });
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 0));
	_script($scope0_id, "a0");
	_scope($scope0_id, { g: _write_if($scope0_reason, 0) && p });
}, 1);
