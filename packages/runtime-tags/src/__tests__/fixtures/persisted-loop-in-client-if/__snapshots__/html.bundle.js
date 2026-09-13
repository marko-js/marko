// template.marko
_shells({ a: "a !a0;D%b b ;<main><!><button class=toggle>t</button><button class=add>+</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let show = false;
	let items = ["a"];
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}<button class=add>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a0");
	$scope0_page ? _scope($scope0_id, {
		f: input.note,
		g: show,
		h: items,
		i: $input_note__closures
	}) : _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "a0", input.note);
}, 1, 0);
