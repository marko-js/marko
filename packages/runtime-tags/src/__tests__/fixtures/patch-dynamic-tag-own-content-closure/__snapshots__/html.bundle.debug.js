// template.marko
const $template = "<!><!><button> </button>";
const $walks = "b%b D l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;b%b D ;<!><!><button> </button>" });
var template_default = _template_patch("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const $n__closures = new Set();
	let n = 0;
	const Content = { content: _content_resume("__tests__/template.marko_1*content", ({ label }) => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _scope_reason();
		let count = 0;
		_html(`<em>${_patch_text($scope1_id, "#text/1", label)} ${_text_resume($scope1_id, "#text/2", count, 2)} ${_text_resume($scope1_id, "#text/3", n, 2)}</em>${_el_resume($scope1_id, "#em/0")}`);
		_script($scope1_id, "__tests__/template.marko_1");
		_subscribe($n__closures, _scope($scope1_id, {
			count,
			_: _scope_with_id($scope0_id)
		}, "__tests__/template.marko", "2:2", { count: "3:8" }), "__tests__/template.marko_1_n#7/subscribe");
	}, $scope0_id) };
	const $tag = input.show ? Content : "span";
	const $input2 = { label: input.label };
	_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, _source_guard($scope0_reason, 0), _patch_dynamic_tag($scope0_id, "#text/0", $tag, $input2, 0, 0, $scope0_reason, 0));
	_html(`<button>${_text_resume($scope0_id, "#text/2", n)}</button>${_el_resume($scope0_id, "#button/1")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_page && _scope($scope0_id, {
		input_show: _source_if($scope0_reason, 2) && input.show,
		input_label: _source_if($scope0_reason, 1) && input.label,
		n,
		Content: _source_if($scope0_reason, 0) && Content,
		"ClosureScopes:n": $n__closures
	}, "__tests__/template.marko", 0, {
		input_show: ["input.show"],
		input_label: ["input.label"],
		n: "1:6",
		Content: "2:9"
	});
}, 1, 1);
