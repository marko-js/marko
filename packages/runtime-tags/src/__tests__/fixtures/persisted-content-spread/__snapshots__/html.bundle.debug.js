// template.marko
const $template = "<main><div></div><section></section><button> </button></main>";
const $walks = "D b b D m";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_title__closures = new Set();
	let count = 0;
	const extra = { content: _content_resume("__tests__/template.marko_1*content", () => {
		const $scope1_id = _scope_id();
		const $scope1_reason = _persisted_reason();
		_html(`<em>${_patch_text($scope1_id, "#text/0", input.title, void 0, $scope0_owned, 0)}</em>`);
		_subscribe(_source_if($scope0_reason, 0) && $input_title__closures, _scope($scope1_id, { _: _scope_with_id($scope0_id) }, "__tests__/template.marko", "2:2"));
	}, $scope0_id) };
	_html(`<main><div${_patch_attrs(input.attrs, "#div/0", $scope0_id, "div", void 0, $scope0_owned, 1)}>`);
	_patch_dynamic_tag($scope0_id, "#div/0", extra, 0, 0, 0, 0, 0);
	_attr_content("#div/0", $scope0_id, extra);
	_html(`</div>${_el_resume($scope0_id, "#div/0")}<section`);
	_patch_attrs_content({
		...input.attrs,
		content: extra
	}, "#section/1", $scope0_id, "section", void 0, void 0, $scope0_owned, 1);
	_html(`</section>${_el_resume($scope0_id, "#section/1")}<button>${_text_resume($scope0_id, "#text/3", count)}</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#7_extra#9");
	_script($scope0_id, "__tests__/template.marko_0_input_attrs#7");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		count,
		extra,
		"ClosureScopes:input_title": $input_title__closures
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6",
		extra: "2:9",
		"EventAttributes:#div/0": ["...input.attrs", "6:11"],
		"EventAttributes:#section/1": ["...{ ...input.attrs, content: extra }", "7:15"]
	}) : _owned_guard($scope0_owned, 0) && _content_withheld("__tests__/template.marko_1*content") && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
}, 1, 0);
