// tags/label/index.marko
_shells({ b: "b;D ;<em> </em>" });
var label_default = _template("b", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "a", input.text, 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a1;D%b b ;<main><!><button>+</button><button class=t>t</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_suffix = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	let show = true;
	_html("<main>");
	_if(() => {
		{
			const $scope1_id = _scope_id();
			_set_scope_reason(6);
			const $childScope = _peek_scope_id($scope1_id, "a", 0);
			label_default({ text: count + input.suffix });
			_patch_child_end();
			_patch_render($scope1_id, "a0", _filled_guard($scope0_reason, 0) && ">f");
			_scope($scope1_id, { a: _existing_scope($childScope) });
			return 0;
		}
	}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>+</button>${_el_mark($scope0_id, "b")}<button class=t>t</button>${_el_mark($scope0_id, "c")}</main>`);
	_script($scope0_id, "a1");
	$fg__input_suffix && _patch_render($scope0_id, "a2", "f");
	_scope($scope0_id, {
		f: input.suffix,
		g: count,
		h: show
	}) || $fg__input_suffix && _patch_write($scope0_id, "xf", input.suffix, !_server_guard($scope0_reason, 0));
}, 1);
