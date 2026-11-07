// template.marko
_shells({
	a0: "a0;D%c%;<em><!> <!></em>",
	a1: "a1,<s>caught</s>",
	a2: "a2,<i>loading</i>",
	a3: "a3;D%c%;<em><!> <!></em>",
	a4: "a4;b%;<!><!><!>",
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
			_html(`<em>${_text_mark($scope4_id, "a", $global$1.name, 1, 4, 0)} ${_text_mark($scope4_id, "b", v, 2, 4, 0)}</em>`);
			_scope($scope4_id, {});
		}, 1, "a0", void 0, 1);
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<i>loading</i>");
	}, () => {
		_scope_reason();
		_scope_id();
		_html("<s>caught</s>");
	}, "a2", "a1", "a4", 0, 0, 3);
	_html("</main>");
	_fill_global_subscribe("a5", $scope0_id);
	_fill_global_subscribe("a6", $scope0_id);
}, 1);
