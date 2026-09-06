// tags/box/index.marko
_shells({ b: "b;D%;<div class=box><!></div>" });
var box_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</div>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;D ;<p> </p>",
	a: "a !a1;D%b ;<main><!><button>+</button></main>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let open = true;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		{
			const $scope1_id = _scope_id();
			_set_serialize_reason(1);
			const $childScope = _peek_scope_id();
			box_default({ content: _content_elide("a0", () => {
				_persisted_reason();
				const $scope2_id = _scope_id();
				_html(`<p>${_text_resume($scope2_id, "a", "t:" + input.title)}</p>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			}, $scope1_id) });
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$scope0_reason ? _scope($scope0_id, {
		e: input.title,
		f: open,
		g: $input_title__closures
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "a0", input.title);
}, 1, () => [box_default]);
