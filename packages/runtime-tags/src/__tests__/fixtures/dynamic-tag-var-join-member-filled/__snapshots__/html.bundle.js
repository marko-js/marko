// tags/one.marko
var one_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const $return = `one ${input.id}`;
	_html("<i>one</i>");
	return $return;
});

// tags/two.marko
var two_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	const $return = `two ${input.id}`;
	_html("<b>two</b>");
	return $return;
});

// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 0), $wi__input_id = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	const $inputwhichOneTwo_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "a", input.which ? one_default : two_default, { id: input.id });
	_var($scope0_id, "b", $inputwhichOneTwo_scope, "a0");
	_html(`<span>${_text_resume($scope0_id, "c", v)}</span>`);
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.id, $wg__input_id)}</p>`);
		$wi__input_id && _subscribe($input_id__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ck: 1
		}), "a2", $wg__input_id);
		$wg__input_id || $wi__input_id && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_resume($scope1_id, "a", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_id);
		$wg__input_id || _resume_branch($scope1_id);
	}, void 0, "a3");
	_scope($scope0_id, {
		g: $wi__input_id && input.which,
		h: input.id,
		k: $wi__input_id && $input_id__closures
	});
}, 1);
