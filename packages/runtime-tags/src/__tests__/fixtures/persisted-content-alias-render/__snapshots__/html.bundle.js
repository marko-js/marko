// tags/card/index.marko
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const { content, title } = input;
	_html(`<section><h2>${_patch_text($scope0_id, "a", title, $scope0_owned, 1)}${_el_resume($scope0_id, "a")}</h2>`);
	_patch_dynamic_tag($scope0_id, "b", content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "b", content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
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
		title: input.title,
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
		f: $input_note__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
