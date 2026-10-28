// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	const Row = { content: _content("b1", ({ text }) => {
		const $scope1_id = _scope_id();
		const $Row_content__text__closures = /* @__PURE__ */ new Set();
		const $scope1_reason = _scope_reason(), $wg__text = _write_guard($scope1_reason, 0), $wi__text = _write_if($scope1_reason, 0);
		_await($scope1_id, "a", input.promise, (x) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "a", x + ":" + text, $wg__input_promise || $wg__text)}</p>`);
			($wi__input_promise || $wi__text) && _subscribe($wi__text && $Row_content__text__closures, _scope($scope2_id, { c: $wi__text && x }), "b0", $wg__input_promise || $wg__text);
			$wg__input_promise || $wg__text || ($wi__input_promise || $wi__text) && _resume_branch($scope2_id);
		}, $wg__input_promise || $wg__text);
		($wi__input_promise || $wi__text) && _subscribe($wi__input_promise && $input_promise__closures, _scope($scope1_id, {
			d: $wi__input_promise && text,
			_: $wi__input_promise && _scope_with_id($scope0_id),
			g: $wi__text && $Row_content__text__closures
		}), "b2", 0);
		($wi__input_promise || $wi__text) && _resume_branch($scope1_id);
	}, $scope0_id) };
	_set_scope_reason($wg__input_label << 1);
	const $childScope = _peek_scope_id();
	Row.content({ text: input.label });
	_write_if($scope0_reason, 0) && _scope($scope0_id, {
		f: $wi__input_promise && $input_promise__closures,
		a: _write_if($scope0_reason, 2) && _existing_scope($childScope)
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(10 | _write_guard($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id();
	show_await_default({
		promise: p,
		label: input.label
	});
	_script($scope0_id, "a0");
	_scope($scope0_id, { b: _existing_scope($childScope) });
}, 1);
