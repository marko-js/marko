// tags/wrap.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
_shells({ b: "b;D%;<section><!></section>" });
var wrap_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {});
});

// template.marko
const $setup = _shell_setup([[], []], ["a>", $setup$1]);
_shells({
	a1: "a1;D ;<h5> </h5>",
	a0: "a0;D ;<h4> </h4>",
	a: /*@__PURE__*/ ((_w0) => `a${_shell_marker($setup)};${((_w0) => `/${_w0}&`)("D%l")};${_w0}`)($template)
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_useA__OR__input_record = _write_guard($scope0_reason, 0), $wi__input_useA__OR__input_record = _write_if($scope0_reason, 0), $cg__input_record = _client_guard($scope0_reason, 2), $cg__input_useA = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_useA__closures = /* @__PURE__ */ new Set();
	const $input_record__closures = /* @__PURE__ */ new Set();
	const Card = { content: _content_resume("a0", ({ record }) => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<h4>${_text_resume($scope2_id, "a", record.name, void 0, 4, 0)}</h4>`);
		_scope($scope2_id, {});
	}, $scope0_id) };
	const Other = { content: _content_resume("a1", ({ record }) => {
		const $scope3_id = _scope_id();
		_scope_reason();
		_html(`<h5>${_text_resume($scope3_id, "a", record.name, void 0, 4, 0)}</h5>`);
		_scope($scope3_id, {});
	}, $scope0_id) };
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "a", 1);
	wrap_default({ content: _content("a5", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.useA ? Card : Other, { record: input.record }, 1, 0, 0, $wg__input_useA__OR__input_record, $scope0_reason, 0);
		_patch_join_init($scope1_id, "a2", $scope0_reason, 0, _filled_guard($scope0_reason, 1) && ">d", _filled_guard($scope0_reason, 2) && ">e");
		$wi__input_useA__OR__input_record && _subscribe(_unfilled_if($scope0_reason, 2) && $input_record__closures, _subscribe(_unfilled_if($scope0_reason, 1) && $input_useA__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), $cg__input_useA && "a3", $wg__input_useA__OR__input_record), $cg__input_record && "a4", $wg__input_useA__OR__input_record);
		$wg__input_useA__OR__input_record || $wi__input_useA__OR__input_record && _resume_branch($scope1_id);
	}, $scope0_id) });
	_patch_child_end();
	_filled_guard($scope0_reason, 1) && $cg__input_record && _patch_write($scope0_id, "xd", input.useA);
	_filled_guard($scope0_reason, 2) && $cg__input_useA && _patch_write($scope0_id, "xe", input.record);
	_scope($scope0_id, {
		d: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.useA,
		e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.record,
		f: _unfilled_if($scope0_reason, 0) && Card,
		g: _unfilled_if($scope0_reason, 0) && Other,
		h: _write_if($scope0_reason, 1) && (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && $input_useA__closures,
		i: _write_if($scope0_reason, 2) && (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && $input_record__closures,
		a: _existing_scope($childScope)
	});
}, 1);
