// tags/card/index.marko
const $template$1 = "<em> </em>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/card/index.marko": "__tests__/tags/card/index.marko;D ;<em> </em>" });
var card_default = _template("__tests__/tags/card/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<em>${_text_mark($scope0_id, "#text/0", input.fn("x"), 1, $scope0_reason, 0)}</em>`);
	_scope($scope0_id, {}, "__tests__/tags/card/index.marko", 0);
});

// template.marko
const $template = "<main><!><button>t</button></main>";
const $walks = "D%b l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>t</button></main>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 4), $cg__input_title = _client_guard($scope0_reason, 4), $wi__input_title = _write_if($scope0_reason, 4), $ui__input_title = _unfilled_if($scope0_reason, 4), $sg__input_title = _server_guard($scope0_reason, 4), $fg__input_title = _filled_guard($scope0_reason, 4), $fg__input_flag__OR__input_title = _filled_guard($scope0_reason, 0), $fg__input_title__OR__input_alt = _filled_guard($scope0_reason, 1), $fg__input_flag = _filled_guard($scope0_reason, 3), $fg__input_alt = _filled_guard($scope0_reason, 5);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const fmt = input.flag ? _bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmt", $scope0_id, 1) : _resume((s) => s, "__tests__/template.marko_0/fmt2");
	const alt = input.alt || _bind_resume((s) => s + "=" + input.title, "__tests__/template.marko_0/alt", $scope0_id, 1);
	const last = (0, _bind_resume((s) => s + ";" + input.title, "__tests__/template.marko_0/last", $scope0_id, 1));
	const tag = _bind_resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id, 1);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_updates_from($scope0_reason, 0) << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason(_updates_from($scope0_reason, 1) << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			card_default({ fn: alt });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/2", 2);
			card_default({ fn: last });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope4 = _peek_scope_id($scope1_id, "#childScope/3", 3);
			card_default({ fn: tag });
			_patch_child_end();
			_client_guard($scope0_reason, 0) && _patch_render($scope1_id, "__tests__/template.marko_1_fmt#0:9/setup");
			_client_guard($scope0_reason, 1) && _patch_render($scope1_id, "__tests__/template.marko_1_alt#0:10/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_last#0:11/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_tag#0:12/setup");
			_scope($scope1_id, {
				"#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope),
				"#childScope/1": _write_if($scope0_reason, 1) && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3),
				"#childScope/3": $wi__input_title && _existing_scope($childScope4)
			}, "__tests__/template.marko", "7:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_flag__OR__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_fmt#0:9/setup", "fmt");
	$fg__input_title__OR__input_alt && _patch_render($scope0_id, "__tests__/template.marko_1_alt#0:10/setup", "alt");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_last#0:11/setup", "last");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_tag#0:12/setup", "tag input_title");
	_patch_render($scope0_id, "__tests__/template.marko_0_input_flag#4_input_title#5/setup", (($fg__input_flag ? " input_flag" : "") + ($fg__input_title ? " input_title" : "")).slice(1), $scope0_reason, 0);
	_patch_render($scope0_id, "__tests__/template.marko_0_input_title#5_input_alt#7/setup", (($fg__input_title ? " input_title" : "") + ($fg__input_alt ? " input_alt" : "")).slice(1), $scope0_reason, 1);
	_scope($scope0_id, {
		input_flag: $wi__input_title && _unfilled_if($scope0_reason, 0) && input.flag,
		input_title: input.title,
		input_alt: $wi__input_title && _unfilled_if($scope0_reason, 1) && input.alt,
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
	}) || ($fg__input_flag && $ui__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_flag", input.flag, !_server_guard($scope0_reason, 3)), $fg__input_alt && $ui__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_alt", input.alt, !_server_guard($scope0_reason, 5)), $fg__input_flag__OR__input_title && _patch_write($scope0_id, "PatchMarkedWrite:fmt", fmt, !_server_guard($scope0_reason, 0)), $fg__input_title__OR__input_alt && _patch_write($scope0_id, "PatchMarkedWrite:alt", alt, !_server_guard($scope0_reason, 1)), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:last", last, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:tag", tag, !$sg__input_title));
}, 1);
