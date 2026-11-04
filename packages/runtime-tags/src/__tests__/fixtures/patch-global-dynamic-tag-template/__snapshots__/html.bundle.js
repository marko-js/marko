// tags/badge.marko
_shells({ b: "b;D ;<em> </em>" });
var badge_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_text_mark($scope0_id, "a", $global$1.brand, 1, 4, 0)}</em>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a1; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $fg__input_plain = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>t</button>${_el_mark($scope0_id, "a")}`);
	_if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a1");
	$fg__input_plain && _patch_render($scope0_id, "a0", "e");
	_scope($scope0_id, {
		e: input.plain,
		f: open
	}) || $fg__input_plain && _patch_write($scope0_id, "xe", input.plain, !_server_guard($scope0_reason, 0));
}, 1);
