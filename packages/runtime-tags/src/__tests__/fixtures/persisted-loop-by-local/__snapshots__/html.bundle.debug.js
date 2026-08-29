// template.marko
const $template = "<main><ul></ul><button>+</button></main>";
const $walks = "D b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D b ;<main><ul></ul><button>+</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let items = [{
		id: 1,
		label: "a"
	}];
	_html("<main><ul>");
	if ($scope0_reason) _for_of(items, (item) => {
		const $scope1_id = _scope_id();
		_html(`<li>${_text_resume($scope1_id, "#text/0", item.label)}</li>`);
		_scope($scope1_id, {}, "__tests__/template.marko", "4:6");
	}, (item) => item.id, $scope0_id, "#ul/0", 1, 1, 1, "</ul>", 1);
	_html(`<button>+</button>${_el_resume($scope0_id, "#button/1")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason && _scope($scope0_id, { items }, "__tests__/template.marko", 0, { items: "1:6" });
	_resume_branch($scope0_id);
}, 1, 0);
