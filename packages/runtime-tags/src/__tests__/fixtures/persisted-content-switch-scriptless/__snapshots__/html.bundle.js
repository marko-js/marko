// tags/widget/index.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var widget_default = _template_persisted("b", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _source_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_dynamic_tag($scope0_id, "a", $tag, {}, 0, 0, $sg__input_content, _patch_dynamic_tag($scope0_id, "a", $tag, 0, 0, 0, $scope0_reason, 0));
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
}, 0, 0);

// template.marko
_shells({
	a0: "a0;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0, _w1) => `a;${_w0};${_w1}`)(((_w0) => `D/${_w0}&l`)("D%l"), ((_w0) => `<main>${_w0}</main>`)($template)),
	a1: "a1;Db%;<i>B:<!></i>",
	a2: "a2,<b>A</b>"
});
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $sg__input_kind = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_kind__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_serialize_reason(0);
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "a", $childScope);
	widget_default({ content: _content_elide("a0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (input.kind === "a") {
				const $scope3_id = _scope_id();
				_html("<b>A</b>");
				$scope0_page && _scope($scope3_id, {});
				return 0;
			} else if (input.kind === "b") {
				const $scope2_id = _scope_id();
				_html(`<i>B:${_patch_text($scope2_id, "a", input.kind, 2, $scope0_reason, 0)}</i>`);
				_subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope2_id, {
					_: _scope_with_id($scope1_id),
					Ce: 1
				}));
				return 1;
			}
		}, $scope1_id, "a", 1, $sg__input_kind, $sg__input_kind, void 0, void 0, ["a2", "a1"], $scope0_reason, 0);
		$scope0_page && _subscribe(_unfilled_if($scope0_reason, 0) && $input_kind__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }));
		$sg__input_kind || $scope0_page && _resume_branch($scope1_id);
	}, $scope0_id) });
	_html("</main>");
	$scope0_page && _scope($scope0_id, {
		d: _source_if($scope0_reason, 0) && input.kind,
		e: $input_kind__closures,
		a: _existing_scope($childScope)
	});
}, 1, () => [widget_default]);
