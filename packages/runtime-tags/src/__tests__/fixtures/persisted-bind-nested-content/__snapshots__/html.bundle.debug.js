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

// tags/frame.marko
const $template$1 = "<section><!></section>";
const $walks$1 = "D%l";
_shells({ "__tests__/tags/frame.marko": "__tests__/tags/frame.marko;D%;<section><!></section>" });
var frame_default = _template_persisted("__tests__/tags/frame.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_content = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	const $tag = input.content;
	_patch_dynamic_tag($scope0_id, "#text/0", $tag, 0, 0, 0, $scope0_owned, 0);
	_dynamic_tag($scope0_id, "#text/0", $tag, {}, 0, 0, $sg__input_content, 1);
	_html("</section>");
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/frame.marko", 0);
}, 0, 0);

// template.marko
const $template = /*@__PURE__*/ ((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template$1);
const $walks = /*@__PURE__*/ ((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", "D%l");
_shells({
	"__tests__/template.marko_2*content": "__tests__/template.marko_2*content;b%;<!><!><!>",
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D%l"), $template$1),
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0, _w1) => `0${_w0}&D l/${_w1}&`)("", "D%l"), ((_w0, _w1) => `${_w0}<p> </p>${_w1}`)("", $template$1)),
	"__tests__/template.marko_3*shell": "__tests__/template.marko_3*shell __tests__/template.marko_3_store_set#9/init!__tests__/template.marko_3;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $store_set__closures = new Set();
	const $input_show__closures = new Set();
	const $childScope = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope);
	let store = store_default({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_store#7/var");
	_owned_guard(0, 0) && _patch_write($scope0_id, "store", store, 1);
	_html(`<p>${_text_resume($scope0_id, "#text/2", store.last)}</p>`);
	_set_serialize_reason(0);
	const $childScope3 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/3", $childScope3);
	frame_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		_set_serialize_reason(0);
		const $childScope2 = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope2);
		frame_default({ content: _content_elide("__tests__/template.marko_2*content", () => {
			const $scope2_reason = _persisted_reason();
			const $scope2_id = _scope_id();
			_if(() => {
				if (input.show) {
					const $scope3_id = _scope_id();
					let count = 0;
					_html(`<span>Seen ${_text_resume($scope3_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope3_id, "#button/1")}`);
					_script($scope3_id, "__tests__/template.marko_3");
					_patch_value($scope3_id, "__tests__/template.marko0", count, 1);
					_patch_bind($scope3_id, "TagVariableChange:count", store.set || void 0);
					_subscribe($store_set__closures, _scope($scope3_id, {
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
			_subscribe(_source_if($scope0_reason, 0) && $input_show__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4"));
			$sg__input_show || _resume_branch($scope2_id);
		}, $scope1_id) });
		_scope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope2)
		}, "__tests__/template.marko", "3:2");
	}, $scope0_id) });
	$scope0_reason && _scope($scope0_id, {
		store_set: store?.set,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:store_set": $store_set__closures,
		"ClosureScopes:input_show": $input_show__closures,
		"#childScope/3": _existing_scope($childScope3)
	}, "__tests__/template.marko", 0, { store_set: ["store.set", "1:8"] });
}, 1, () => [store_default, frame_default]);
