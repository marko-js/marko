// tags/show-await.marko
const $template = "<!><!><!>";
const $setup = [[], []];
_shells({
	b8: "b8 !b3;D l b ;<p> </p><span></span><button class=set>set</button>",
	b9: "b9 !b3;D l b ;<p> </p><span></span><button class=set>set</button>",
	b: "b;b%;<!><!><!>"
});
var show_await_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "a", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let m = x;
		let n = x;
		let s = x;
		let c = s;
		_html(`<p>${_text_resume($scope1_id, "a", x, 1, $scope0_reason, 0)}</p><span></span>${_el_resume($scope1_id, "b")}<button class=set>set</button>${_el_resume($scope1_id, "c")}`);
		_script($scope1_id, "b2");
		_script($scope1_id, "b3");
		const $nChange = _resume(function(v) {
			m = v + "?";
		}, "b0", $scope1_id) || void 0;
		const $cChange = _resume(function(v) {
			s = v;
		}, "b1", $scope1_id) || void 0;
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "vb4", m, 1);
		_patch_let_change($scope1_id, "vb5", n, "wh", $nChange, $scope0_reason, 0);
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "vb6", s, 1);
		_patch_fill($scope1_id, "vb7", c, 1, _client_guard($scope0_reason, 0) << 1, 0);
		_patch_bind($scope1_id, "wk", $cChange);
		_scope($scope1_id, {
			f: m,
			g: n,
			i: s,
			j: c,
			h: $nChange,
			k: $cChange
		});
	}, 1, "b8", _unfilled_if($scope0_reason, 0), 1);
});

// template.marko
_shells({
	a: "a !a1; b%;<button class=swap>swap</button><!><!>",
	a0: /*@__PURE__*/ (() => `a0${_shell_marker(_shell_setup([["a3"], []], ["a>", $setup]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template)}`)()
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			show_await_default({ promise: p });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				a: _existing_scope($childScope)
			});
			return 0;
		}
	}, $scope0_id, "b", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["a0"], $scope0_reason, 1);
	_script($scope0_id, "a1");
	_scope($scope0_id, { g: _write_if($scope0_reason, 1) && p });
}, 1);
