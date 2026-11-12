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
	const { fmt, wrap, quoted, keyed, templated } = {
		fmt: _bind_resume((s) => s + ":" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated", $scope0_id, 1),
		wrap: _bind_resume(function(s) {
			return "(" + s + input.title + ")";
		}, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated2", $scope0_id, 1),
		"quoted": _bind_resume((s) => s + "'" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated3", $scope0_id, 1),
		["keyed"]: _bind_resume((s) => s + "[" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated4", $scope0_id, 1),
		[`templated`]: _bind_resume((s) => s + "`" + input.title, "__tests__/template.marko_0/fmtWrapQuotedKeyedTemplated5", $scope0_id, 1)
	};
	const o = {
		get: _bind_resume((s) => s + "=" + input.title, "__tests__/template.marko_0/o", $scope0_id, 1),
		0: _bind_resume((s) => s + "0" + input.title, "__tests__/template.marko_0/o2", $scope0_id, 1)
	};
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
			card_default({ fn: wrap });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope3 = _peek_scope_id($scope1_id, "#childScope/2", 2);
			card_default({ fn: quoted });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope4 = _peek_scope_id($scope1_id, "#childScope/3", 3);
			card_default({ fn: keyed });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope5 = _peek_scope_id($scope1_id, "#childScope/4", 4);
			card_default({ fn: templated });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope6 = _peek_scope_id($scope1_id, "#childScope/5", 5);
			card_default({ fn: o.get });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope7 = _peek_scope_id($scope1_id, "#childScope/6", 6);
			card_default({ fn: o[0] });
			_patch_child_end();
			_set_scope_reason($uf__input_title << 1);
			const $childScope8 = _peek_scope_id($scope1_id, "#childScope/7", 7);
			card_default({ fn: tag });
			_patch_child_end();
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_fmt#0:6/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_wrap#0:7/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_quoted#0:8/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_keyed#0:9/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_templated#0:10/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_o_get#0:12/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_o_0#0:13/setup");
			$cg__input_title && _patch_render($scope1_id, "__tests__/template.marko_1_tag#0:14/setup");
			_scope($scope1_id, {
				"#childScope/0": $wi__input_title && _existing_scope($childScope),
				"#childScope/1": $wi__input_title && _existing_scope($childScope2),
				"#childScope/2": $wi__input_title && _existing_scope($childScope3),
				"#childScope/3": $wi__input_title && _existing_scope($childScope4),
				"#childScope/4": $wi__input_title && _existing_scope($childScope5),
				"#childScope/5": $wi__input_title && _existing_scope($childScope6),
				"#childScope/6": $wi__input_title && _existing_scope($childScope7),
				"#childScope/7": $wi__input_title && _existing_scope($childScope8)
			}, "__tests__/template.marko", "17:4");
			return 0;
		}
	}, $scope0_id, "#text/0");
	_html(`<button>t</button>${_el_mark($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_fmt#0:6/setup", "fmt");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_wrap#0:7/setup", "wrap");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_quoted#0:8/setup", "quoted");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_keyed#0:9/setup", "keyed");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_templated#0:10/setup", "templated");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_o_get#0:12/setup", "o_get");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_o_0#0:13/setup", "o_0");
	$fg__input_title && _patch_render($scope0_id, "__tests__/template.marko_1_tag#0:14/setup", "tag input_title");
	_scope($scope0_id, {
		input_title: input.title,
		fmt,
		wrap,
		quoted,
		keyed,
		templated,
		o_get: o.get,
		o_0: o[0],
		tag,
		show
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		fmt: "1:10",
		wrap: "1:15",
		quoted: "1:21",
		keyed: "1:29",
		templated: "1:36",
		o_get: ["o.get", "10:8"],
		o_0: ["o[0]", "10:8"],
		tag: "14:8",
		show: "15:6"
	}) || ($fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:fmt", fmt, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:wrap", wrap, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:quoted", quoted, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:keyed", keyed, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:templated", templated, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:o_get", o.get, !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:o_0", o[0], !$sg__input_title), $fg__input_title && _patch_write($scope0_id, "PatchMarkedWrite:tag", tag, !$sg__input_title));
}, 1);
