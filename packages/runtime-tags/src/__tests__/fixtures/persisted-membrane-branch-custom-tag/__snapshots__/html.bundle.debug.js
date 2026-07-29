// tags/static-bit.marko
var static_bit_default = _template("__tests__/tags/static-bit.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	_html("<span class=static>static</span>");
});
_renderer_shells({ "__tests__/tags/static-bit.marko_0_update": ["<span class=static>static</span>", "b"] });

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_detail = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button class=count>clicked <!>${_escape(count)}${_el_resume($scope0_id, "#text/1")}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => input.detail ? 0 : undefined, $scope0_id, "#text/2", 1 | _persisted_reason(), $sg__input_detail, $sg__input_detail, void 0, void 0, "__tests__/template.marko_0/update_if_#text/2", [() => {
		const $scope1_id = _scope_id();
		_html(`<p class=detail>detail <!>${_escape(count)}${_el_resume($scope1_id, "#text/0")}</p>`);
		const $childScope = _peek_scope_id();
		_region(() => {
			static_bit_default({});
		}, $scope1_id, "#text/2", "__tests__/template.marko_r0");
		writeScope($scope1_id, {
			_: _scope_with_id($scope0_id),
			"#childScope/1": _persisted_reason() && _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2");
	}], ["__tests__/template.marko_1_update"], "__tests__/template.marko_r1");
	_script($scope0_id, "__tests__/template.marko_0");
	writeScope($scope0_id, { count: _seed_fill(_state_reason() && count) }, "__tests__/template.marko", 0, { count: "1:6" });
	_resume_branch($scope0_id);
}, 1);
_renderer_shells({
	"__tests__/template.marko_1_update": ["<p class=detail>detail <!></p><!>", "Db%l/&%b"],
	"__tests__/template.marko_1_content": ["<p class=detail>detail <!></p><!>", "Db%l/&%b"],
	"__tests__/template.marko_0_update": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"],
	"__tests__/template.marko": ["<button class=count>clicked <!></button><!><!>", " Db%l%c"]
});
