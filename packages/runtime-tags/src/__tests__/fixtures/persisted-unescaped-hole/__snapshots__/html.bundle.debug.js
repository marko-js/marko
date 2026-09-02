// template.marko
const $template = "<main><div> </div><!><button>+</button></main>";
const $walks = "E l%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;E l%b ;<main><div> </div><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	_html(`<main><div>${_patch_html($scope0_id, "#text/0", input.html, void 0, $scope0_owned, 0)}</div>`);
	if ($scope0_reason) _if(() => {
		if (count) {
			const $scope1_id = _scope_id();
			_html(`<p>${_html_resume($scope1_id, "#text/0", input.html)}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_html: input.html,
		count
	}, "__tests__/template.marko", 0, {
		input_html: ["input.html"],
		count: "1:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.html);
	_resume_branch($scope0_id);
}, 1, 0);
