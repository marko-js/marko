// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{ a: "hello" }, { a: "world" }];
	_html(`<button class=change>change</button>${_el_resume($scope0_id, "a")}`);
	_for_of(rows, ({ a }) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "a", a)}</div><button class=log>log</button>${_el_resume($scope1_id, "b")}`);
		_script($scope1_id, "a0");
		_scope($scope1_id, { e: a });
	}, 0, $scope0_id, "b");
	_script($scope0_id, "a1");
	_scope($scope0_id, {});
}, 1);
