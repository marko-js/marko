// tags/wrap/index.marko
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
	a0: "a0;D%;<div id=done><!> done</div>",
	a1: "a1;D%;<div id=done><!> done</div>",
	a2: "a2;b%;<!><!><!>",
	a3: "a3;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a !a7;${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_promise__OR__input_msg = _write_if($scope0_reason, 0), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(0);
	const $childScope = _patch_child($scope0_id, "c");
	wrap_default({ content: _content_elide("a3", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				const $scope3_id = _scope_id();
				_html(`<div id=done>${_patch_text($scope3_id, "a", input.msg, void 0, $scope0_reason, 2)} done</div>`);
				_unfilled_if($scope0_reason, 2) && _patch_init($scope3_id, "a4");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope3_id, { _: $wi__input_promise__OR__input_msg && _scope_with_id($scope2_id) }));
			}, 1, "a0");
			_unfilled_if($scope0_reason, 1) && _patch_init($scope2_id, "a5");
			$wi__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }));
			$wi__input_promise__OR__input_msg && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<em>loading</em>");
		}, void 0, "a6", void 0, "a2");
		$wi__input_promise__OR__input_msg && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_script($scope0_id, "a7");
	_patch_write($scope0_id, "wg", input.msg, 1);
	_patch_value($scope0_id, "va8", count, 1);
	$scope0_page && _scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.msg,
		h: count,
		j: _write_if($scope0_reason, 2) && $input_msg__closures,
		i: _write_if($scope0_reason, 1) && $input_promise__closures,
		c: _existing_scope($childScope)
	});
}, 1);
