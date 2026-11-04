// tags/widget/index.marko
_shells({ b: "b !b0;D l ;<p> </p><button>run</button>" });
var widget_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const label = () => "t:" + input.title;
	_html(`<p>${_text_mark($scope0_id, "a", label(), 1, $scope0_reason, 0)}</p><button>run</button>${_el_mark($scope0_id, "b")}`);
	_script($scope0_id, "b0");
	_scope($scope0_id, { e: input.title }) || _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
});

// template.marko
_shells({ a: "a !a1;D%b ;<main><!><button class=outer>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button class=outer>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_title && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.title,
		f: show
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
