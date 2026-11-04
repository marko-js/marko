// tags/note/index.marko
_shells({ b: "b;D ;<p> </p>" });
var note_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<p>${_text_mark($scope0_id, "a", "n:" + input.text, 1, $scope0_reason, 0)}</p>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	_client_guard($scope0_reason, 0);
	const $wi__input_title = _write_if($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let show = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _patch_subscribers($scope0_id, "a3", "e");
	$fg__input_title && _patch_render($scope0_id, "a1", "e");
	_scope($scope0_id, {
		e: input.title,
		f: show,
		g: $wi__input_title && $input_title__closures
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
