// tags/box/index.marko
_shells({ b: "b;D%;<div class=box><!></div>" });
var box_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=box>");
	_dynamic_tag($scope0_id, "a", input.content, {}, 2, 0, 0, $wg__input_content, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a3;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 1);
	_client_guard($scope0_reason, 1);
	_write_guard($scope0_reason, 0);
	_client_guard($scope0_reason, 0);
	const $fg__input_show = _filled_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 1), $wi__input_title = _write_if($scope0_reason, 1), $wi__input_show = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $input_show__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	$fg__input_show && _patch_subscribers($scope0_id, "a4", "e");
	$fg__input_title && _patch_subscribers($scope0_id, "a5", "f");
	_scope($scope0_id, {
		e: input.show,
		f: input.title,
		g: open,
		i: $wi__input_title && $input_title__closures,
		h: $wi__input_show && $input_show__closures
	}) || ($fg__input_show && _patch_write($scope0_id, "xe", input.show, !_server_guard($scope0_reason, 0)), $fg__input_title && _patch_write($scope0_id, "xf", input.title, !_server_guard($scope0_reason, 1)));
}, 1);
