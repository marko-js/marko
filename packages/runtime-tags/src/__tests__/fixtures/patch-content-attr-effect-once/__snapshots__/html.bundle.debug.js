// tags/host.marko
const $template$1 = "<div></div>";
const $walks$1 = " b";
const $setup$1 = [[], ["__tests__/tags/host.marko_0_extra#4"]];
_shells({
	"__tests__/tags/host.marko_1*content": "__tests__/tags/host.marko_1*content !__tests__/tags/host.marko_1",
	"__tests__/tags/host.marko": "__tests__/tags/host.marko !__tests__/tags/host.marko_0_extra#4; ;<div></div>"
});
var host_default = _template("__tests__/tags/host.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	const $input_label__closures = new Set();
	const extra = { content: _content_resume("__tests__/tags/host.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.label, void 0, $scope0_reason, 0)}</em>`);
		_script($scope1_id, "__tests__/tags/host.marko_1");
		_unfilled_if($scope0_reason, 0) && _patch_init($scope1_id, _client_guard($scope0_reason, 0) ? "__tests__/tags/host.marko_1_input_label#0:3/init" : "__tests__/tags/host.marko_1_input_label#0:3/subscribe");
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_label__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/tags/host.marko", "1:2"));
	}, $scope0_id) };
	_html("<div>");
	_patch_attr_content("#div/0", $scope0_id, extra, 0, void 0, 0, 0);
	_html(`</div>${_el_resume($scope0_id, "#div/0", 0)}`);
	_script($scope0_id, "__tests__/tags/host.marko_0_extra#4");
	_patch_write($scope0_id, "PatchWrite:extra", extra, 1);
	_scope($scope0_id, {
		input_label: input.label,
		extra,
		"ClosureScopes:input_label/5": _write_if($scope0_reason, 0) && $input_label__closures
	}, "__tests__/tags/host.marko", 0, {
		input_label: ["input.label"],
		extra: "1:9"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/host.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
});

// template.marko
const $template = "<button>toggle</button><!><!>";
const $walks = " b%c";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0; b%;<button>toggle</button><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let show = false;
	_html(`<button>toggle</button>${_el_resume($scope0_id, "#button/0")}`);
	if ($scope0_page) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_set_scope_reason(_mask_group($scope0_reason, 0) << 1);
			const $childScope = _patch_child($scope1_id, "#childScope/0", 0);
			host_default({ label: input.label });
			_patch_child_end();
			_scope($scope1_id, { "#childScope/0": _write_if($scope0_reason, 0) && _existing_scope($childScope) }, "__tests__/template.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 0, 0, 1);
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_label: input.label,
		show
	}, "__tests__/template.marko", 0, {
		input_label: ["input.label"],
		show: "1:6"
	}) || _filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.label, !_server_guard($scope0_reason, 0));
}, 1);
