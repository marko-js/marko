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
	const $scope0_reason = _scope_reason(), $uf__input_title = _updates_from($scope0_reason, 0), $cg__input_title = _client_guard($scope0_reason, 0), $wi__input_title = _write_if($scope0_reason, 0), $sg__input_title = _server_guard($scope0_reason, 0), $fg__input_title = _filled_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	$fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title);
	const [fmt] = [_bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmt", $scope0_id, 1)];
	const tag = _bind_resume((s) => s + "#" + input.title, "__tests__/template.marko_0/tag", $scope0_id, 1);
	let show = true;
	_html("<main>");
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason($uf__input_title << 1);
			const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
			card_default({ fn: fmt });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope2 = _peek_scope_id($scope1_id, "#childScope/1", 1);
			card_default({ fn: tag });
			_patch_child_end();
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_fmt#0:6/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_tag#0:7/setup");
			_scope($scope1_id, {
				"#childScope/0": $wi__input_title && _existing_scope($childScope),
				"#childScope/1": $wi__input_title && _existing_scope($childScope2)
			}, "__tests__/template.marko", "5:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_fmt#0:6/setup", "fmt");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_tag#0:7/setup", "tag input_title");
	_scope($scope0_id, {
		input_title: input.title,
		fmt,
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		fmt: "1:9",
		tag: "2:8",
		show: "3:6"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:fmt", fmt, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:tag", tag, !$sg__input_title));
}, 1);
