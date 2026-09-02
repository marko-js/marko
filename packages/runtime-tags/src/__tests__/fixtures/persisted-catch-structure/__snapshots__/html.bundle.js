// template.marko
_shells({
	a0: "a0,<span>ok</span>",
	a1: "a1,<span>ok</span>",
	a2: "a2;b%;<!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_detail = _source_guard($scope0_reason, 0), $si__input_detail = _source_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_detail__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html("<main>");
	_try($scope0_id, "a", _content_resume("a2", () => {
		const $scope3_id = _scope_id();
		_persisted_reason();
		_await($scope3_id, "a", input.promise, () => {
			_scope_id();
			_html("<span>ok</span>");
		}, 1, "a1");
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope3_id);
	}, $scope0_id), { catch: attrTag({ content: _content_resume("a3", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.detail) {
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", input.detail)}</p>`);
				_subscribe($si__input_detail && $input_detail__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ci: 1
				}));
				return 0;
			}
		}, $scope1_id, "a", $sg__input_detail, $sg__input_detail, $sg__input_detail, 0, 1);
		_subscribe($si__input_detail && $input_detail__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) }) }, 1);
	_html(`<button>${_text_resume($scope0_id, "c", count)}</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a4");
	$scope0_reason ? _scope($scope0_id, {
		f: input.detail,
		h: count,
		i: $input_detail__closures,
		j: $input_promise__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.detail);
	_resume_branch($scope0_id);
}, 1, 0);
