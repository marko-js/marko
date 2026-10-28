// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n    .v { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0); }\n  ";

// tags/card.marko
var card_default = _template("__tests__/tags/card.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let a = input.label;
	let o = { label: a };
	_html(`<p>${_escape(o.label)}</p><button>log</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0_o_label#7");
	_scope($scope0_id, { o_label: o?.label }, "__tests__/tags/card.marko", 0, { o_label: ["o.label", "2:6"] });
});

// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let a = x;
		let b = a;
		let c = b;
		let d = c;
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0:${_escape_style_value(c)};`)}${_el_resume($scope1_id, "#style/0")}<p class=v>${_escape(b)}|${_text_resume($scope1_id, "#text/2", c, 2)}|${_text_resume($scope1_id, "#text/3", d, 2)}</p>`);
		const $childScope = _peek_scope_id();
		card_default({ label: x });
		_scope($scope1_id, { "#childScope/4": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/tags/show-await.marko", "1:2");
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
