// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>+</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $wi__input_title = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_title__closures = /* @__PURE__ */ new Set();
	let a = false;
	let b = false;
	_html("<main>");
	_if(() => {}, $scope0_id, "a");
	_html(`<button>+</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_scope($scope0_id, {
		e: input.title,
		f: a,
		g: b,
		h: $wi__input_title && $input_title__closures
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va3", input.title, !_server_guard($scope0_reason, 0));
}, 1);
