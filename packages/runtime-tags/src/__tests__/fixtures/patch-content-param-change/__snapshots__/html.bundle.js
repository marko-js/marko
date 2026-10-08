// tags/labeler.marko
_shells({ b: "b;D ;<span> </span>" });
var labeler_default = _template_patch("b", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<span>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</span>`);
	const $return = "[" + input.title + "]";
	$scope0_page && _scope($scope0_id, {});
	return $return;
});

// tags/wrapper.marko
_shells({ c: "c !c0;b%b ;<!><!><button>+</button>" });
var wrapper_default = _template_patch("c", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	_dynamic_tag($scope0_id, "a", input.content, { value: n });
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}`);
	_script($scope0_id, "c0");
	_patch_value($scope0_id, "c2", n, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.content,
		f: n
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "c1", input.content);
});

// template.marko
var template_default = _template_patch("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_suffix = _source_guard($scope0_reason, 0), $wi__input_suffix = _source_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_suffix__closures = /* @__PURE__ */ new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope2);
	wrapper_default({ content: _content_resume("a2", ({ value }) => {
		const $scope1_reason = _scope_reason(), $wg__value = _source_guard($scope1_reason, 0);
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		let label = labeler_default({ title: value + input.suffix });
		_var($scope1_id, "b", $childScope, "a0");
		_html(`<p>${_text_resume($scope1_id, "c", label, $wg__input_suffix || $wg__value)}</p>`);
		_subscribe($wi__input_suffix && $input_suffix__closures, _scope($scope1_id, {
			f: $wi__input_suffix && value,
			_: _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		}), "a1", $wg__input_suffix || $wg__value);
		$wg__input_suffix || $wg__value || _resume_branch($scope1_id);
	}, $scope0_id) });
	$scope0_page ? _scope($scope0_id, {
		d: input.suffix,
		e: $input_suffix__closures,
		a: _existing_scope($childScope2)
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a3", input.suffix);
}, 1);
