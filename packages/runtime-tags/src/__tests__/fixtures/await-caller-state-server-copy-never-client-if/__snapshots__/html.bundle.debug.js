// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n      .b { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19server-19copy-19never-19client-19if-1btags-1bshow-19await-1amarko_0); }\n    ";

// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, $wg__input_promise)}</p>`);
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				let n = 1;
				_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bawait-19caller-19state-19server-19copy-19never-19client-19if-1btags-1bshow-19await-1amarko_0:${_escape_style_value("red")};`)}<b class=b>${_text_resume($scope2_id, "#text/1", x, $wg__input_promise)}:${_escape(n)}:${_text_resume($scope2_id, "#text/3", input.label, $wg__input_label * 2)}</b>`);
				$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/tags/show-await.marko", "3:4"), "__tests__/tags/show-await.marko_2_input_label#0:4/subscribe", $wg__input_promise || $wg__input_label);
				return 0;
			}
		}, $scope1_id, "#text/1", $wg__input_promise, $wg__input_promise);
		$wi__input_promise__OR__input_label && _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2");
	}, _write_guard($scope0_reason, 0));
	$wi__input_promise__OR__input_label && _scope($scope0_id, {
		input_label: _write_if($scope0_reason, 1) && input.label,
		"ClosureScopes:input_label/5": $wi__input_label && $input_label__closures
	}, "__tests__/tags/show-await.marko", 0, { input_label: ["input.label"] });
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
			_set_scope_reason(10 | _write_guard($scope0_reason, 1) << 5);
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
