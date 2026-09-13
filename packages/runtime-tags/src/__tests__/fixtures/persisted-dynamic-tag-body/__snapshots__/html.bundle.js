// tags/wrap.marko
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_owned, 0));
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0,hi",
	a1: "a1; ; ",
	a: "a;b%b%;<!><!><!><!>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_tag__OR__input_cls = _source_guard($scope0_reason, 0), $sg__input_wrap = _source_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $tag = input.tag;
	const $input2 = { class: input.cls };
	_dynamic_tag($scope0_id, "a", $tag, $input2, _content_shell("a0", $scope0_id), 0, $sg__input_tag__OR__input_cls, _patch_dynamic_tag($scope0_id, "a", $tag, $input2, "a0", 0, $scope0_owned, 0));
	const $tag2 = input.wrap ? wrap_default : null;
	_dynamic_tag($scope0_id, "b", $tag2, {}, _content_elide("a1", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(_patch_text($scope1_id, "a", input.note, void 0, $scope0_owned, 6));
		_subscribe(_unfilled_if($scope0_owned, 6) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
	}, $scope0_id), 0, $sg__input_wrap, _patch_dynamic_tag($scope0_id, "b", $tag2, 0, "a1", 0, $scope0_owned, 5));
	$scope0_reason && _scope($scope0_id, {
		e: _source_if($scope0_reason, 4) && input.tag,
		f: _source_if($scope0_reason, 3) && input.cls,
		i: _source_if($scope0_reason, 5) && input.note,
		j: $input_note__closures
	});
}, 1, 1);
