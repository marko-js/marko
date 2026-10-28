// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let o = { label: input.label };
	_html(`<p>${_escape(o.label)}</p><button>log</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { h: o?.label });
});

// tags/show-await.marko
var show_await_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let b = x;
		let c = b;
		let d = c;
		_html(`${_style_html(`--M_c0:${_escape_style_value(c)};`)}${_el_resume($scope1_id, "a")}<p class=v>${_escape(b)}|${_text_resume($scope1_id, "c", c, 2)}|${_text_resume($scope1_id, "d", d, 2)}</p>`);
		const $childScope = _peek_scope_id();
		card_default({ label: x });
		_scope($scope1_id, { e: _write_if($scope0_reason, 0) && _existing_scope($childScope) });
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
