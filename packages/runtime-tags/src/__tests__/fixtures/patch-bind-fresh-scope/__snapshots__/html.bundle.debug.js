// tags/store.marko
const $template$1 = "";
const $walks$1 = "";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/store.marko": "^__tests__/tags/store.marko !," });
_stateful_return("__tests__/tags/store.marko");
var store_default = _template("__tests__/tags/store.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "__tests__/tags/store.marko_0/_return", $scope0_id)
	};
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/store.marko_fill0", last, 1);
	return $return;
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], ["__tests__/template.marko_1"]], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}&D lDb%l b`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<p> </p><span>Seen <!></span><button>+</button>`)("")}`)()
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0, 1);
			let store = store_default({});
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_store#5/var");
			_patch_child_end();
			let count = 0;
			_html(`<p>${_text_resume($scope1_id, "#text/2", store.last)}</p><span>Seen ${_text_resume($scope1_id, "#text/3", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/4")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			const $countChange = store.set || void 0;
			_patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", count, 1);
			_patch_bind($scope1_id, "PatchWrite:TagVariableChange:count", $countChange);
			_scope($scope1_id, {
				count,
				"#childScope/0": _existing_scope($childScope),
				"TagVariableChange:count": $countChange
			}, "__tests__/template.marko", "1:2", {
				count: "4:8",
				"TagVariableChange:count": ["countChange", "4:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_reason, 0);
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
