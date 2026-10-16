// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	_write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$global();
	_html(`<main><button>show</button>${_el_resume($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_html("</main>");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.media,
		f: input.src
	});
}, 1);
