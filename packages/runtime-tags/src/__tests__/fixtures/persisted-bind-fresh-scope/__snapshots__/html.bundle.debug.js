// tags/store.marko
const $template$1 = "";
const $walks$1 = "";
_shells({ "__tests__/tags/store.marko": "__tests__/tags/store.marko !," });
var store_default = _template_persisted("__tests__/tags/store.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	const $return = {
		last,
		set: _resume(function(next) {
			last = next;
		}, "__tests__/tags/store.marko_0/_return", $scope0_id)
	};
	_patch_value($scope0_id, "__tests__/tags/store.marko0", last, 1);
	return $return;
}, 0, 0);

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
_shells({
	"__tests__/template.marko": "__tests__/template.marko;b%;<!><!><!>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell !__tests__/template.marko_1;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D lDb%l b`)(""), /*@__PURE__*/ ((_w0) => `${_w0}<p> </p><span>Seen <!></span><button>+</button>`)(""))
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			const $childScope = _peek_scope_id();
			_patch_child($scope1_id, "#childScope/0", $childScope);
			let store = store_default({});
			_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_store#5/var");
			_owned_guard(0, 0) && _patch_write($scope1_id, "store", store, 1);
			let count = 0;
			_html(`<p>${_text_resume($scope1_id, "#text/2", store.last)}</p><span>Seen ${_text_resume($scope1_id, "#text/3", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/4")}`);
			_script($scope1_id, "__tests__/template.marko_1");
			_patch_value($scope1_id, "__tests__/template.marko0", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", store.set || void 0);
			_scope($scope1_id, {
				count,
				"#childScope/0": _existing_scope($childScope),
				"TagVariableChange:count": store.set || void 0
			}, "__tests__/template.marko", "1:2", {
				count: "4:8",
				"TagVariableChange:count": ["countChange", "4:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_1*shell"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1, () => [store_default]);
