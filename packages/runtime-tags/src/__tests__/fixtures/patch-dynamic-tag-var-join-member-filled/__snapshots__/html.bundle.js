// tags/one.marko
_shells({ b: "b,<i>one</i>" });
var one_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	const $return = `one ${input.id}`;
	_html("<i>one</i>");
	return $return;
});

// tags/two.marko
_shells({ c: "c,<b>two</b>" });
var two_default = _template("c", (input) => {
	_scope_reason();
	_scope_id();
	const $return = `two ${input.id}`;
	_html("<b>two</b>");
	return $return;
});

// template.marko
_shells({
	a5: "a5;D ;<p> </p>",
	a: "a !;b1bD l%;<!><!><span> </span><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $cg__input_id = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	const $inputwhichOneTwo_scope = _peek_scope_id();
	let v = _dynamic_tag($scope0_id, "a", input.which ? one_default : two_default, { id: input.id }, 1, void 0, void 0, void 0, $scope0_reason, 0, void 0, void 0, void 0, "a0");
	_var($scope0_id, "b", $inputwhichOneTwo_scope, "a0");
	_html(`<span>${_text_resume($scope0_id, "c", v)}</span>`);
	_try($scope0_id, "d", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.id, 1, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_id ? "a2" : "a3");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope2_id, {
			_: $wi__input_id && _scope_with_id($scope0_id),
			Ck: $wi__input_id && 1
		}), "a3");
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_resume($scope1_id, "a", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a1", $wg__input_id);
		$wg__input_id || _resume_branch($scope1_id);
	}, void 0, "a4", void 0, "a5", 1);
	_filled_guard($scope0_reason, 1) && $cg__input_id && _patch_write($scope0_id, "xg", input.which);
	_patch_join_init($scope0_id, "a7", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && "g", _filled_guard($scope0_reason, 2) && "h");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		h: input.id,
		k: $wi__input_id && $input_id__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va6", input.id, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.id));
}, 1);
