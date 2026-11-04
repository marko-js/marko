// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let rows = [{ a: "hello" }, { a: "world" }];
	_html(`<button class=change>change</button>${_el_resume($scope0_id, "#button/0")}`);
	_for_of(rows, ({ a }) => {
		const $scope1_id = _scope_id();
		_html(`<div>${_text_resume($scope1_id, "#text/0", a)}</div><button class=log>log</button>${_el_resume($scope1_id, "#button/1")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_scope($scope1_id, { a }, "__tests__/template.marko", "4:2", { a: "4:8" });
	}, 0, $scope0_id, "#text/1");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {}, "__tests__/template.marko", 0);
}, 1);
