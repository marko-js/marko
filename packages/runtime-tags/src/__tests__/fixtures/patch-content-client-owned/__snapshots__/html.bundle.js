// tags/card/index.marko
_shells({ b: "b;E l%;<section><h2> </h2><!></section>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<section><h2>${_text_resume($scope0_id, "a", input.title, void 0, $scope0_reason, 0)}</h2>`);
	_dynamic_tag($scope0_id, "b", input.content, {}, 2, 0, 0, _write_guard($scope0_reason, 1), $scope0_reason, 1);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_note = _write_guard($scope0_reason, 2), $wi__input_note = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let open = input.open;
	_html("<main>");
	_if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			card_default({
				title: input.title,
				content: _content("a1", () => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_html(`<em>${_text_resume($scope2_id, "a", input.note, $wg__input_note)}</em>`);
					_subscribe($wi__input_note && $input_note__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_note);
					$wg__input_note || _resume_branch($scope2_id);
				}, $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, { a: _write_if($scope0_reason, 1) && _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		f: input.title,
		g: input.note,
		h: open,
		j: $wi__input_note && $input_note__closures
	}) || (_filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "va4", input.note, !_server_guard($scope0_reason, 2)));
}, 1);
