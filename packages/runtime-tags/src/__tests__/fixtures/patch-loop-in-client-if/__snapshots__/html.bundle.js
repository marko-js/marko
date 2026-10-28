// template.marko
_shells({ a: "a !a1;D%b b ;<main><!><button class=toggle>t</button><button class=add>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_note = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_note__closures = /* @__PURE__ */ new Set();
	let show = false;
	let items = ["a"];
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "b")}<button class=add>+</button>${_el_resume($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	_scope($scope0_id, {
		f: input.note,
		g: show,
		h: items,
		i: $wi__input_note && $input_note__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va2", input.note, !_server_guard($scope0_reason, 0));
}, 1);
