// tags/grand/index.marko
_shells({ c: "c;D%;<div><!></div>" });
var grand_default = _template_persisted("c", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<div>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</div>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// tags/card/index.marko
_shells({ b: "b !b0;E l%b ;<section><h2> </h2><!><button>+</button></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, $scope0_owned, 0)}${_el_resume($scope0_id, "a")}</h2>`);
	if ($scope0_reason) _if(() => {}, $scope0_id, "b", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "c")}</section>`);
	_script($scope0_id, "b0");
	_patch_value($scope0_id, "b1", open, 1);
	$scope0_reason ? writeScope($scope0_id, {
		g: input.content,
		h: open
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "b0", input.content);
	_resume_branch($scope0_id);
}, 0, () => [grand_default]);

// template.marko
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason({ 0: _mask_group($scope0_owned, 0) });
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		title: input.title,
		content: _content_resume("a0", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_escape(input.note)}${_el_resume($scope1_id, "a")}</em>`);
			_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_reason ? writeScope($scope0_id, {
		e: input.note,
		f: $input_note__closures,
		a: _existing_scope($childScope)
	}) : _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a0", input.note);
}, 1, () => [card_default]);
