// template.marko
const data = Promise.resolve({ items: ["a", "b"] });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_foo = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_foo__closures = new Set();
	const $count__closures = new Set();
	let count = 0;
	_try($scope0_id, "#text/0", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "#text/0", data, (d) => {
			const $scope2_id = _scope_id();
			_html(`<p>${_text_resume($scope2_id, "#text/0", input.foo, _write_guard($scope0_reason, 0))}</p><button>${_text_resume($scope2_id, "#text/2", count)}</button>${_el_resume($scope2_id, "#button/1")}`);
			_script($scope2_id, "__tests__/template.marko_2");
			_subscribe($count__closures, _subscribe($wi__input_foo && $input_foo__closures, _scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "7:4"), "__tests__/template.marko_2_input_foo#0:3/subscribe"), "__tests__/template.marko_2_count#0:4/subscribe");
		});
		_scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "5:2");
	}, () => {
		_scope_reason();
		const $scope3_id = _scope_id();
		_html("Loading");
	}, void 0, "__tests__/template.marko_3*content");
	_scope($scope0_id, {
		count,
		"ClosureScopes:input_foo/5": $wi__input_foo && $input_foo__closures,
		"ClosureScopes:count/6": $count__closures
	}, "__tests__/template.marko", 0, { count: "3:6" });
	_resume_branch($scope0_id);
}, 1);
