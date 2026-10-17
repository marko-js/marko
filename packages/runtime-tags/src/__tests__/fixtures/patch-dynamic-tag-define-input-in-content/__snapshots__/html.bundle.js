// tags/wrap.marko
const $template = "<section><!></section>";
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 0, 0, $wg__input_content, void 0, 2, $scope0_reason, 0);
	_html("</section>");
	$scope0_page && _scope($scope0_id, {});
});

// template.marko
_shells({
	a0: "a0,",
	a1: "a1,",
	a2: "a2;b%;<!><!><!>",
	a: /*@__PURE__*/ ((_w0) => `a;${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 0), $wi__input_useA__OR__input_record = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_useA__closures = /* @__PURE__ */ new Set();
	const $input_record__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("a1", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_patch_text($scope2_id, "a", record.name)}</h4>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a0", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_patch_text($scope3_id, "a", record.name)}</h5>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a");
	wrap_default({ content: _content_elide("a2", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.useA ? Card : Other, { record: input.record }, 0, 0, $wg__input_useA__OR__input_record, void 0, 1, $scope0_reason, 0);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, "a3");
		_unfilled_if($scope0_reason, 2) && _patch_init($scope1_id, "a4");
		$wi__input_useA__OR__input_record && _subscribe(_unfilled_if($scope0_reason, 2) && $input_record__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_useA__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) })));
		$wg__input_useA__OR__input_record || $wi__input_useA__OR__input_record && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_write($scope0_id, "wd", input.useA, 1);
	_patch_write($scope0_id, "we", input.record, 1);
	_patch_write($scope0_id, "wf", Card, 1);
	_patch_write($scope0_id, "wg", Other, 1);
	$scope0_page && _scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.record,
		f: _unfilled_if($scope0_reason, 0) && Card,
		g: _unfilled_if($scope0_reason, 0) && Other,
		h: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_useA__closures,
		i: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_record__closures,
		a: _existing_scope($childScope)
	});
}, 1);
