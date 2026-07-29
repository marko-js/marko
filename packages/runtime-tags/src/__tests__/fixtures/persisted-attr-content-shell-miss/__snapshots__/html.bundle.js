// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_show = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const Panel = { content: _content_resume("a2", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		let hits = 0;
		_html(`<button class=hit>hits <!>${_escape(hits)}${_el_resume($scope1_id, "b")}</button>${_el_resume($scope1_id, "a")}`);
		_script($scope1_id, "a3");
		writeScope($scope1_id, { c: _seed_fill(_state_reason() && hits) });
		_resume_branch($scope1_id);
	}, $scope0_id) };
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.show ? 0 : void 0, $scope0_id, "c", $sg__input_show, $sg__input_show, $sg__input_show, void 0, void 0, "a0", [() => {
		const $scope2_id = _scope_id();
		let n = 0;
		_html(`<button class=tap>tap <!>${_escape(n)}${_el_resume($scope2_id, "b")}</button>${_el_resume($scope2_id, "a")}<div class=host>`);
		_attr_content("c", $scope2_id, Panel);
		_html(`</div>${_el_resume($scope2_id, "c")}`);
		_script($scope2_id, "a4");
		writeScope($scope2_id, { d: _seed_fill(_state_reason() && n) });
	}], ["a5"], "a6");
	_script($scope0_id, "a7");
	writeScope($scope0_id, {
		g: (_serialize_if($scope0_reason, 0) || _patch_reason()) && Panel,
		h: _seed_fill(_state_reason() && count)
	});
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a5": ["<button class=tap>tap <!></button><div class=host></div>", " Db%l b"],
	"a8": ["<button class=tap>tap <!></button><div class=host></div>", " Db%l b"],
	"a9": ["<button class=hit>hits <!></button>", " Db%l"],
	"a2": ["<button class=hit>hits <!></button>", " Db%l"],
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
