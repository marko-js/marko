// tags/my-for.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b;b%;<!><!><!>",
	b1: "b1;b%;<!><!><!>"
});
var my_for_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_to__OR__input_content = _write_guard($scope0_reason, 0), $cg__input_to = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_for_to(input.to, 0, 1, (...args) => {
		const $scope1_id = _scope_id();
		_filled_guard($scope0_reason, 1) && _unfilled_if($scope0_reason, 0) && _patch_write($scope1_id, "xb", args, !_server_guard($scope0_reason, 1));
		_dynamic_tag($scope1_id, "a", input.content, [...args], 1, 0, 1, $wg__input_to__OR__input_content, $scope0_reason, 0, 0, 2);
		(_filled_guard($scope0_reason, 2) && !$cg__input_to || _filled_guard($scope0_reason, 1)) && _patch_join_init($scope1_id, "b0", $scope0_reason, 0, _filled_guard($scope0_reason, 2) && ">e", _filled_guard($scope0_reason, 1) && "b");
		_write_if($scope0_reason, 0) && _scope($scope1_id, {
			b: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && args,
			_: _scope_with_id($scope0_id)
		});
	}, 0, $scope0_id, "a", 1, void 0, void 0, void 0, void 0, "b1", $scope0_reason, 1);
	_filled_guard($scope0_reason, 2) && $cg__input_to ? _patch_fill($scope0_id, "vb2", input.content) : $cg__input_to && _patch_write($scope0_id, "xe", input.content, 1);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 0)) && input.content });
});

// template.marko
_shells({
	a1: "a1 a4!a0; D ;<button class=r> </button>",
	a: "a;b%;<!><!><!>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = /* @__PURE__ */ new Set();
	let count = 0;
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(0);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			my_for_default({
				to: 2,
				content: _content_elide("a1", (i) => {
					_scope_reason();
					const $scope2_id = _scope_id();
					_patch_write($scope2_id, "wd", i);
					_html(`<button class=r>${_text_resume($scope2_id, "b", count)}</button>${_el_resume($scope2_id, "a")}`);
					_script($scope2_id, "a0");
					_subscribe($count__closures, _scope($scope2_id, {
						d: i,
						_: _scope_with_id($scope1_id)
					}));
				}, $scope1_id)
			});
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["a2"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: count,
		f: $count__closures
	});
	$wg__input_show || _resume_branch($scope0_id);
}, 1);
