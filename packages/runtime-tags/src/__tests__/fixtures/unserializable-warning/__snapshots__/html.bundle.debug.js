// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const Foo = { content: _content("__tests__/template.marko_1_content", () => {
		const $scope1_id = _scope_id();
		_scope_reason();
		const unserializable = { nested: { thing: Buffer.from("") } };
		const test = _resume(function() {
			return unserializable;
		}, "__tests__/template.marko_1/test", $scope1_id);
		_script($scope1_id, "__tests__/template.marko_1_test");
		writeScope($scope1_id, {
			unserializable,
			test
		}, "__tests__/template.marko", "1:2", {
			unserializable: "2:10",
			test: "7:10"
		});
	}) };
	Foo.content({});
}, 1);
