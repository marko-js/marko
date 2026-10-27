// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_html(`<em>${_patch_text($scope0_id, "#text/0", input.fn("x"), void 0, $scope0_reason, 0)}</em>`);
	$scope0_page && _scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 0), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const [, , chars] = [..."ab", _bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/chars", $scope0_id)];
	const [, items] = [...[input.title], _bind_resume((s) => s + "=" + input.title, "__tests__/template.marko_0/items", $scope0_id)];
	const tag = _bind_resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id);
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			card_default({ fn: chars });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope2 = _patch_child($scope1_id, "#childScope/1", 1);
			card_default({ fn: items });
			_patch_child_end();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope3 = _patch_child($scope1_id, "#childScope/2", 2);
			card_default({ fn: tag });
			_patch_child_end();
			$scope0_page && _scope($scope1_id, {
				"#childScope/0": $wi__input_title && _existing_scope($childScope),
				"#childScope/1": $wi__input_title && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3)
			}, "__tests__/template.marko", "6:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_title: input.title,
		chars,
		items,
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		chars: "1:13",
		items: "2:11",
		tag: "3:8",
		show: "4:6"
	}) : (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", chars, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", items, !$sg__input_title), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", tag, !$sg__input_title));
}, 1);
