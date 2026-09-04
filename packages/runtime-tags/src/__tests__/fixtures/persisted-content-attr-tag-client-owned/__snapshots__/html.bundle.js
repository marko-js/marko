// tags/card/index.marko
_shells({ b: "b !b0;D%b ;<section><!><button>+</button></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_header = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = true;
	_html("<section>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "a", input.header, {}, 0, 0, $sg__input_header);
			_scope($scope1_id, {});
			return 0;
		}
	}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</section>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", open, 1);
	$scope0_reason ? _scope($scope0_id, {
		e: input.header,
		f: open
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "b0", input.header);
}, 0, 0);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({ header: attrTag({ content: _content_resume("a0", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_html(`<em>${_text_resume($scope1_id, "a", input.note)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id) }) });
	_html("</main>");
	$scope0_reason ? _scope($scope0_id, {
		d: input.note,
		e: $input_note__closures,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.note);
}, 1, () => [card_default]);
