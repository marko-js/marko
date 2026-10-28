// tags/show-await.marko
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.label, $wg__input_label)}:${_text_resume($scope1_id, "#text/1", x, $wg__input_promise * 2)}</p>`);
		$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {}, "__tests__/tags/show-await.marko", "1:2"), "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe", $wg__input_promise || $wg__input_label);
		$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, _write_guard($scope0_reason, 0));
	$wi__input_label && _scope($scope0_id, { "ClosureScopes:input_label/5": $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const $p__closures = new Set();
	const $input_title__closures = new Set();
	const $input_note__closures = new Set();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_try($scope0_id, "#text/1", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", input.title, (title) => {
			const $scope2_id = _scope_id();
			_html(`<h1>${_text_resume($scope2_id, "#text/0", title, $wg__input_title)}</h1>`);
			_try($scope2_id, "#text/1", () => {
				const $scope3_reason = _scope_reason();
				const $scope3_id = _scope_id();
				_set_scope_reason(10 | _write_guard($scope0_reason, 1) << 5);
				const $childScope = _peek_scope_id();
				show_await_default({
					promise: p,
					label: input.label
				});
				_subscribe($p__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope2_id),
					"#childScope/0": _existing_scope($childScope)
				}, "__tests__/template.marko", "7:6"), "__tests__/template.marko_3_input_label#0:6/subscribe"), "__tests__/template.marko_3_p#0:8/subscribe");
			}, () => {
				_scope_reason();
				const $scope5_id = _scope_id();
				_html("<em>inner</em>");
			}, void 0, "__tests__/template.marko_5*content");
			_scope($scope2_id, {}, "__tests__/template.marko", "5:4");
		});
		_await($scope1_id, "#text/1", input.note, (note) => {
			const $scope6_id = _scope_id();
			_html(`<small>${_text_resume($scope6_id, "#text/0", note, $wg__input_note)}</small>`);
			$wi__input_note && _scope($scope6_id, {}, "__tests__/template.marko", "12:4");
		}, $wg__input_note);
		_subscribe($wi__input_note && $input_note__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:2"), "__tests__/template.marko_1_input_title#0:5/subscribe", 0), "__tests__/template.marko_1_input_note#0:7/subscribe", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope4_id = _scope_id();
		_html("<em>outer</em>");
	}, void 0, "__tests__/template.marko_4*content");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		"ClosureScopes:input_label/10": $wi__input_label && $input_label__closures,
		"ClosureScopes:p/12": $p__closures,
		"ClosureScopes:input_title/9": $wi__input_title && $input_title__closures,
		"ClosureScopes:input_note/11": $wi__input_note && $input_note__closures
	}, "__tests__/template.marko", 0);
}, 1);
