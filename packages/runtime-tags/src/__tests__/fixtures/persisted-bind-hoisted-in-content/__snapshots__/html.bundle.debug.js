// tags/store.marko
const $template$2 = "<p> </p>";
const $walks$2 = "D l";
_shells({ "__tests__/tags/store.marko": "__tests__/tags/store.marko !;D ;<p> </p>" });
var store_default = _template_persisted("__tests__/tags/store.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let last = 0;
	_html(`<p>${_text_resume($scope0_id, "#text/0", last)}</p>`);
	const $return = _resume((next) => {
		last = next;
	}, "__tests__/tags/store.marko_0/_return", $scope0_id);
	_patch_value($scope0_id, "__tests__/tags/store.marko0", last, 1);
	$scope0_reason && _scope($scope0_id, {}, "__tests__/tags/store.marko", 0);
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
const $template = /*@__PURE__*/ ((_w0) => `${_w0}<!><!>`)($template$1);
const $walks = /*@__PURE__*/ ((_w0) => `/${_w0}&%c`)("D%l");
_shells({
	"__tests__/template.marko_1*content": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko_1*content;${_w0};${_w1}`)(/*@__PURE__*/ ((_w0) => `0${_w0}&`)("D l"), $template$2),
	"__tests__/template.marko": /*@__PURE__*/ ((_w0, _w1) => `__tests__/template.marko;${_w0};${_w1}`)(((_w0) => `/${_w0}&%c`)("D%l"), ((_w0) => `${_w0}<!><!>`)($template$1)),
	"__tests__/template.marko_2*shell": "__tests__/template.marko_2*shell !__tests__/template.marko_2;Db%l ;<span>Seen <!></span><button>+</button>"
});
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason(), $sg__input_show = _source_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $setLast_getter = _hoist($scope0_id, "__tests__/template.marko_0_setLast#2/hoist");
	const $frame_content__subscribers = new Set();
	_set_serialize_reason(0);
	const $childScope2 = _peek_scope_id();
	_patch_child($scope0_id, "#childScope/0", $childScope2);
	frame_default({ content: _content_elide("__tests__/template.marko_1*content", () => {
		const $scope1_reason = _persisted_reason();
		const $scope1_id = _scope_id();
		const $childScope = _peek_scope_id();
		_patch_child($scope1_id, "#childScope/0", $childScope);
		let setLast = store_default({});
		_var($scope1_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_1_setLast#2/var");
		_owned_guard(0, 0) && _patch_write($scope1_id, "setLast", setLast, 1);
		_subscribe($frame_content__subscribers, _scope($scope1_id, {
			setLast,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "1:2", { setLast: "2:10" }));
		_assert_hoist(setLast);
	}, $scope0_id) });
	_if(() => {
		if (input.show) {
			const $scope2_id = _scope_id();
			let count = 0;
			_html(`<span>Seen ${_text_resume($scope2_id, "#text/0", count, 2)}</span><button>+</button>${_el_resume($scope2_id, "#button/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_patch_value($scope2_id, "__tests__/template.marko0", count, 1);
			_patch_bind($scope2_id, "TagVariableChange:count", $setLast_getter || void 0);
			_scope($scope2_id, {
				count,
				_: _scope_with_id($scope0_id),
				"TagVariableChange:count": $setLast_getter || void 0
			}, "__tests__/template.marko", "4:2", {
				count: "5:8",
				"TagVariableChange:count": ["countChange", "5:8"]
			});
			return 0;
		}
	}, $scope0_id, "#text/1", 1, $sg__input_show, $sg__input_show, void 0, void 0, ["__tests__/template.marko_2*shell"], $scope0_owned, 0);
	$scope0_reason && _scope($scope0_id, {
		"ClosureScopes:1": $frame_content__subscribers,
		"#childScope/0": _existing_scope($childScope2)
	}, "__tests__/template.marko", 0);
}, 1, () => [store_default, frame_default]);
