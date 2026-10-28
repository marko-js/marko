// tags/page.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b3: "b3 b7!b0; D%c%c%;<button><!> <!> <!></button>",
	b4: "b4 b7!b0; D%c%c%;<button><!> <!> <!></button>",
	b: "b !;b%;<!><!><!>"
});
var page_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $likes__closures = /* @__PURE__ */ new Set();
	let likes = 3;
	_await($scope0_id, "a", input.promise, (v) => {
		const $scope1_id = _scope_id();
		let open = false;
		_html(`<button>${_text_resume($scope1_id, "b", v, 1, $scope0_reason, 0)} ${_text_resume($scope1_id, "c", likes, 2)} ${_text_resume($scope1_id, "d", "closed", 2)}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "b0");
		_patch_fill($scope1_id, "vb1", open, 1);
		_subscribe($likes__closures, _scope($scope1_id, { g: open }), "b2");
	}, 1, "b3", 1);
	_patch_fill($scope0_id, "vb5", likes, 1);
	_scope($scope0_id, {
		e: likes,
		f: $likes__closures
	});
	_resume_branch($scope0_id);
});

// template.marko
_shells({
	a: "a !;b%;<!><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			page_default({ promise: input.promise });
			_patch_child_end();
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, 1, 0, 0, ["a1"], $scope0_reason, 0);
	_scope($scope0_id, { e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.promise }) || _filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.promise, !_server_guard($scope0_reason, 1));
}, 1);
