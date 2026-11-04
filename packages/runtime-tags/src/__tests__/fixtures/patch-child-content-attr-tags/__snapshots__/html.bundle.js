// tags/panel/index.marko
_shells({ b: "b;D%;<div class=panel><!></div>" });
var panel_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_header = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_html("<div class=panel>");
	_dynamic_tag($scope0_id, "a", input.header, {}, 2, 0, 0, $wg__input_header, $scope0_reason, 0);
	_html("</div>");
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	_client_guard($scope0_reason, 0);
	const $fg__input_title = _filled_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	$fg__input_title && _patch_subscribers($scope0_id, "a3", "e");
	_scope($scope0_id, {
		e: input.title,
		f: open,
		g: $wi__input_title && $input_title__closures
	}) || $fg__input_title && _patch_write($scope0_id, "xe", input.title, !_server_guard($scope0_reason, 0));
}, 1);
