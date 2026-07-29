// template.marko
function getProps() {
	if (typeof window !== "undefined") throw new Error("server only");
	return { label: "server" };
}
var template_default = _template("a", (input) => {
	const $sg__input_show = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	const $n__closures = /* @__PURE__ */ new Set();
	let n = 0;
	const Child = { content: _content("a2", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<button class=child>${_escape(_hole_value($scope1_id, "Qb", label, _persisted_reason()))}${_el_resume($scope1_id, "b", _serialize_guard($scope1_reason, 0))} <!>${_escape(n)}${_el_resume($scope1_id, "c")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a3");
		_subscribe($n__closures, writeScope($scope1_id, { _: _scope_with_id($scope0_id) }));
		_resume_branch($scope1_id);
	}) };
	_if(() => input.show ? 0 : void 0, $scope0_id, "a", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "a0", [() => {
		const $scope2_id = _scope_id();
		const $childScope = _peek_scope_id();
		Child.content(getProps());
		$sg__input_show | _persisted_reason() && writeScope($scope2_id, { a: _persisted_reason() && _existing_scope($childScope) });
	}], ["a4"], "a5");
	writeScope($scope0_id, {
		e: _seed_fill(_state_reason() && n),
		f: $n__closures
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a4": ["<!><button class=child><!> <!></button><!>", "b/ D%c%l&b"],
	"a6": ["<!><button class=child><!> <!></button><!>", "b/ D%c%l&b"],
	"a7": ["<button class=child><!> <!></button>", " D%c%l"],
	"a2": ["<button class=child><!> <!></button>", " D%c%l"],
	"a1": ["<!><!><!>", "b%c"],
	"a": ["<!><!><!>", "b%c"]
});
