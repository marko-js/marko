// template.marko
const $template = "<!><div> </div><button>+</button>";
const $walks = "0&b D l b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;0&b D l ;<!><div> </div><button>+</button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let n = 0;
	const Sum = { content: _content("__tests__/template.marko_1*content", ({ a, b }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		const $return = a + b;
		_write_if($scope1_reason, 0) && _scope($scope1_id, {
			a: _write_if($scope1_reason, 2) && a,
			b: _write_if($scope1_reason, 1) && b
		}, "__tests__/template.marko", "2:2", {
			a: "2:15",
			b: "2:18"
		}) || _filled_guard($scope1_reason, 2) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", b, !_server_guard($scope1_reason, 2));
		return $return;
	}, $scope0_id) };
	_set_scope_reason(14 | _mask_group($scope0_reason, 0) << 5);
	const $childScope = _peek_scope_id($scope0_id, "#childScope/0", 0, 1);
	let total = Sum.content({
		a: n,
		b: input.b
	});
	_var($scope0_id, "#scopeOffset/1", $childScope, "__tests__/template.marko_0_total#9/var");
	_patch_child_end();
	_html(`<div>${_text_resume($scope0_id, "#text/3", total)}</div>${_el_resume($scope0_id, "#div/2")}<button>+</button>${_el_resume($scope0_id, "#button/4")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_total#9");
	_scope($scope0_id, {
		n,
		total,
		"#childScope/0": _existing_scope($childScope)
	}, "__tests__/template.marko", 0, {
		n: "1:6",
		total: "5:6"
	});
}, 1);
