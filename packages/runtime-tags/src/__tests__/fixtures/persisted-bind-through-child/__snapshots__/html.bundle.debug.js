// tags/store.marko
const $template$2 = "";
const $walks$2 = "";
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

// tags/child.marko
const $template$1 = "<!><!><!>";
const $walks$1 = "b%c";
_shells({
	"__tests__/tags/child.marko": "__tests__/tags/child.marko !;b%;<!><!><!>",
	"__tests__/tags/child.marko_1*shell": "__tests__/tags/child.marko_1*shell !__tests__/tags/child.marko_1;Db%l ;<span>Seen <!></span><button>+</button>"
});
var child_default = _template_persisted("__tests__/tags/child.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	_if(() => {
		if (input.show) {
			const $scope1_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope1_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope1_id, "#button/1")}`);
			_script($scope1_id, "__tests__/tags/child.marko_1");
			_patch_value($scope1_id, "__tests__/tags/child.marko1", count, 1);
			_patch_bind($scope1_id, "TagVariableChange:count", input.on || void 0);
			_scope($scope1_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": input.on || void 0
			}, "__tests__/tags/child.marko", "1:2", {
				count: "2:8",
				"TagVariableChange:count": ["countChange", "2:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/0", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/tags/child.marko_1*shell"], $scope0_owned, 1);
	$scope0_reason ? _scope($scope0_id, { input_on: input.on }, "__tests__/tags/child.marko", 0, { input_on: ["input.on"] }) : _owned_guard($scope0_owned, 2) && _client_guard($scope0_owned, 1) && _patch_value($scope0_id, "__tests__/tags/child.marko0", input.on);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<p> </p>${_w1}<!>`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&D l/${_w1}&b`)("", "b%c");
_shells({ "__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&D l/${_w1}&b`)("", "b%c"), ((_w0, _w1) => `${_w0}<p> </p>${_w1}<!>`)("", $template$1)) });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let store = store_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_store#7/var");
	_owned_guard(0, 0) && _patch_write($scope0_id, "store", store, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/2", store.last)}</p>`);
	_set_serialize_reason({
		0: 3,
		1: _mask_group($scope0_owned, 0),
		2: 1
	});
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/3", $childScope2);
	child_default({
		show: input.show,
		on: store.set
	});
	$scope0_reason && _scope($scope0_id, {
		"#childScope/0": _existing_scope($childScope),
		"#childScope/3": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1, () => [store_default, child_default]);
