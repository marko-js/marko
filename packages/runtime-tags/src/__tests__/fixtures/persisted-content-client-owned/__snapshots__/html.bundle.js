// tags/card/index.marko
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_patch_text($scope0_id, "a", input.title, void 0, $scope0_owned, 0)}</h2>`);
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "b", $tag, 0, 0, 0, 0, $scope0_owned, 1);
	_dynamic_tag($scope0_id, "b", $tag, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<em> </em>",
	a: "a !a1;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let open = input.open;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			card_default({
				title: input.title,
				content: _content_elide("a0", () => {
					_persisted_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "a", input.note)}</em>`);
					_subscribe(_source_if($scope0_reason, 1) && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
					_resume_branch($scope2_id);
				}, $scope1_id)
			});
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		f: input.title,
		g: input.note,
		h: open,
		j: $input_note__closures
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title), _owned_guard($scope0_owned, 1) && _patch_value($scope0_id, "a1", input.note));
	_resume_branch($scope0_id);
}, 1, () => [card_default]);
