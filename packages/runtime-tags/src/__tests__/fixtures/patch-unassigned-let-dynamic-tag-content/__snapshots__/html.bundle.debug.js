// tags/wrap.marko
const $template$1 = "<button> </button><!><!>";
const $walks$1 = " D l%c";
const $setup$1 = [[], ["__tests__/tags/wrap.marko_0"]];
_shells({ "__tests__/tags/wrap.marko": "__tests__/tags/wrap.marko !__tests__/tags/wrap.marko_0; D l%;<button> </button><!><!>" });
var wrap_default = _template("__tests__/tags/wrap.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_content = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	let n = 0;
	_html(`<button>${_text_resume($scope0_id, "#text/1", n)}</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (n < 2) {
			const $scope1_id = _scope_id();
			_dynamic_tag($scope1_id, "#text/0", input.content, {}, 0, 0, 0, $wg__input_content);
			_scope($scope1_id, {}, "__tests__/tags/wrap.marko", "3:2");
			return 0;
		}
	}, $scope0_id, "#text/2");
	_script($scope0_id, "__tests__/tags/wrap.marko_0");
	_patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill1", n, 1);
	_scope($scope0_id, {
		input_content: input.content,
		n
	}, "__tests__/tags/wrap.marko", 0, {
		input_content: ["input.content"],
		n: "1:6"
	}) || (_filled_guard($scope0_reason, 0) && _patch_fill($scope0_id, "PatchFill:__tests__/tags/wrap.marko_fill0", input.content, !_server_guard($scope0_reason, 0)), _content_withhold(input.content));
});

// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
const $setup = [[], []];
_shells({ "__tests__/template.marko": "__tests__/template.marko !;b%;<!><!><!>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render(), $wi__input_w = _write_if($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $input_w__closures = new Set();
	let view = wrap_default;
	_dynamic_tag($scope0_id, "#text/0", view, {}, 2, _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		_html(`<p>${_text_resume($scope1_id, "#text/0", input.w, 1, $scope0_reason, 0)}</p>`);
		_subscribe(_unfilled_if($scope0_reason, 0) && $input_w__closures, _scope($scope1_id, { _: $wi__input_w && _scope_with_id($scope0_id) }, "__tests__/template.marko", "3:4"), "__tests__/template.marko_1_input_w#0:3/subscribe");
	}, $scope0_id, ($scope) => $scope0_page ? [{ input_w: input.w }] : []), 0, 0, 0, 0);
	_scope($scope0_id, { "ClosureScopes:input_w/5": $wi__input_w && $input_w__closures }, "__tests__/template.marko", 0) || _filled_guard($scope0_reason, 0) && _content_withheld("__tests__/template.marko_1*content", $scope0_id) && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.w, !_server_guard($scope0_reason, 0));
	$wi__input_w && _resume_branch($scope0_id);
}, 1);
