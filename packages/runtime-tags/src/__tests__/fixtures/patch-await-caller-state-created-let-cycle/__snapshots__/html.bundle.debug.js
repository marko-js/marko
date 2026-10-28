// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": "__tests__/tags/show-await.marko_1*content __tests__/tags/show-await.marko_1_b#5_a#6/init;D%c%l ;<p><!>|<!></p><button class=log>log</button>",
	"__tests__/tags/show-await.marko_0_#text#0/await": "__tests__/tags/show-await.marko_0_#text#0/await __tests__/tags/show-await.marko_1_b#5_a#6/init;D%c%l ;<p><!>|<!></p><button class=log>log</button>",
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_label = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let b = x;
		let a = {
			v: b,
			self: _resume(() => a, "__tests__/tags/show-await.marko_1/a", $scope1_id)
		};
		_html(`<p>${_text_resume($scope1_id, "#text/0", b, 1, _client_guard($scope0_reason, 0) << 1, 0)}|${_text_resume($scope1_id, "#text/1", input.label, 2, $scope0_reason, 1)}</p><button class=log>log</button>${_el_resume($scope1_id, "#button/2")}`);
		_script($scope1_id, "__tests__/tags/show-await.marko_1_a_v#8");
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchWrite:b", b, 1);
		_filled_guard($scope0_reason, 0) && _patch_write($scope1_id, "PatchWrite:a_v", a?.v, 1);
		_unfilled_if($scope0_reason, 1) && _patch_init($scope1_id, $cg__input_label ? "__tests__/tags/show-await.marko_1_input_label#0:4/init" : "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 1) && $input_label__closures, _scope($scope1_id, {
			b,
			a,
			a_v: a?.v
		}, "__tests__/tags/show-await.marko", "1:2", {
			b: "2:8",
			a: "3:8",
			a_v: ["a.v", "3:8"]
		}), $cg__input_label && "__tests__/tags/show-await.marko_1_input_label#0:4/subscribe");
	}, 1, "__tests__/tags/show-await.marko_1*content", _unfilled_if($scope0_reason, 0), 1);
	_scope($scope0_id, { "ClosureScopes:input_label/5": _write_if($scope0_reason, 1) && _unfilled_if($scope0_reason, 1) && $input_label__closures }, "__tests__/tags/show-await.marko", 0);
});

// template.marko
const $template = "<button class=swap>swap</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button class=swap>swap</button><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_p#0:7/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&b`)("b%c")};${/*@__PURE__*/ ((_w0) => `<!>${_w0}<!>`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let p = input.promise;
	_html(`<button class=swap>swap</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(2 | _mask_group($scope0_reason, 2) << 3);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			show_await_default({
				promise: p,
				label: input.label
			});
			_patch_child_end();
			_client_guard($scope0_reason, 2) && _patch_init($scope1_id, "__tests__/template.marko_1_input_label#0:6/init");
			_scope($scope1_id, {
				_: _scope_with_id($scope0_id),
				"#childScope/0": _existing_scope($childScope)
			}, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 1), 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.label,
		p: _write_if($scope0_reason, 1) && p
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		p: "1:6"
	}) || _filled_guard($scope0_reason, 2) && _client_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 2));
}, 1);
