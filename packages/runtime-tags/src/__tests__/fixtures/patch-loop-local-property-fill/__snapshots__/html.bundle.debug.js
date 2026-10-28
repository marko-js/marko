// tags/tagged/index.marko
const $template$1 = "<span> </span>";
const $walks$1 = "D l";
const $setup$1 = [[], []];
_shells({ "__tests__/tags/tagged/index.marko": "__tests__/tags/tagged/index.marko;D ;<span> </span>" });
var tagged_default = _template("__tests__/tags/tagged/index.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	_html(`<span>${_text_resume($scope0_id, "#text/0", input.label, 1, $scope0_reason, 0)}</span>`);
	_scope($scope0_id, {}, "__tests__/tags/tagged/index.marko", 0);
});

// template.marko
const $template = "<!><!><button>+</button>";
const $walks = "b%b b";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({
	"__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b ;<!><!><button>+</button>",
	"__tests__/template.marko_1*shell": /*@__PURE__*/ ((_w0) => `__tests__/template.marko_1*shell${_shell_marker(_shell_setup([["__tests__/template.marko_1_count#0:5/init"], []], ["#childScope/0>", $setup$1]))};${/*@__PURE__*/ ((_w0) => `/${_w0}&`)("D l")};${_w0}`)($template$1)
});
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_for_of(input.rows, (row) => {
		const $scope1_id = _scope_id();
		const item = row.item;
		_filled_guard($scope0_reason, 0) && _patch_fill($scope1_id, "PatchFill:__tests__/template.marko_fill0", item?.id);
		_set_scope_reason(6);
		const $childScope = _peek_scope_id($scope1_id, "#childScope/0", 0);
		tagged_default({ label: `${item.id}:${count}` });
		_patch_child_end();
		_scope($scope1_id, {
			item_id: item?.id,
			_: _scope_with_id($scope0_id),
			"#childScope/0": _existing_scope($childScope)
		}, "__tests__/template.marko", "2:2", { item_id: ["item.id", "3:10"] });
	}, 0, $scope0_id, "#text/0", 1, 1, 1, 0, 0, "__tests__/template.marko_1*shell", $scope0_reason, 0);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, { count }, "__tests__/template.marko", 0, { count: "1:6" });
}, 1);
