// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $v__closures = new Set();
	const Child = { content: _content("__tests__/template.marko_1*content", (input) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let x = false;
		_html(`<button>t</button>${_el_mark($scope1_id, "#button/0")}`);
		_if(() => {
			if (x) {
				const $scope2_id = _scope_id();
				_dynamic_tag($scope2_id, "#text/0", input.content, {}, 0, 0, 0);
				_scope($scope2_id, {}, "__tests__/template.marko", "4:4");
				return 0;
			}
		}, $scope1_id, "#text/1");
		const $return = x ? "on" : "off";
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			input_content: input.content,
			x
		}, "__tests__/template.marko", "1:2", {
			input_content: ["input.content", "1:15"],
			x: "2:8"
		});
		return $return;
	}, $scope0_id) };
	const $childScope = _peek_scope_id();
	let v = Child.content({});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_v#3/var");
	Child.content({ content: _content_resume("__tests__/template.marko_3*content", () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html(`<em>${_text_mark($scope3_id, "#text/0", v)}</em>`);
		_subscribe($v__closures, _scope($scope3_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "8:2"), "__tests__/template.marko_3_v#0:3/subscribe");
	}, $scope0_id) });
	_scope($scope0_id, {
		v,
		"#childScope/0": _existing_scope($childScope),
		"ClosureScopes:v/4": $v__closures
	}, "__tests__/template.marko", 0, { v: "7:8" });
}, 1);
