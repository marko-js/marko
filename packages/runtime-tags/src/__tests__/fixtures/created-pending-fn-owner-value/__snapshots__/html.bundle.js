// tags/card.marko
var card_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let open = true;
	const g = input.fn;
	_html(`<button>${_text_resume($scope0_id, "b", g())}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {
		e: input.fn,
		f: open
	});
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 0), $wg__input_promise = _write_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, (v) => {
			const $scope3_id = _scope_id();
			_html(_text_resume($scope3_id, "a", v, $wg__input_promise));
			$wi__input_promise && _scope($scope3_id, {});
		}, $wg__input_promise);
		$wi__input_promise && _subscribe($input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), "a2", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		card_default({ fn: _resume(function() {
			return "f:" + input.label;
		}, "a0", $scope1_id) });
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			a: $wi__input_label && _existing_scope($childScope)
		}), "a1", _write_guard($scope0_reason, 0));
		_write_guard($scope0_reason, 0) || _resume_branch($scope1_id);
	}, void 0, "a3");
	_scope($scope0_id, {
		d: input.label,
		f: $wi__input_label && $input_label__closures,
		g: $wi__input_promise && $input_promise__closures
	});
}, 1);
