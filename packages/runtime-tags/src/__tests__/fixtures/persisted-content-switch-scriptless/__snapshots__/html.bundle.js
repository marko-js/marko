// tags/widget/index.marko
var widget_default = _template_persisted("b", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	_html("<section>");
	_patch_dynamic_tag($scope0_id, "a", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "a", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html("</section>");
	$scope0_reason && writeScope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a1: "a1;Db%;<i>B:<!></i>",
	a2: "a2,<b>A</b>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_kind = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	widget_default({ content: _content_elide("a0", () => {
		_persisted_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope3_id = _scope_id();
				_html("<b>A</b>");
				$scope0_reason && writeScope($scope3_id, {});
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:<!>${_patch_text($scope2_id, "a", input.kind, $scope0_owned, 0)}${_el_resume($scope2_id, "a")}</i>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_kind__closures, writeScope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ce: 1
				}));
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, ["a2", "a1"]);
		$scope0_reason && _subscribe($input_kind__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id) });
	_html("</main>");
	$scope0_reason && writeScope($scope0_id, {
		d: input.kind,
		e: $input_kind__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [widget_default]);
