// template.marko
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	let editing = false;
	let visible = true;
	_html("<svg><foreignObject class=host width=100 height=100>");
	_if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_dynamic_tag($scope0_id, "b", editing, { value: "dynamic" });
	_html(`${_html_resume($scope0_id, "c", "", 2)}</foreignObject><foreignObject class=host>`);
	_show_start(visible, 1);
	_html("hidden: ");
	_if(() => {}, $scope0_id, "e", 1, 1, 1, 0, 1);
	_show_end($scope0_id, "d", visible, 1, 1, "</foreignObject>");
	_html("<desc class=host>");
	_if(() => {}, $scope0_id, "f", 1, 1, 1, "</desc>", 1);
	_html("</svg><math><mtext class=host>");
	_if(() => {}, $scope0_id, "g", 1, 1, 1, "</mtext>", 1);
	_html(`</math><button class=edit>edit</button>${_el_resume($scope0_id, "h")}<button class=show>show</button>${_el_resume($scope0_id, "i")}`);
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		j: editing,
		k: visible
	});
}, 1);
