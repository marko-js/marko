// tags/wrap.marko
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $sg__input_content = _serialize_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div>");
	_dynamic_tag($scope0_id, "#text/0", input.content, {}, 0, 0, $sg__input_content);
	_html("</div>");
	_serialize_if($scope0_reason, 0) && _scope($scope0_id, {}, "__tests__/tags/wrap.marko", 0);
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $x__closures = new Set();
	let x = 1;
	const z = x;
	_html(`<button class=outer>${_text_resume($scope0_id, "#text/1", z)}</button>${_el_resume($scope0_id, "#button/0")}<p>${_text_resume($scope0_id, "#text/2", z)}</p>`);
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrap_content__x__closures = new Set();
		let x = 1;
		_html(`<button class=inner></button>${_el_resume($scope1_id, "#button/0")}<em>${_text_resume($scope1_id, "#text/1", z)}</em>`);
		wrap_default({ content: _content("__tests__/template.marko_2*content", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_html(`<i>${_text_resume($scope2_id, "#text/0", z)}</i><b>${_text_resume($scope2_id, "#text/1", x)}</b>`);
			_subscribe($wrap_content__x__closures, _subscribe($x__closures, _scope($scope2_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:x/5": 1
			}, "__tests__/template.marko", "9:4"), "__tests__/template.marko_2_x#4/subscribe"), "__tests__/template.marko_2_x#4/subscribe");
		}, $scope1_id) });
		wrap_default({ content: _content("__tests__/template.marko_3*content", () => {
			_scope_reason();
			const $scope3_id = _scope_id();
			_html(`<s>${_text_resume($scope3_id, "#text/0", x)}</s>`);
			_subscribe($wrap_content__x__closures, _scope($scope3_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:x/6": 1
			}, "__tests__/template.marko", "13:4"), "__tests__/template.marko_3_x#4/subscribe");
		}, $scope1_id) });
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($x__closures, _scope($scope1_id, {
			x,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:x/6": $wrap_content__x__closures
		}, "__tests__/template.marko", "5:2", { x: "6:8" }), "__tests__/template.marko_1_x#4/subscribe");
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"ClosureScopes:x/5": $x__closures
	}, "__tests__/template.marko", 0, { x: "1:6" });
}, 1);
