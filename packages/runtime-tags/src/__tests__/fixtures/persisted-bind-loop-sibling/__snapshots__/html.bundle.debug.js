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
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*shell;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&D%c%l%c`)(""), /*@__PURE__*/ ((_w0) => `${_w0}<p><!>:<!></p><!><!>`)("")),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell;b%;<!><!><!>",
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_store_set#9/init!__tests__/template.marko_3;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_show__closures = new Set();
	_for_of(["x", "y"], (name) => {
		const $scope1_id = _scope_id();
		const $for_content__store_set__closures = new Set();
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		let store = store_default({});
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_store#7/var");
		_owned_guard(0, 0) && _patch_write($scope1_id, "store", store, 1);
		_html(`<p>${_patch_text($scope1_id, "#text/2", name)}:${_text_resume($scope1_id, "#text/3", store.last, 2)}</p>`);
		_for_of(["y", "x"], (other) => {
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show && other === name) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "#button/1")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_patch_value($scope3_id, "__tests__/template.marko0", count, 1);
					_patch_bind($scope3_id, "TagVariableChange:count", store.set || void 0);
					_subscribe($for_content__store_set__closures, _scope($scope3_id, {
						count,
						_: _scope_with_id($scope2_id),
						"TagVariableChange:count": store.set || void 0
					}, "__tests__/template.marko", "5:6", {
						count: "6:12",
						"TagVariableChange:count": ["countChange", "6:12"]
					}));
					return 0;
				}
			}, $scope2_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_3*shell"], $scope0_owned, 0);
			_subscribe(_source_if($scope0_reason, 0) && $input_show__closures, _scope($scope2_id, {
				other,
				_: _scope_with_id($scope1_id)
			}, "__tests__/template.marko", "4:4", { other: "4:8" }));
		}, (n) => n, $scope1_id, "#text/4", 1, 1, 0, void 0, void 0, "__tests__/template.marko_2*shell", 0, 0);
		_scope($scope1_id, {
			name,
			store_set: store?.set,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope),
			"ClosureScopes:store_set": $for_content__store_set__closures
		}, "__tests__/template.marko", "1:2", {
			name: "1:6",
			store_set: ["store.set", "2:10"]
		});
	}, (n) => n, $scope0_id, "#text/0", 1, 1, 0, void 0, void 0, "__tests__/template.marko_1*shell", 0, 0);
	$scope0_reason && _scope($scope0_id, { "ClosureScopes:input_show": $input_show__closures }, "__tests__/template.marko", 0);
}, 1, () => [store_default]);
