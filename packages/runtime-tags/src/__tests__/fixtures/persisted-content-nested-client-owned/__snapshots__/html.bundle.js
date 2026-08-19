// tags/grand/index.marko
var grand_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</div>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/child/index.marko
var child_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2>`);
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 1) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "b", $childScope);
	grand_default({ content: input.content });
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, { b: _existing_scope($childScope) });
}, 0, () => [grand_default]);

// template.marko
_shells({ a0: "a0;D ;<em> </em>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.title,
		f: input.note,
		g: open,
		i: $input_note__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.note));
	_resume_branch($scope0_id);
}, 1, () => [child_default]);
