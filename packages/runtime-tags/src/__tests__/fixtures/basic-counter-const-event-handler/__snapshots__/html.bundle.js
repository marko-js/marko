// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let clickCount = 0;
	const increment = _resume(function() {
		clickCount++;
	}, "a0", $scope0_id);
	_html(`<button>${_text_resume($scope0_id, "b", clickCount)}</button>${_el_resume($scope0_id, "a")}`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		c: clickCount,
		d: increment
	});
}, 1);
