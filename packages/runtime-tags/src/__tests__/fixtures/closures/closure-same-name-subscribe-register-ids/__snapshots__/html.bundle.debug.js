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
	_html(`<button class=x>${_text_resume($scope0_id, "#text/1", x)}</button>${_el_resume($scope0_id, "#button/0")}`);
	wrap_default({ content: _content("__tests__/template.marko_1*content", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		const $wrap_content__x__closures = new Set();
		let x = 10;
		_html(`<button class=y></button>${_el_resume($scope1_id, "#button/0")}`);
		_try($scope1_id, "#text/1", () => {
			_scope_reason();
			const $scope2_id = _scope_id();
			_await($scope2_id, "#text/0", resolveAfter(1, 1), (v) => {
				const $scope3_id = _scope_id();
				_html(`<i>${_text_resume($scope3_id, "#text/0", z)}</i><b>${_text_resume($scope3_id, "#text/1", x)}</b>`);
				_subscribe($wrap_content__x__closures, _subscribe($x__closures, _scope($scope3_id, { _: _scope_with_id($scope2_id) }, "__tests__/template.marko", "11:6"), "__tests__/template.marko_3_x#0:3/subscribe"), "__tests__/template.marko_3_x#1:3/subscribe");
			});
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "9:4");
		}, () => {
			_scope_reason();
			const $scope5_id = _scope_id();
			_html("loading");
		}, void 0, "__tests__/template.marko_5*content");
		wrap_default({ content: _content("__tests__/template.marko_4*content", () => {
			_scope_reason();
			const $scope4_id = _scope_id();
			_html(`<s>${_text_resume($scope4_id, "#text/0", x)}</s>`);
			_subscribe($wrap_content__x__closures, _scope($scope4_id, {
				_: _scope_with_id($scope1_id),
				"ClosureSignalIndex:x/5": 1
			}, "__tests__/template.marko", "16:4"), "__tests__/template.marko_4_x#1:3/subscribe");
		}, $scope1_id) });
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, {
			x,
			_: _scope_with_id($scope0_id),
			"ClosureScopes:x/5": $wrap_content__x__closures
		}, "__tests__/template.marko", "6:2", { x: "7:8" });
	}, $scope0_id) });
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		x,
		"ClosureScopes:x/4": $x__closures
	}, "__tests__/template.marko", 0, { x: "3:6" });
}, 1);
