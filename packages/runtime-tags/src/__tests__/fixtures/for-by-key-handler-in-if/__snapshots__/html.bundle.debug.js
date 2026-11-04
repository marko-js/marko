// tags/dismiss-button.marko
var dismiss_button_default = _template("__tests__/tags/dismiss-button.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<button>${_text_resume($scope0_id, "#text/1", input.label, _write_guard($scope0_reason, 0))}</button>${_el_resume($scope0_id, "#button/0")}`);
	_script($scope0_id, "__tests__/tags/dismiss-button.marko_0");
	_scope($scope0_id, { input_onDismiss: input.onDismiss }, "__tests__/tags/dismiss-button.marko", 0, { input_onDismiss: ["input.onDismiss"] });
});

// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let items = [{ id: "a" }, { id: "b" }];
	let show = true;
	forOf(items, (item) => {
		const $scope1_id = _scope_id();
		if (show) {
			const $scope2_id = _scope_id();
			dismiss_button_default({
				label: item.id,
				onDismiss: _resume(function() {
					document.getElementById("log").textContent = item.id;
				}, "__tests__/template.marko_2/onDismiss", $scope2_id)
			});
			_scope($scope2_id, { _: _scope_with_id($scope1_id) }, "__tests__/template.marko", "4:4");
		}
		_scope($scope1_id, { "#LoopKey": item?.id }, "__tests__/template.marko", "3:2", { "#LoopKey": ["item.id", "3:6"] });
	});
	_html("<div id=log></div>");
}, 1);
