// tags/card/index.marko
_shells({ b: "b;D lD ;<h3> </h3><p> </p>" });
var card_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<h3>${_text_mark($scope0_id, "a", input.title, 1, $scope0_reason, 0)}</h3><p>${_text_mark($scope0_id, "b", input.body, 1, $scope0_reason, 1)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_title = _filled_guard($scope0_reason, 1), $fg__input_body = _filled_guard($scope0_reason, 2);
	const $scope0_id = _scope_id();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>t</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _patch_render($scope0_id, "a0", "e");
	$fg__input_body && _patch_render($scope0_id, "a1", "f");
	_scope($scope0_id, {
		e: input.title,
		f: input.body,
		g: show
	}) || ($fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 1)), $fg__input_body && _patch_write($scope0_id, "xf", input.body, !_server_guard($scope0_reason, 2)));
}, 1);
