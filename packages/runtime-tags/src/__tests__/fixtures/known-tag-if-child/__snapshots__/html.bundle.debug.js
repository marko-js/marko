// components/wrapper.marko
var wrapper_default = _template("__tests__/components/wrapper.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<section>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</section>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/components/wrapper.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $on__closures = new Set();
	let on = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	wrapper_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_if(() => {
			if (on) {
				const $scope2_id = _scope_id();
				_html("<b>on</b>");
				_scope($scope2_id, {}, "__tests__/template.marko", "6:4");
				return 0;
			} else {
				const $scope3_id = _scope_id();
				_html("<i>off</i>");
				_scope($scope3_id, {}, "__tests__/template.marko", "9:4");
				return 1;
			}
		}, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_subscribe($on__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2"));
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		on,
		"ClosureScopes:on": $on__closures
	}, "__tests__/template.marko", 0, { on: "3:6" });
}, 1);
