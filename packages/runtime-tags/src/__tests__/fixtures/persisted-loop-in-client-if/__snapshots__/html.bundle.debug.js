// template.marko
const $template = "<main><!><button class=toggle>t</button><button class=add>+</button></main>";
const $walks = "D%b b l";
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let show = false;
	let items = ["a"];
	_html("<main>");
	if ($scope0_reason) _if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html("<ul>");
			if ($scope0_reason) _for_of(items, (item) => {
				const $scope2_id = _scope_id();
				_html(`<li>${_escape(item)}${_el_resume($scope2_id, "#text/0")}: <!>${_escape(input.note)}${_el_resume($scope2_id, "#text/1")}</li>`);
				_subscribe(_source_if($scope0_reason, 0) && $input_note__closures, writeScope($scope2_id, {}, "__tests__/template.marko", "6:8"));
			}, 0, $scope1_id, "#ul/0", 1, 1, 1, "</ul>", 1);
			writeScope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/0", 1, 1, 1, 0, 1);
	_html(`<button class=toggle>t</button>${_el_resume($scope0_id, "#button/1")}<button class=add>+</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? writeScope($scope0_id, {
		input_note: input.note,
		show,
		items,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		show: "1:6",
		items: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
	_resume_branch($scope0_id);
}, 1, 0);
