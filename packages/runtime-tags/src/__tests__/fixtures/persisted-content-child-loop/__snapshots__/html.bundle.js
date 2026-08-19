// tags/card/index.marko
_shells({ b0: "b0;D%b%;<li><!><!></li>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_count__OR__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<ul>");
	_for_of(input.count, (i) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_patch_text($scope1_id, "a", i, $scope0_owned, 1)}${_el_resume($scope1_id, "a")}`);
		_patch_dynamic_tag($scope1_id, "b", input.content, $scope0_owned, 2);
		_dynamic_tag$1($scope1_id, "b", input.content, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
		_html("</li>");
		writeScope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, 0, $scope0_id, "a", 1, $sg__input_count__OR__input_content, _source_guard($scope0_reason, 1), void 0, void 0, "b0");
	_html(`</ul>${_el_resume($scope0_id, "a", $sg__input_count__OR__input_content)}`);
	$scope0_reason && writeScope($scope0_id, { e: input.content });
}, 0, 0);

// template.marko
_shells({ a0: "a0;D ;<em> </em>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({
		0: _mask_group($scope0_owned, 0),
		1: _mask_group($scope0_owned, 0)
	});
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		count: input.count,
		content: _content_elide("a0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, $scope0_owned, 1)}${_el_resume($scope1_id, "a")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
