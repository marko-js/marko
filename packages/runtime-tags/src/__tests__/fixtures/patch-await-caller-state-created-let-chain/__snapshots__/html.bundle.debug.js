// tags/v:show-await.marko.css
var v_show_await_marko_default = "\n    .v { color: var(--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0); }\n  ";

// tags/card.marko
const $template$2 = "<p> </p><button>log</button>";
const $walks$2 = "D l b";
const $setup$2 = [[], ["__tests__/tags/card.marko_0_o_label#7"]];
_shells({ "__tests__/tags/card.marko": "__tests__/tags/card.marko !__tests__/tags/card.marko_0_o_label#7;D l ;<p> </p><button>log</button>" });
var card_default = _template("__tests__/tags/card.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let a = input.label;
	let o = { label: a };
	_html(`<p>${_text_resume($scope0_id, "#text/0", o.label, 1, _client_guard($scope0_reason, 0) << 1, 0)}</p><button>log</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/card.marko_0_o_label#7");
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchWrite:o_label", o?.label, 1);
	_scope($scope0_id, { o_label: o?.label }, "__tests__/tags/card.marko", 0, { o_label: ["o.label", "2:6"] });
});

// tags/show-await.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
const $setup$1 = [[], []];
_shells({
	"__tests__/tags/show-await.marko_1*content": /*@__PURE__*/ (() => `__tests__/tags/show-await.marko_1*content${_shell_marker(_shell_setup([[], []], ["#childScope/4>", $setup$2]))};${/*@__PURE__*/ ((_w0) => ` bD%c%c%l/${_w0}&`)($walks$2)};${/*@__PURE__*/ ((_w0) => `<style></style><p class=v><!>|<!>|<!></p>${_w0}`)($template$2)}`)(),
	"__tests__/tags/show-await.marko_0_#text#0/await": /*@__PURE__*/ (() => `__tests__/tags/show-await.marko_0_#text#0/await${_shell_marker(_shell_setup([[], []], ["#childScope/4>", $setup$2]))};${((_w0) => ` bD%c%c%l/${_w0}&`)($walks$2)};${((_w0) => `<style></style><p class=v><!>|<!>|<!></p>${_w0}`)($template$2)}`)(),
	"__tests__/tags/show-await.marko": "__tests__/tags/show-await.marko;b%;<!><!><!>"
});
var show_await_default = _template("__tests__/tags/show-await.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_promise = _client_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_await($scope0_id, "#text/0", input.promise, (x) => {
		const $scope1_id = _scope_id();
		let a = x;
		let b = a;
		let c = b;
		let d = c;
		_html(`${_style_html(`--M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0:${_escape_style_value(c, $scope1_id, "PatchStyle:#style/0 --M_packages-1bruntime-19tags-1bsrc-1b__tests__-1bfixtures-1bpatch-19await-19caller-19state-19created-19let-19chain-1btags-1bshow-19await-1amarko_0", $cg__input_promise << 1, 0)};`)}${_el_resume($scope1_id, "#style/0")}<p class=v>${_text_resume($scope1_id, "#text/1", b, 1, $cg__input_promise << 1, 0)}|${_text_resume($scope1_id, "#text/2", c, 2, $cg__input_promise << 1, 0, 1)}|${_text_resume($scope1_id, "#text/3", d, 2, $cg__input_promise << 1, 0, 1)}</p>`);
		_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/4", 0);
		card_default({ label: x });
		_patch_child_end();
		_scope($scope1_id, { "#childScope/4": _existing_scope($childScope) }, "__tests__/tags/show-await.marko", "1:2");
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
