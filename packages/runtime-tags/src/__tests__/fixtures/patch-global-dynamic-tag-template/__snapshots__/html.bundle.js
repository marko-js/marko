// tags/badge.marko
_shells({ b: "b;D ;<em> </em>" });
var badge_default = _template("b", (input) => {
	_scope_reason();
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	_html(`<em>${_patch_text($scope0_id, "a", $global$1.brand)}</em>`);
	_fill_global_subscribe("b0", $scope0_id);
	_scope($scope0_id, {});
});

// template.marko
_shells({ a: "a !a0; b%;<button>t</button><!><!>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let open = false;
	_html(`<button>t</button>${_el_resume($scope0_id, "a")}`);
	if ($scope0_page) _if(() => {}, $scope0_id, "b");
	_script($scope0_id, "a0");
	_scope($scope0_id, {
		e: input.plain,
		f: open
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "va1", input.plain, !_server_guard($scope0_reason, 0)), _content_withhold(input.plain));
}, 1);
