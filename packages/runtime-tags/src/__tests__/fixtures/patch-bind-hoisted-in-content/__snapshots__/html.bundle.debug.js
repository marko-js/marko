// tags/store.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
const $setup$2 = [[], []];
_shells({ "__tests__/tags/store.marko": "^__tests__/tags/store.marko;D ;<p> </p>" });
var store_default = _template("__tests__/tags/store.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", last, void 0, 0, 0, 1)}</p>`);
	const $return = _resume((next) => {
		last = next;
	}, "__tests__/tags/store.marko_0/_return", $scope0_id);
	_scope($scope0_id, {}, "__tests__/tags/store.marko", 0);
	return $return;
});

// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template("__tests__/tags/frame.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</section>");
	_scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
});

// template.marko
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D%l");
const $setup = _shell_setup([[], []], ["#childScope/0>", $setup$1]);
_shells({
	"__tests__/template.marko": /*@__PURE__*/ (() => `__tests__/template.marko${_shell_marker($setup)};${((_w0) => `/${_w0}&%c`)("D%l")};${((_w0) => `${_w0}<!><!>`)($template$1)}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell !__tests__/template.marko_2;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $setLast_getter = _hoist($scope0_id, "__tests__/template.marko_0_setLast#1:2/hoist");
	const $frame_content__subscribers = new Set();
	_set_scope_reason(0);
	const $childScope2 = _peek_scope_id($scope0_id, "#childScope/0", 1);
	frame_default({ content: _content("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _scope_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		let setLast = store_default({});
		_patch_child_end();
		_subscribe($frame_content__subscribers, _scope($scope1_id, {
			setLast,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { setLast: "2:10" }));
		_assert_hoist(setLast);
	}, $scope0_id) });
	_patch_child_end();
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope2_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope2_id, "#button/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			const $countChange = $setLast_getter || void 0;
			_patch_let_change($scope2_id, "PatchFill:__tests__/template.marko_fill0", count, "PatchWrite:TagVariableChange:count", $countChange);
			_scope($scope2_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": $countChange
			}, "__tests__/template.marko", "4:2", {
				count: "5:8",
				"TagVariableChange:count": ["countChange", "5:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1", 1, _write_guard($scope0_reason, 0), void 0, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_reason, 0);
	_scope($scope0_id, {
		"ClosureScopes:1": $frame_content__subscribers,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1);
