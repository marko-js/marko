// tags/dismiss-button.marko
var dismiss_button_default = _template("__tests__/tags/dismiss-button.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_mark($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0))}</button>${_el_mark($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/dismiss-button.marko_0");
	_scope($scope0_id, { input_onDismiss: input.onDismiss }, "__tests__/tags/dismiss-button.marko", 0, { input_onDismiss: ["input.onDismiss"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = ["a", "b"];
	_html(`<button class=add>add</button>${_el_mark($scope0_id, "#button/0")}`);
	_for_of(items, (item, i) => {
		const $scope1_id = _scope_id();
		_set_scope_reason(2);
		const $childScope = _peek_scope_id();
		dismiss_button_default({
			label: item,
			onDismiss: _resume(function() {
				document.getElementById("log").textContent = i;
			}, "__tests__/template.marko_1/onDismiss", $scope1_id)
		});
		_scope($scope1_id, {
			"#LoopKey": i,
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "3:2", { "#LoopKey": "3:12" });
	}, 0, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_html("<div id=log></div>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
}, 1);
