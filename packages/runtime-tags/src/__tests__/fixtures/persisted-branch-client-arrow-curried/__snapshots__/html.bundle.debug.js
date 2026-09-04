// template.marko
const $template = "<main><!><button>+</button></main>";
const $walks = "D%b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b ;<main><!><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const mk = _resume(() => input.title, "__tests__/template.marko_0/mk", $scope0_id);
	let open = false;
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (open) {
			const $scope1_id = _scope_id();
			const pick = () => mk;
			_html(`<p>${_text_resume($scope1_id, "#text/0", pick()())}</p>`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_title: input.title,
		mk,
		open
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		mk: "1:8",
		open: "2:6"
	}) : (_owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", mk), _owned_guard($scope0_owned, 0) && _patch_write($scope0_id, "input_title", input.title));
}, 1, 0);
