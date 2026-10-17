// tags/card/index.marko
const $template = "<section><!></section>";
_shells({
	b0: "b0,<span>done</span>",
	b1: "b1,<span>done</span>",
	b2: "b2;b%;<!><!><!>",
	b: "b !;D%;<section><!></section>"
});
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_content = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_content__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	_html("<section>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope2_id = _scope_id();
		_await($scope2_id, "a", input.promise, () => {
			_scope_id();
			_html("<span>done</span>");
		}, 1, "b0");
		_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "b4");
		$wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope0_id) }), _client_guard($scope0_reason, 1) && "b4", 0);
		$wi__input_promise && _resume_branch($scope2_id);
	}, () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_dynamic_tag($scope1_id, "a", input.content, {}, 0, 0, $wg__input_content);
		_subscribe($wi__input_content && $input_content__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "b3", $wg__input_content);
		$wg__input_content || _resume_branch($scope1_id);
	}, void 0, "b5", void 0, "b2", 1);
	_html("</section>");
	$scope0_page ? _scope($scope0_id, {
		d: input.content,
		f: $wi__input_content && $input_content__closures,
		g: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "vb6", input.content, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: /*@__PURE__*/ (() => `a !;${((_w0) => `D/${_w0}&l`)("D%l")};${((_w0) => `<main>${_w0}</main>`)($template)}`)() });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	_html("<main>");
	_set_scope_reason(_mask_group($scope0_reason, 0) << 3);
	const $childScope = _patch_child($scope0_id, "a");
	card_default({
		promise: input.promise,
		content: _content_resume("a1", () => {
			_scope_reason();
			const $scope1_id = _scope_id();
			_html(`<em>${_patch_text($scope1_id, "a", input.note, void 0, $scope0_reason, 1)}</em>`);
			_subscribe(_unfilled_if($scope0_reason, 1) && $input_note__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }), "a0");
		}, $scope0_id)
	});
	_html("</main>");
	$scope0_page ? _scope($scope0_id, {
		e: input.note,
		f: _write_if($scope0_reason, 1) && $input_note__closures,
		a: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 1) && _patch_value($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 1));
}, 1);
