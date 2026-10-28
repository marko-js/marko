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
	"__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ (() => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([[], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `0${_w0}& D l bD%c%l%c`)("")};${/*@__PURE__*/ ((_w0) => `${_w0}<label> </label><input><p><!>:<!></p><!><!>`)("")}`)(),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_store_set#1:11/init!__tests__/template.marko_3;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_show = _write_guard($scope0_reason, 2), $cg__input_show = _client_guard($scope0_reason, 2), $wi__input_keys__OR__input_show = _write_if($scope0_reason, 0), $cg__input_keys = _client_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	_for_of(input.keys, (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = new Set();
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0, 1);
		let store = store_default({});
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_store#9/var");
		_patch_child_end();
		const uid = _id("uid");
		_html(`<label${_attr("for", uid, $scope1_id, "#label/2", 0, 0)}>${_text_resume($scope1_id, "#text/3", name, void 0, $scope0_reason, 1)}</label>${_el_resume($scope1_id, "#label/2", 0)}<input${_attr("id", uid, $scope1_id, "#input/4", 0, 0)}>${_el_resume($scope1_id, "#input/4", 0)}<p>${_text_resume($scope1_id, "#text/5", name, void 0, $scope0_reason, 1)}:${_text_resume($scope1_id, "#text/6", store.last, 2)}</p>`);
		_for_of(input.keys.toReversed(), (other) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show && other === name) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "#button/1")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					const $countChange = store.set || void 0;
					_patch_fill($scope3_id, "PatchFill:__tests__/template.marko_fill1", count, 1);
					_patch_bind($scope3_id, "PatchWrite:TagVariableChange:count", $countChange);
					_subscribe($for_content__store_set__closures, _scope($scope3_id, {
						count,
						_: _scope_with_id($scope2_id),
						"TagVariableChange:count": $countChange
					}, "__tests__/template.marko", "6:6", {
						count: "7:12",
						"TagVariableChange:count": ["countChange", "7:12"]
					}));
					return 0;
				}
			}, $scope2_id, "#text/0", 1, $wg__input_show, void 0, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_reason, 0);
			_unfilled_if($scope0_reason, 2) && _patch_init($scope2_id, $cg__input_show ? "__tests__/template.marko_2_input_show#0:4/init" : "__tests__/template.marko_2_input_show#0:4/subscribe");
			_subscribe(_unfilled_if($scope0_reason, 2) && $input_show__closures, _scope($scope2_id, {
				"#LoopKey": _unfilled_if($scope0_reason, 2) && other,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "5:4", { "#LoopKey": "5:8" }), $cg__input_show && "__tests__/template.marko_2_input_show#0:4/subscribe", $wg__input_show);
		}, (n) => n, $scope1_id, "#text/7", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_2*shell", $scope0_reason, 1);
		$cg__input_keys && _patch_init($scope1_id, "__tests__/template.marko_1_input_keys#0:3/init");
		_scope($scope1_id, {
			"#LoopKey": _unfilled_if($scope0_reason, 2) && name,
			store_set: $wi__input_keys__OR__input_show && store?.set,
			_: $wi__input_keys__OR__input_show && _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope),
			"ClosureScopes:store_set/14": $for_content__store_set__closures
		}, "__tests__/template.marko", "1:2", {
			"#LoopKey": "1:6",
			store_set: ["store.set", "2:10"]
		});
	}, (n) => n, $scope0_id, "#text/0", 1, void 0, void 0, void 0, void 0, "__tests__/template.marko_1*shell", $scope0_reason, 1);
	_scope($scope0_id, {
		input_show: (_unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 2)) && input.show,
		"ClosureScopes:input_show/6": _write_if($scope0_reason, 2) && _unfilled_if($scope0_reason, 2) && $input_show__closures
	}, "__tests__/template.marko", 0, { input_show: ["input.show"] }) || _filled_guard($scope0_reason, 2) && $cg__input_keys && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.show, !_server_guard($scope0_reason, 2));
}, 1);
