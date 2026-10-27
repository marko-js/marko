// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button class=step>show</button></main>" });
var template_default = _template("a", (input) => {
	_scope_reason();
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const title = $global().title + "!";
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=step>show</button>${_el_resume($scope0_id, "b")}</main>`);
	_fill_global_subscribe("a1", $scope0_id);
	_script($scope0_id, "a2");
	_scope($scope0_id, { c: title }) || _patch_write($scope0_id, "wc", title);
}, 1);
