// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b5: "b5 b4 b9!b1;D l ;<p> </p><button class=g>g</button>",
	b6: "b6 b4 b9!b1;D l ;<p> </p><button class=g>g</button>",
	b: "b !;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_label = _write_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_label__closures = /* @__PURE__ */ new Set();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let a = x;
		let g = a + ":" + input.label;
		_html(`<p>${_text_resume($scope1_id, "a", g)}</p><button class=g>g</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "b1");
		const $gChange = _resume(function(v) {
			a = v;
		}, "b0", $scope1_id) || void 0;
		_filled_guard($scope0_reason, 1) && _patch_fill($scope1_id, "vb2", a, 1);
		_patch_fill($scope1_id, "vb3", g, 1, _client_guard($scope0_reason, 0) << 1, 0);
		_patch_bind($scope1_id, "wh", $gChange);
		_subscribe($wi__input_label && $input_label__closures, _scope($scope1_id, {
			e: $wi__input_label && a,
			h: $gChange
		}), "b4");
	}, 1, "b5", _unfilled_if($scope0_reason, 1), 1);
	_scope($scope0_id, {
		e: input.label,
		f: $wi__input_label && $input_label__closures
	}) || _filled_guard($scope0_reason, 2) && _patch_fill($scope0_id, "vb7", input.label, !_server_guard($scope0_reason, 2));
});

// template.marko
_shells({
	a: "a !a2; b%;<button class=set>set</button><!><!>",
	a1: /*@__PURE__*/ (() => `a1${_shell_marker(_shell_setup([["a5"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let l = input.label;
	_html(`<button class=set>set</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(38 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({
				promise: input.promise,
				label: l
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "a0");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a1"], $scope0_reason, 1);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		g: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.promise,
		h: _write_if($scope0_reason, 1) && l
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "va3", input.promise, !_server_guard($scope0_reason, 2));
}, 1);
