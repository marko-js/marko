// template.marko
const $template = "<main><!><p> </p><button>+</button></main>";
const $walks = "D%bD l l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html$1("<main>");
	_patch_dynamic_tag($scope0_id, "#text/0", input.content, $scope0_owned, 0);
	_dynamic_tag$1($scope0_id, "#text/0", input.content, {}, 0, 0, _source_guard($scope0_reason, 0), 1);
	_html$1(`<p>${_escape(input.content + ":" + count)}${_el_resume($scope0_id, "#text/1")}</p><button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script$1($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_content: input.content,
		count
	}, "__tests__/template.marko", 0, {
		input_content: ["input.content"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.content);
	_resume_branch($scope0_id);
}, 1, 0);
