// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_which__OR__input_id = _write_guard($scope0_reason, 0), $wg__input_id = _write_guard($scope0_reason, 1), $wi__input_id = _write_if($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_id__closures = /* @__PURE__ */ new Set();
	_html("<div>");
	const $show = input.which ? input.id : "";
	_show_start($show, $wg__input_which__OR__input_id, $wg__input_which__OR__input_id, "</div>");
	_html("shown");
	_show_end($scope0_id, "a", $show, $wg__input_which__OR__input_id, $wg__input_which__OR__input_id, "</div>");
	_try($scope0_id, "b", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_html(`<p>${_text_resume($scope2_id, "a", input.id, $wg__input_id)}</p>`);
		$wi__input_id && _subscribe($input_id__closures, _scope($scope2_id, {
			_: _scope_with_id($scope0_id),
			Ch: 1
		}), "a1", $wg__input_id);
		$wg__input_id || $wi__input_id && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_html(`loading ${_text_resume($scope1_id, "a", input.id, $wg__input_id * 2)}`);
		_subscribe($wi__input_id && $input_id__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0", $wg__input_id);
		$wg__input_id || _resume_branch($scope1_id);
	}, void 0, "a2");
	_scope($scope0_id, {
		e: $wi__input_id && input.which,
		f: input.id,
		h: $wi__input_id && $input_id__closures
	});
}, 1);
