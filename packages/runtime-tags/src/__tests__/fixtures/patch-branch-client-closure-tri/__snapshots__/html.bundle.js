// template.marko
_shells({ a: "a !a3;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	const $open__closures = /* @__PURE__ */ new Set();
	let open = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		e: input.title,
		f: open,
		g: $wi__input_title && $input_title__closures,
		h: $open__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va4", input.title, !_server_guard($scope0_reason, 0));
}, 1);
