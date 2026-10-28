// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content !__tests__/tags/show-await.marko_1;D l b ;<p> </p><span></span><button class=set>set</button>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await !__tests__/tags/show-await.marko_1;D l b ;<p> </p><span></span><button class=set>set</button>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let m = x;
		let n = x;
		let s = x;
		let c = s;
		_html(`<p>${_text_resume($scope1_id, "#text/0", x, 1, $scope0_reason, 0)}</p><span></span>${_el_resume($scope1_id, "#span/1")}<button class=set>set</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/tags/show-await.marko_1_m#5_n#6_s#8_c#9");
		_script($scope1_id, "__tests__/tags/show-await.marko_1");
		const $nChange = _resume(function(v) {
			m = v + "?";
		}, "__tests__/tags/show-await.marko_1/valueChange", $scope1_id) || void 0;
		const $cChange = _resume(function(v) {
			s = v;
		}, "__tests__/tags/show-await.marko_1/valueChange2", $scope1_id) || void 0;
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/show-await.marko_fill0", m, 1);
		_patch_let_change($scope1_id, "PatchFill:__tests__/tags/show-await.marko_fill1", n, "PatchWrite:TagVariableChange:n", $nChange, $scope0_reason, 0);
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/tags/show-await.marko_fill2", s, 1);
		_patch_fill($scope1_id, "PatchFill:__tests__/tags/show-await.marko_fill3", c, 1, _client_guard($scope0_reason, 0) << 1, 0);
		_patch_bind($scope1_id, "PatchWrite:TagVariableChange:c", $cChange);
		_scope($scope1_id, {
			m,
			n,
			s,
			c,
			"TagVariableChange:n": $nChange,
			"TagVariableChange:c": $cChange
		}, "__tests__/tags/show-await.marko", "1:2", {
			m: "2:8",
			n: "3:8",
			s: "4:8",
			c: "5:8",
			"TagVariableChange:n": ["nChange", "3:8"],
			"TagVariableChange:c": ["cChange", "5:8"]
		});
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0), 1);
});

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=swap>swap</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_p#0:6/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_await_default({ promise: p });
			_patch_child_end();
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { p: _write_if($scope0_reason, 1) && p }, "__tests__/template.marko", 0, { p: "1:6" });
}, 1);
