// tags/wrap.marko
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
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
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	const $tag = input.tag;
	const $input2 = { class: input.cls };
	_patch_dynamic_tag($scope0_id, "a", $tag, $input2, 0, 0, "a0", $scope0_owned, 0);
	_dynamic_tag($scope0_id, "a", $tag, $input2, _content_record("a0", $scope0_id), 0, _source_guard($scope0_reason, 0), 1);
	const $tag2 = input.wrap ? wrap_default : null;
	_patch_dynamic_tag($scope0_id, "b", $tag2, 0, 0, 0, "a1", $scope0_owned, 3);
	_dynamic_tag($scope0_id, "b", $tag2, {}, _content_elide("a1", () => {
		const $scope1_id = _scope_id();
		_persisted_reason();
		_html(_patch_text($scope1_id, "a", input.note, void 0, $scope0_owned, 4));
		_subscribe(_source_if($scope0_reason, 4) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _source_guard($scope0_reason, 3), 1);
	$scope0_reason && _scope($scope0_id, {
		e: input.tag,
		f: input.cls,
		i: input.note,
		j: $input_note__closures
	});
}, 1, 1);
