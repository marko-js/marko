// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
const $setup = [[], ["__tests__/template.marko_0"]];
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b D ;<!><!><button> </button>" });
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $cg__input_title = _client_guard($scope0_reason, 2), $sg__input_title = _server_guard($scope0_reason, 2), $cg__input_tag = _client_guard($scope0_reason, 1), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	_filled_guard($scope0_reason, 2) && ($cg__input_tag ? _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill1", input.title, !$sg__input_title) : _patch_write($scope0_id, "PatchMarkedWrite:input_title", input.title, !$sg__input_title)), $cg__input_tag && _content_withhold(input.title);
	let n = 0;
	_dynamic_tag($scope0_id, "#text/0", input.tag, {
		title: input.title,
		onClick: _bind_resume(function() {
			n = input.title.length;
		}, "__tests__/template.marko_0/onClick", $scope0_id)
	}, 1, 0, 0, _write_guard($scope0_reason, 0), $scope0_reason, 0, 0, 1);
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_tag: (_unfilled_if($scope0_reason, 2) || _unfilled_if($scope0_reason, 0)) && input.tag,
		input_title: input.title,
		n
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_title: ["input.title"],
		n: "1:6"
	}) : (_filled_guard($scope0_reason, 1) && $cg__input_title && _patch_fill($scope0_id, "PatchFill:__tests__/template.marko_fill0", input.tag, !_server_guard($scope0_reason, 1)), $cg__input_title && _content_withhold(input.tag));
}, 1);
