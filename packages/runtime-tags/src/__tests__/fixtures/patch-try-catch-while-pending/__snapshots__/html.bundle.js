// template.marko
_shells({
	a1: "a1;D%c%;<em><!> <!></em>",
	a2: "a2,<s>caught</s>",
	a3: "a3,<i>loading</i>",
	a4: "a4;D%c%;<em><!> <!></em>",
	a5: "a5;b%;<!><!><!>",
	a: "a;D%;<main><!></main>"
});
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html("<main>");
	_try($scope0_id, "a", () => {
		_scope_reason();
		const $scope1_id = _scope_id();
		_await($scope1_id, "a", $global$1.promise, (v) => {
			const $scope4_id = _scope_id();
			_html(`<em>${_text_resume($scope4_id, "a", $global$1.name, 1, 4, 0)} ${_text_resume($scope4_id, "b", v, 2, 4, 0)}</em>`);
			_fill_global_subscribe("a0", $scope4_id);
			_scope($scope4_id, {});
		}, 1, "a1", 1);
		_fill_global_subscribe("a6", $scope1_id);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<s>caught</s>");
	}, "a3", "a2", "a5", 0, 0, 3);
	_html("</main>");
}, 1);
