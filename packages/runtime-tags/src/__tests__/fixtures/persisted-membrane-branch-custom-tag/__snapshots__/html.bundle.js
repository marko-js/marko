// tags/static-bit.marko
var static_bit_default = _template("b", (input) => {
	_scope_reason();
	_scope_id();
	_html("<span class=static>static</span>");
});
_renderer_shells({ "b0": ["<span class=static>static</span>", "b"] });

// template.marko
var template_default = _template("a", (input) => {
	const $sg__input_detail = _serialize_guard(_scope_reason(), 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "b")}</button>${_el_resume($scope0_id, "a")}`);
	_if(() => input.detail ? 0 : void 0, $scope0_id, "c", 1 | _persisted_reason(), $sg__input_detail, $sg__input_detail, void 0, void 0, "a0", [() => {
		const $scope1_id = _scope_id();
		_html(`<p class=detail>detail <!>${_escape(count)}${_el_resume($scope1_id, "a")}</p>`);
		const $childScope = _peek_scope_id();
		_region(() => {
			static_bit_default({});
		}, $scope1_id, "c", "a2");
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			b: _persisted_reason() && _existing_scope($childScope)
		});
	}], ["a3"], "a4");
	_script($scope0_id, "a5");
	writeScope($scope0_id, { g: _seed_fill(_state_reason() && count) });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"a3": ["<p class=detail>detail <!></p><!>", "Db%l/&%b"],
	"a6": ["<p class=detail>detail <!></p><!>", "Db%l/&%b"],
	"a1": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"a": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
