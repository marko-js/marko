// tags/counter/index.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b: "b !;b%;<!><!><!>",
	b3: "b3 !b0;Db%l ;<span>Seen <!></span><button>+</button>"
});
var counter_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "a", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "b")}`);
			_script($scope1_id, "b0");
			_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "b1");
			const $countChange = input.onCount || void 0;
			_patch_let_change($scope1_id, "vb2", count, "wd", $countChange, $scope0_reason, 1, 1);
			_scope($scope1_id, {
				c: count,
				_: _scope_with_id($scope0_id),
				d: $countChange
			});
			return 0;
		}
	}, $scope0_id, "a", 1, $wg__input_show, void 0, void 0, void 0, ["b3"], $scope0_reason, 0);
	_scope($scope0_id, {
		e: (_unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 1)) && input.onCount,
		f: input.step
	}) || (_filled_guard($scope0_reason, 1) && _client_guard($scope0_reason, 0) && _patch_fill($scope0_id, "vb4", input.onCount, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 2) && _patch_write($scope0_id, "wf", input.step, !_server_guard($scope0_reason, 2)));
});

// template.marko
_shells({
	a: "a;E lDb%l%;<main><h1> </h1><p>Last <!></p><!></main>",
	a2: /*@__PURE__*/ (() => `a2${_shell_marker(_shell_setup([[], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const onCount = _resume((next) => {
		last = next;
	}, "a0", $scope0_id);
	_html(`<main><h1>${_text_resume($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h1><p>Last ${_text_resume($scope0_id, "b", last, 2)}</p>`);
	_for_of(["a", "b"], (name) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
		const $childScope = _peek_scope_id($scope1_id, "a", 0);
		counter_default({
			show: input.show,
			step: name === "a" ? 1 : 2,
			onCount
		});
		_patch_child_end();
		_client_guard($scope0_reason, 1) && _patch_init($scope1_id, "a1");
		_scope($scope1_id, {
			_: _write_if($scope0_reason, 1) && _scope_with_id($scope0_id),
			a: _existing_scope($childScope)
		});
	}, 0, $scope0_id, "c", 1, void 0, void 0, void 0, void 0, "a2", 0, 0);
	_html("</main>");
	_scope($scope0_id, {});
}, 1);
