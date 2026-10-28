// tags/show-await.marko
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_promise = _write_guard($scope0_reason, 1), $wg__input_label = _write_guard($scope0_reason, 2), $wi__input_promise__OR__input_label = _write_if($scope0_reason, 0), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		_html(`<p>${_text_resume($scope1_id, "a", input.label, $wg__input_label)}:${_text_resume($scope1_id, "b", x, $wg__input_promise * 2)}</p>`);
		$wi__input_promise__OR__input_label && _subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {}), "b0", $wg__input_promise || $wg__input_label);
		$wg__input_promise || $wg__input_label || $wi__input_promise__OR__input_label && _resume_branch($scope1_id);
	}, _write_guard($scope0_reason, 0));
	$wi__input_label && _scope($scope0_id, { f: $input_label__closures });
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_title = _write_guard($scope0_reason, 0), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 2), $wi__input_label = _write_if($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	const $p__closures = /* @__PURE__ */ new Set();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", input.title, (title) => {
			const $scope2_id = _scope_id();
			_html(`<h1>${_text_resume($scope2_id, "a", title, $wg__input_title)}</h1>`);
			_try($scope2_id, "b", () => {
				_scope_reason();
				const $scope3_id = _scope_id();
				_set_scope_reason(10 | _write_guard($scope0_reason, 1) << 5);
				const $childScope = _peek_scope_id();
				show_await_default({
					promise: p,
					label: input.label
				});
				_subscribe($p__closures, _subscribe($wi__input_label && $input_label__closures, _scope($scope3_id, {
					_: _scope_with_id($scope2_id),
					a: _existing_scope($childScope)
				}), "a0"), "a1");
			}, () => {
				_scope_reason();
				_scope_id();
				_html("<em>inner</em>");
			}, void 0, "a2");
			_scope($scope2_id, {});
		});
		_await($scope1_id, "b", input.note, (note) => {
			const $scope6_id = _scope_id();
			_html(`<small>${_text_resume($scope6_id, "a", note, $wg__input_note)}</small>`);
			$wi__input_note && _scope($scope6_id, {});
		}, $wg__input_note);
		_subscribe($wi__input_note && $input_note__closures, _subscribe($wi__input_title && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a3", 0), "a4", 0);
		_resume_branch($scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<em>outer</em>");
	}, void 0, "a5");
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		k: $wi__input_label && $input_label__closures,
		m: $p__closures,
		j: $wi__input_title && $input_title__closures,
		l: $wi__input_note && $input_note__closures
	});
}, 1);
