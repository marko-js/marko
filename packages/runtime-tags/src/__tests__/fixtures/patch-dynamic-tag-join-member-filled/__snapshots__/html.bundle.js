// tags/one.marko
_shells({ b: "b;Db%;<i>one <!></i>" });
var one_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<i>one ${_patch_text($scope0_id, "a", input.id, 2, $scope0_reason, 0)}</i>`);
	_scope($scope0_id, {});
});

// tags/two.marko
_shells({ c: "c;Db%;<b>two <!></b>" });
var two_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<b>two ${_patch_text($scope0_id, "a", input.id, 2, $scope0_reason, 0)}</b>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({
	a4: "a4;D ;<p> </p>",
	a: "a !;b%b%;<!><!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_id = _write_guard($scope0_reason, 2), $wi__input_id = _write_if($scope0_reason, 2), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 0), $cg__input_id = _client_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.which ? one_default : two_default, { id: input.id }, 1, 0, 0, $wg__input_which__OR__input_id, $scope0_reason, 0);
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_patch_text($scope2_id, "a", input.id, void 0, $scope0_reason, 2)}</p>`);
		_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_id ? "a1" : "a2");
		_subscribe(_unfilled_if($scope0_reason, 2) && $input_id__closures, _scope($scope2_id, {
			_: $wi__input_id && _scope_with_id($scope0_id),
			Ch: $wi__input_id && 1
		}), "a2");
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_resume($scope1_id, "a", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_id);
		$wg__input_id || _resume_branch($scope1_id);
	}, void 0, "a3", void 0, "a4", 1);
	_filled_guard($scope0_reason, 1) && $cg__input_id && _patch_write($scope0_id, "xe", input.which);
	_patch_join_init($scope0_id, "a6", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && "e", _filled_guard($scope0_reason, 2) && "f");
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.which,
		f: input.id,
		h: $wi__input_id && $input_id__closures
	}) || (_filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va5", input.id, !_server_guard($scope0_reason, 2)), _client_guard($scope0_reason, 1) && _content_withhold(input.id));
}, 1);
