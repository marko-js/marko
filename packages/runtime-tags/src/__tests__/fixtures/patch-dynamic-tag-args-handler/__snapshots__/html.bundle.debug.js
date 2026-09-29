// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b D ;<!><!><button> </button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	let n = 0;
	const $tag = input.tag;
	const $input2 = {
		title: input.title,
		onClick: _resume(function() {
			n = input.title.length;
		}, "__tests__/template.marko_0/onClick", $scope0_id)
	};
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page ? _scope($scope0_id, {
		input_tag: _source_if($scope0_reason, 1) && input.tag,
		input_title: input.title,
		n
	}, "__tests__/template.marko", 0, {
		input_tag: ["input.tag"],
		input_title: ["input.title"],
		n: "1:6"
	}) : _filled_guard($scope0_reason, 1) && _patch_write($scope0_id, "input_title", input.title);
}, 1, 1);
