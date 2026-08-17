// template.marko
const $template = "<div><h1> </h1><h2> </h2><button>+</button></div>";
const $walks = "E lD l l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	let count = 0;
	let other = 10;
	_html(`<div><h1>${_escape(input.title + " #" + count)}${_el_resume($scope0_id, "#text/0")}</h1><h2>${_escape(input.title + " / " + other)}${_el_resume($scope0_id, "#text/1")}</h2><button>+</button>${_el_resume($scope0_id, "#button/2")}</div>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_title: input.title,
		count,
		other
	}, "__tests__/template.marko", 0, {
		input_title: ["input.title"],
		count: "1:6",
		other: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.title);
	_resume_branch($scope0_id);
}, 1, 0);
