// tags/wrap/index.marko
const $template = "<section><!></section>";
const $setup$1 = [[], []];
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
const $setup = _shell_setup([[], ["a8"]], ["c>", $setup$1]);
_shells({
	a1: "a1,<div id=done>done</div>",
	a2: "a2,<div id=done>done</div>",
	a3: "a3;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_msg = _write_guard($scope0_reason, 0), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise = _write_if($scope0_reason, 1), $wi__input_msg = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "c");
	wrap_default({ content: _content("a7", () => {
		_scope_reason();
		const $scope1_page = _page_render();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_await($scope3_id, "a", input.promise, () => {
				_scope_id();
				_html("<div id=done>done</div>");
			}, 1, "a1");
			$cg__input_promise && _patch_init($scope3_id, "a4");
			$scope1_page && $wi__input_promise && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope3_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a5", 0);
			$wi__input_promise && _resume_branch($scope3_id);
		}, () => {
			_scope_reason();
			const $scope2_page = _page_render();
			const $scope2_id = _scope_id();
			_html(`<em>loading ${_text_resume($scope2_id, "a", input.msg, $wg__input_msg * 2)}</em>`);
			$scope2_page && _subscribe($wi__input_msg && $input_msg__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), "a0", $wg__input_msg);
			$wg__input_msg || _resume_branch($scope2_id);
		}, void 0, "a6", void 0, "a3");
		$scope1_page && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_script($scope0_id, "a8");
	$scope0_page ? _scope($scope0_id, {
		f: input.msg,
		h: count,
		i: $wi__input_msg && $input_msg__closures,
		j: $wi__input_promise && _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		c: _existing_scope($childScope)
	}) : _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va9", input.msg, !_server_guard($scope0_reason, 0));
}, 1);
