// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_user = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $count__closures = new Set();
	let count = 0;
	_html(`<button>${_text_mark($scope0_id, "#text/1", count)}</button>${_el_mark($scope0_id, "#button/0")}`);
	_await($scope0_id, "#text/2", resolveAfter(input.user), ({ name, tags: [first] }) => {
		const $scope1_id = _scope_id();
		_html(`<span>${_text_mark($scope1_id, "#text/0", name, $wg__input_user)}:${_text_mark($scope1_id, "#text/1", first, $wg__input_user * 2)}:${_text_mark($scope1_id, "#text/2", count, 2)}</span>`);
		_subscribe($count__closures, _scope($scope1_id, {}, "__tests__/template.marko", "4:2"), "__tests__/template.marko_1_count#0:6/subscribe");
	});
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		count,
		"ClosureScopes:count/7": $count__closures
	}, "__tests__/template.marko", 0, { count: "2:6" });
}, 1);
