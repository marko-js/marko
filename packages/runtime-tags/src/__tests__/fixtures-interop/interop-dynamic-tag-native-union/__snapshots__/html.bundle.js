// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<button id=tags>${_text_resume($scope0_id, "b", count)}</button>${_el_resume($scope0_id, "a")}<section>static: not registered</section>`);
	_dynamic_tag($scope0_id, "c", count % 2 ? "h2" : "h1", {}, _content("a0", () => {
		_scope_id();
		_scope_reason();
		_html("state driven string: not registered");
	}, $scope0_id));
	_script($scope0_id, "a1");
	_scope($scope0_id, { d: count });
}, 1);
