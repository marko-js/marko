// tags/widget/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a;${((_w0) => `D/${_w0}&l`)("D%l")};${((_w0) => `<main>${_w0}</main>`)($template)}`)(),
	a1: "a1;Db%;<i>B:<!></i>",
	a2: "a2,<b>A</b>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_kind = _write_if($scope0_reason, 0), $wg__input_kind = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	widget_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope3_id = _scope_id();
				_html("<b>A</b>");
				$wi__input_kind && _scope($scope3_id, {});
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_patch_text($scope2_id, "a", input.kind, 2, $scope0_reason, 0)}</i>`);
				_unfilled_if($scope0_reason, 0) && _patch_init($scope2_id, "a3");
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: $wi__input_kind && _scope_with_id($scope1_id),
					Ce: $wi__input_kind && 1
				}));
				return 1;
			}
		}, $scope1_id, "a", 1, $wg__input_kind, void 0, void 0, void 0, ["a2", "a1"], $scope0_reason, 0);
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, "a4");
		$wi__input_kind && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$wg__input_kind || $wi__input_kind && _resume_branch($scope1_id);
	}, $scope0_id) });
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		e: $wi__input_kind && $input_kind__closures,
		a: _existing_scope($childScope)
	});
}, 1);
