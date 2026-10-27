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
	const $scope0_reason = _scope_reason(), $wi__input_title = _write_if($scope0_reason, 4), $scope0_page = _page_render(), $sg__input_title = _server_guard($scope0_reason, 4), $cg__input_title = _client_guard($scope0_reason, 4);
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 4) && (_client_guard($scope0_reason, 3) || _client_guard($scope0_reason, 5) ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.title, !$sg__input_title) : _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title));
	const fmt = input.flag ? _bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmt", $scope0_id) : _resume((s) => s, "__tests__/template.marko_0/fmt2");
	const alt = input.alt || _bind_resume((s) => s + "=" + input.title, "__tests__/template.marko_0/alt", $scope0_id);
	const last = (0, _bind_resume((s) => s + ";" + input.title, "__tests__/template.marko_0/last", $scope0_id));
	const tag = _bind_resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id);
	let show = true;
	_html("<main>");
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id();
			card_default({ fn: fmt });
			_set_scope_reason(_mask_group($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id();
			card_default({ fn: alt });
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope3 = _peek_scope_id();
			card_default({ fn: last });
			_set_scope_reason(_mask_group($scope0_reason, 4) << 1);
			const $childScope4 = _peek_scope_id();
			card_default({ fn: tag });
			$scope0_page && _scope($scope1_id, {
				"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope),
				"#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3),
				"#childScope/3": $wi__input_title && _existing_scope($childScope4)
			}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_flag: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 0) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.flag,
		input_title: input.title,
		input_alt: (_unfilled_if($scope0_reason, 4) || _unfilled_if($scope0_reason, 1) || _unfilled_if($scope0_reason, 3) || _unfilled_if($scope0_reason, 5)) && input.alt,
		fmt,
		alt,
		last,
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_flag: ["input.flag"],
		input_title: ["input.title"],
		input_alt: ["input.alt"],
		fmt: "1:8",
		alt: "2:8",
		last: "3:8",
		tag: "4:8",
		show: "5:6"
	}) : (_filled_guard($scope0_reason, 3) && $cg__input_title && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.flag, !_server_guard($scope0_reason, 3)), _filled_guard($scope0_reason, 5) && $cg__input_title && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill2", input.alt, !_server_guard($scope0_reason, 5)), _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill3", fmt, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 1) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill4", alt, !_server_guard($scope0_reason, 1)), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill5", last, !$sg__input_title), _filled_guard($scope0_reason, 4) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill6", tag, !$sg__input_title));
}, 1);
