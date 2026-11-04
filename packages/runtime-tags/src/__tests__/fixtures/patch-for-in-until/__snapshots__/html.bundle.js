// template.marko
_shells({
	a: "a !a1;D%b%l ;<ul><!><!></ul><button>+</button>",
	a0: "a0;D ;<li> </li>"
});
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason(), $fg__input_label = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let count = 0;
	_html("<ul>");
	_for_in({
		a: input.label,
		b: count
	}, (k, v) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_escape(k)}=${_text_mark($scope1_id, "b", v, 2)}</li>`);
		_scope($scope1_id, {});
	}, 0, $scope0_id, "a", 1, 1, 0, 0, 1);
	_for_until(input.on ? 2 : 1, 0, 1, (i) => {
		const $scope2_id = _scope_id();
		_html(`<li>${_text_mark($scope2_id, "a", i, 1, $scope0_reason, 1)}</li>`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "b", 1, 1, 1, 0, 0, "a0", $scope0_reason, 1);
	_html(`</ul><button>+</button>${_el_mark($scope0_id, "c")}`);
	_script($scope0_id, "a1");
	_patch_render($scope0_id, "a2", $fg__input_label && "f");
	_scope($scope0_id, {
		f: input.label,
		h: count
	}) || $fg__input_label && _patch_write($scope0_id, "xf", input.label, !_server_guard($scope0_reason, 0));
}, 1);
