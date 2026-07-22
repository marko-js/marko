// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_child = _serialize_guard($scope0_reason, 1);
	const $scope0_id = _scope_id();
	const $input_child__closures = /* @__PURE__ */ new Set();
	let count = 0;
	const Child = { content: _content_resume("a3", () => {
		const $scope2_id = _scope_id();
		_scope_reason();
		_html(`<button class=child>child</button>${_el_resume($scope2_id, "a")}`);
		_script($scope2_id, "a4");
		writeScope($scope2_id, {});
	}, $scope0_id) };
	_html(`<button class=count>count <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_dynamic_tag($scope0_id, "c", input.outer, { class: "outer" }, _content_resume("a5", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		_dynamic_tag($scope1_id, "a", input.child === "component" ? Child : input.child === "native" ? "span" : void 0, {}, 0, 0, $sg__input_child | _persisted_reason(), "a1");
		_subscribe($sg__input_child && $input_child__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}, $scope0_id), 0, _serialize_guard($scope0_reason, 0) | _persisted_reason(), "a0");
	_script($scope0_id, "a6");
	writeScope($scope0_id, {
		g: input.child,
		h: _state_reason() && count,
		i: _state_reason() && Child,
		j: $sg__input_child && $input_child__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a7": ["<button class=child>child</button>", " b"],
	"a3": ["<button class=child>child</button>", " b"],
	"a8": ["<!><!><!>", "b%c"],
	"a5": ["<!><!><!>", "b%c"],
	"a2": ["<button class=count>count <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>count <!></button><!><!>", " Db%l%c"]
});
