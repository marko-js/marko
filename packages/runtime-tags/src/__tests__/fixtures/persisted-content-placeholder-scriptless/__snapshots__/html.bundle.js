// tags/card/index.marko
_shells({
	b0: "b0,<span>done</span>",
	b1: "b1,<span>done</span>",
	b2: "b2;b%;<!><!><!>"
});
var card_default = _template_persisted("b", (input) => {
	const $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<section>");
	_try($scope0_id, "a", _content_resume("b2", () => {
		const $scope2_id = _scope_id();
		_persisted_reason();
		_await($scope2_id, "a", input.promise, () => {
			_scope_id();
			_html("<span>done</span>");
		}, 1, "b1");
		$scope0_reason && _subscribe($input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }));
		$scope0_reason && _resume_branch($scope2_id);
	}, $scope0_id), { placeholder: attrTag({ content: _content_elide("b3", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $sg__input_content);
		_subscribe(_source_if($scope0_reason, 0) && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$sg__input_content || _resume_branch($scope1_id);
	}, $scope0_id, 1) }) }, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {
		d: input.content,
		f: $input_content__closures,
		g: $input_promise__closures
	});
}, 0, 0);

// template.marko
_shells({ a0: "a0;D ;<em> </em>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({ 1: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		promise: input.promise,
		content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_owned, 1)}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason && _scope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
