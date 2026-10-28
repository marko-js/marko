// tags/wrap/index.marko
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
const $setup = _shell_setup([[], ["a9"]], ["c>", $setup$1]);
_shells({
	a2: "a2",
	a3: "a3;D%;<div id=done><!> done</div>",
	a4: "a4;D%;<div id=done><!> done</div>",
	a5: "a5;b%;<!><!><!>",
	a: /*@__PURE__*/ (() => `a${_shell_marker($setup)};${((_w0) => ` D l/${_w0}&`)("D%l")};${((_w0) => `<button> </button>${_w0}`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_msg = _client_guard($scope0_reason, 2), $cg__input_promise = _client_guard($scope0_reason, 1), $wi__input_promise__OR__input_msg = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_msg__closures = /* @__PURE__ */ new Set();
	const $input_promise__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_html(`<button>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}`);
	_set_scope_reason(0);
	const $childScope = _peek_scope_id($scope0_id, "c", 0);
	wrap_default({ content: _content("a8", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_try($scope1_id, "a", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "a", input.promise, () => {
				const $scope3_id = _scope_id();
				_html(`<div id=done>${_text_resume($scope3_id, "a", input.msg, 1, $scope0_reason, 2)} done</div>`);
				$cg__input_msg && _patch_init($scope3_id, "a0");
				_subscribe(_unfilled_if($scope0_reason, 2) && $input_msg__closures, _scope($scope3_id, {}), $cg__input_msg && "a1");
			}, 1, "a3");
			$cg__input_promise && _patch_init($scope2_id, "a6");
			$wi__input_promise__OR__input_msg && _subscribe(_unfilled_if($scope0_reason, 1) && $input_promise__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }), $cg__input_promise && "a7", 0);
			$wi__input_promise__OR__input_msg && _resume_branch($scope2_id);
		}, () => {
			_scope_reason();
			_scope_id();
			_html("<em>loading</em>");
		}, void 0, "a2", void 0, "a5", 0, 0, 2);
		$wi__input_promise__OR__input_msg && _scope($scope1_id, { _: _scope_with_id($scope0_id) });
	}, $scope0_id) });
	_patch_child_end();
	_script($scope0_id, "a9");
	_scope($scope0_id, {
		h: count,
		j: _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_msg__closures,
		i: _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_promise__closures,
		c: _existing_scope($childScope)
	});
}, 1);
