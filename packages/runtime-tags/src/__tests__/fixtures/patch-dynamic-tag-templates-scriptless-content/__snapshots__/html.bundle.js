// tags/bold.marko
_shells({ b: "b;D ;<b> </b>" });
var bold_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<b>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</b>`);
	$scope0_page && _scope($scope0_id, {});
});

// tags/italic.marko
_shells({ c: "c;D ;<i> </i>" });
var italic_default = _template("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<i>${_patch_text($scope0_id, "a", input.label, void 0, $scope0_reason, 0)}</i>`);
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0 a7 a8;b%;<!><!><!>",
	a: "a !;b%;<!><!><!>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wg__input_bold__OR__input_label = _write_guard($scope0_reason, 2), $wi__input_tag__OR__input_bold__OR__input_label = _write_if($scope0_reason, 3), $wg__input_tag = _write_guard($scope0_reason, 4), $cg__input_label = _client_guard($scope0_reason, 6), $cg__input_bold = _client_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_bold__closures = /* @__PURE__ */ new Set();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_dynamic_tag($scope0_id, "a", input.tag, {}, _content_resume("a0", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const $scope1_page = _page_render();
		_dynamic_tag($scope1_id, "a", input.bold ? bold_default : italic_default, { label: input.label }, 0, 0, $wg__input_bold__OR__input_label, void 0, 1, $scope0_reason, 2);
		_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a1");
		$scope1_page && $wi__input_tag__OR__input_bold__OR__input_label && _subscribe(_unfilled_if($scope0_reason, 6) && $input_label__closures, _subscribe(_unfilled_if($scope0_reason, 5) && $input_bold__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$wg__input_bold__OR__input_label || $wi__input_tag__OR__input_bold__OR__input_label && _resume_branch($scope1_id);
	}, $scope0_id, ($scope) => $scope0_page ? [{
		f: input.label,
		e: input.bold
	}] : []), 0, $wg__input_tag, void 0, 2, $scope0_reason, 4);
	$scope0_page ? _scope($scope0_id, {
		e: _write_if($scope0_reason, 1) && input.bold,
		f: _write_if($scope0_reason, 0) && input.label,
		g: _write_if($scope0_reason, 5) && $input_bold__closures,
		h: _write_if($scope0_reason, 6) && $input_label__closures
	}) : (_filled_guard($scope0_reason, 5) && ($cg__input_label ? _patch_fill($scope0_id, "va2", input.bold, !_server_guard($scope0_reason, 5)) : _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va3", input.bold)), (_content_withheld("a0", $scope0_id) || $cg__input_label) && _content_withhold(input.bold), _filled_guard($scope0_reason, 6) && ($cg__input_bold ? _patch_fill($scope0_id, "va4", input.label, !_server_guard($scope0_reason, 6)) : _content_withheld("a0", $scope0_id) && _patch_fill($scope0_id, "va5", input.label)), (_content_withheld("a0", $scope0_id) || $cg__input_bold) && _content_withhold(input.label));
}, 1);
