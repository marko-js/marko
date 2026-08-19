// tags/card/index.marko
var card_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section><header>");
	_patch_dynamic_tag($scope0_id, "a", input.header, $scope0_owned, 1);
	_dynamic_tag$1($scope0_id, "a", input.header, {}, 0, 0, _source_guard($scope0_reason, 1), 1);
	_html("</header><footer>");
	_patch_dynamic_tag($scope0_id, "b", input.footer, $scope0_owned, 2);
	_dynamic_tag$1($scope0_id, "b", input.footer, {}, 0, 0, _source_guard($scope0_reason, 2), 1);
	_html("</footer></section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0,static",
	a1: "a1;D ;<b> </b>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_h__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	card_default({
		header: attrTag({ content: _content_elide("a1", () => {
			_persisted_reason();
			const $scope1_id = _scope_id();
			_html(`<b>${_patch_text($scope1_id, "a", input.h, $scope0_owned, 0)}${_el_resume($scope1_id, "a")}</b>`);
			_subscribe(_source_if($scope0_reason, 0) && $input_h__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
			_resume_branch($scope1_id);
		}, $scope0_id) }),
		footer: attrTag({ content: _content_elide("a0", () => {
			_persisted_reason();
			_scope_id();
			_html("static");
		}, $scope0_id) })
	});
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		e: $input_h__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [card_default]);
