// tags/counter.marko
const $template$1 = "<button> </button>";
const $walks$1 = " D l";
function fail() {
	throw new Error("boom");
}
const $setup$1 = [[], ["__tests__/tags/counter.marko_0"]];
_shells({ "__tests__/tags/counter.marko": "__tests__/tags/counter.marko !__tests__/tags/counter.marko_0; D ;<button> </button>" });
var counter_default = _template("__tests__/tags/counter.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", n ? fail() : "ok")}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/counter.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/counter.marko_0_n#2/fill", n, 1);
	_scope($scope0_id, { n }, "__tests__/tags/counter.marko", 0, { n: "1:6" });
});

// template.marko
const $template = "<main></main>";
const $walks = " b";
const $setup = [[], []];
_shells({
	"__tests__/template.marko_3*content": "__tests__/template.marko_3*content;D ;<em> </em>",
	"__tests__/template.marko_2_#text#0/await": "__tests__/template.marko_2_#text#0/await;D ;<em> </em>",
	"__tests__/template.marko_2*content": `__tests__/template.marko_2*content${_shell_marker([[], []], ["#childScope/1>", $setup$1])};${/*@__PURE__*/ ((_w0) => `b%b/${_w0}&`)($walks$1)};${/*@__PURE__*/ ((_w0) => `<!><!>${_w0}`)($template$1)}`,
	"__tests__/template.marko": "__tests__/template.marko; ;<main></main>",
	"__tests__/template.marko_1*shell": "__tests__/template.marko_1*shell;b%;<!><!><!>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_show__OR__input_promise = _write_if($scope0_reason, 0), $wg__input_show = _write_guard($scope0_reason, 1), $ui__input_show = _unfilled_if($scope0_reason, 1), $ui__input_promise2 = _unfilled_if($scope0_reason, 2);
	const $scope0_id = _scope_id();
	const $input_promise__closures = new Set();
	_html("<main>");
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			_try($scope1_id, "#text/0", () => {
				const $scope2_reason = _scope_reason();
				const $scope2_id = _scope_id(), $ui__input_promise = _unfilled_if($scope0_reason, 2);
				_await($scope2_id, "#text/0", input.promise, (v) => {
					const $scope3_id = _scope_id();
					_html(`<em>${_text_mark($scope3_id, "#text/0", v, 1, $scope0_reason, 2)}</em>`);
					_scope($scope3_id, {}, "__tests__/template.marko", "4:8");
				}, 1, "__tests__/template.marko_3*content", $ui__input_promise && 2);
				const $childScope = _peek_scope_id($scope2_id, "#childScope/1", 0);
				counter_default({});
				_patch_child_end();
				_unfilled_if($scope0_reason, 2) && _patch_subscribe($scope2_id, "__tests__/template.marko_2_input_promise#0:4/subscribe", 1);
				_subscribe($ui__input_promise && $input_promise__closures, _scope($scope2_id, {
					_: $wi__input_show__OR__input_promise && _scope_with_id($scope1_id),
					"#childScope/1": _existing_scope($childScope)
				}, "__tests__/template.marko", "3:6"), _client_guard($scope0_reason, 2) && "__tests__/template.marko_2_input_promise#0:4/subscribe", 0);
				_resume_branch($scope2_id);
			}, void 0, () => {}, 0, "__tests__/template.marko_1_#text#0/catch", "__tests__/template.marko_2*content");
			$wi__input_show__OR__input_promise && _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:4");
			return 0;
		}
	}, $scope0_id, "#main/0", 1, $wg__input_show, 1, 0, 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 1);
	_html(`</main>${_el_mark($scope0_id, "#main/0", $wg__input_show)}`);
	_scope($scope0_id, {
		input_promise: ($ui__input_show || $ui__input_promise2) && input.promise,
		"ClosureScopes:input_promise/5": _write_if($scope0_reason, 2) && ($ui__input_promise2 || $ui__input_show) && $input_promise__closures
	}, "__tests__/template.marko", 0, { input_promise: ["input.promise"] }) || _filled_guard($scope0_reason, 2) && $ui__input_show && _patch_write($scope0_id, "PatchMarkedWrite:input_promise", input.promise, !_server_guard($scope0_reason, 2)) && _client_guard($scope0_reason, 1) && _patch_subscribers($scope0_id, "__tests__/template.marko_0_input_promise#4/subscribers", "input_promise");
}, 1);
