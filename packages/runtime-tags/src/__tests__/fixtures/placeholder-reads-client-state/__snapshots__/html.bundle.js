// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let n = 0;
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.promise, (value) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "a", value, $wg__input_promise)}</em>`);
			$wi__input_promise && _scope($scope4_id, {});
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", 0);
		$wi__input_promise && _resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html("<p>loading</p>");
		_if(() => {}, $scope2_id, "a", 1, 1, 0, 0, 1);
		_subscribe($n__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a2");
	}, void 0, "a4");
	_html(`<button>${_text_resume($scope0_id, "c", n)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a5");
	_scope($scope0_id, {
		g: n,
		i: $n__closures,
		h: $wi__input_promise && $input_promise__closures
	});
}, 1);
