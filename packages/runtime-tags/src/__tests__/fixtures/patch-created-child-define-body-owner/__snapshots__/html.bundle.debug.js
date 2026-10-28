// tags/child.marko
const $Count_content__walks = "D l";
const $Count_content__template = "<p> </p>";
const $template$1 = /*@__PURE__*/ ((_w0) => `<!>${_w0}<button>+</button>`)($Count_content__template);
const $walks$1 = /*@__PURE__*/ ((_w0) => `b/${_w0}& b`)($Count_content__walks);
const $setup$1 = [["#childScope/0>__tests__/tags/child.marko_1_n#0:2/init"], ["__tests__/tags/child.marko_0"]];
_shells({
	"__tests__/tags/child.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/tags/child.marko_1*content __tests__/tags/child.marko_1_n#0:2/init;${_w0};${_w1}`)($Count_content__walks, $Count_content__template),
	"~__tests__/tags/child.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `~__tests__/tags/child.marko_1*content __tests__/tags/child.marko_1_n#0:2/init;${_w0};${_w1}`)($Count_content__walks, $Count_content__template),
	"__tests__/tags/child.marko": /*@__PURE__*/ (() => `__tests__/tags/child.marko #childScope/0>__tests__/tags/child.marko_1_n#0:2/init!__tests__/tags/child.marko_0;${((_w0) => `b/${_w0}& b`)($Count_content__walks)};${((_w0) => `<!>${_w0}<button>+</button>`)($Count_content__template)}`)()
});
var child_default = _template("__tests__/tags/child.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	const Count = { content: _content("__tests__/tags/child.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", n)}</p>`);
		_subscribe($n__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/child.marko", "2:2"), "__tests__/tags/child.marko_1_n#0:2/subscribe");
	}, $scope0_id, 1) };
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0);
	Count.content({});
	_patch_child_end();
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/tags/child.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/child.marko_fill0", n, 1);
	_scope($scope0_id, {
		n,
		"ClosureScopes:n/3": $n__closures,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/tags/child.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!>${_w0}`)($template$1)}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			child_default({});
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _existing_scope($childScope) }, "__tests__/template.marko", "1:2");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
