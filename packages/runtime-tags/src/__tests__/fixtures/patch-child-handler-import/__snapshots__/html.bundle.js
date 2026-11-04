// tags/widget/index.marko
_shells({ b: "b !b0;D%b%l ;<p><!><!></p><button class=run>run</button>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", input.label, 1, $scope0_reason, 0)}${_text_mark($scope0_id, "b", "", 2, 0, 0, 1)}</p><button class=run>run</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { f: input.label }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button class=outer>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_label && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.label,
		f: show
	}) || $fg__input_label && _patch_write($scope0_id, "xe", input.label, !_server_guard($scope0_reason, 0));
}, 1);
