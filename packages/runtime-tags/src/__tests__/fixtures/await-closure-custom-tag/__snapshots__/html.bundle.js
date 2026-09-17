// tags/child.marko
var child_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<div>${_text_resume($scope0_id, "b", input.q, _serialize_guard($scope0_reason, 0))} ${_text_resume($scope0_id, "c", input.on, _serialize_guard($scope0_reason, 1) * 2)}</div>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, {});
});

// tags/parent.marko
var parent_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $si__input_on__OR__input_onChange__OR__input_data_q = _serialize_if($scope0_reason, 1), $sg__input_on__OR__input_onChange__OR__input_data_q = _serialize_guard($scope0_reason, 1), $si__input_data_q = _serialize_if($scope0_reason, 4), $si__input_on__OR__input_onChange = _serialize_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_data_q__closures = /* @__PURE__ */ new Set();
	const $on__closures = /* @__PURE__ */ new Set();
	let on = input.on;
	_try($scope0_id, "a", _content_resume("c3", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_await($scope1_id, "a", resolveAfter(0, 4), () => {
			const $scope2_id = _scope_id();
			$si__input_data_q && $si__input_on__OR__input_onChange__OR__input_data_q && _script($scope2_id, "c0", $sg__input_on__OR__input_onChange__OR__input_data_q);
			$si__input_on__OR__input_onChange && $si__input_on__OR__input_onChange__OR__input_data_q && _script($scope2_id, "c1", $sg__input_on__OR__input_onChange__OR__input_data_q);
			_set_serialize_reason(_serialize_guard($scope0_reason, 4) << 1 | _serialize_guard($scope0_reason, 0) << 3);
			const $childScope = _peek_scope_id();
			child_default({
				q: input.data.q,
				on
			});
			$si__input_on__OR__input_onChange__OR__input_data_q && _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				a: _existing_scope($childScope)
			});
			$sg__input_on__OR__input_onChange__OR__input_data_q || $si__input_on__OR__input_onChange__OR__input_data_q && _resume_branch($scope2_id);
		}, $sg__input_on__OR__input_onChange__OR__input_data_q);
		$si__input_on__OR__input_onChange__OR__input_data_q && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id), { placeholder: attrTag({ content: _content_resume("c2", () => {
		_scope_reason();
		_scope_id();
		_html("loading...");
	}, $scope0_id) }) });
	$si__input_on__OR__input_onChange__OR__input_data_q && _scope($scope0_id, {
		d: _serialize_if($scope0_reason, 3) && input.on,
		e: _serialize_if($scope0_reason, 2) && input.onChange,
		k: $si__input_data_q && $input_data_q__closures,
		l: $si__input_on__OR__input_onChange && $on__closures
	});
	$si__input_on__OR__input_onChange__OR__input_data_q && _resume_branch($scope0_id);
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "a")}`);
	_set_serialize_reason(42 | _serialize_guard($scope0_reason, 0) << 9);
	const $childScope = _peek_scope_id();
	parent_default({
		data: input.data,
		on,
		onChange: _resume((_new_on) => {
			on = _new_on;
		}, "a0", $scope0_id)
	});
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: on,
		b: _existing_scope($childScope)
	});
}, 1);
