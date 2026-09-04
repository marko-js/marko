// template.marko
const $template = "<main><!><button class=o>o</button><button class=i>i</button></main>";
const $walks = "D%b b l";
_shells({ "__tests__/template.marko": "__tests__/template.marko !__tests__/template.marko_0;D%b b ;<main><!><button class=o>o</button><button class=i>i</button></main>" });
var template_default = _template_persisted("__tests__/template.marko", (input) => {
	const $scope0_owned = _persisted_ownership(), $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const $input_note__closures = new Set();
	let outer = ["a"];
	let inner = ["x"];
	_html("<main>");
	if ($scope0_reason) _for_of(outer, (o) => {
		const $scope1_id = _scope_id();
		if ($scope0_reason) _for_of(inner, (i) => {
			const $scope2_id = _scope_id();
			_html(`<div>${_text_resume($scope2_id, "#text/0", o)}${_text_resume($scope2_id, "#text/1", i, 2)}: ${_text_resume($scope2_id, "#text/2", input.note, 2)}</div>`);
			_subscribe(_source_if($scope0_reason, 0) && $input_note__closures, _scope($scope2_id, {}, "__tests__/template.marko", "5:6"));
		}, 0, $scope1_id, "#text/0", 1, 1, 1, 0, 1);
		_scope($scope1_id, { o }, "__tests__/template.marko", "4:4", { o: "4:8" });
	}, 0, $scope0_id, "#text/0");
	_html(`<button class=o>o</button>${_el_resume($scope0_id, "#button/1")}<button class=i>i</button>${_el_resume($scope0_id, "#button/2")}</main>`);
	_script($scope0_id, "__tests__/template.marko_0");
	$scope0_reason ? _scope($scope0_id, {
		input_note: input.note,
		outer,
		inner,
		"ClosureScopes:input_note": $input_note__closures
	}, "__tests__/template.marko", 0, {
		input_note: ["input.note"],
		outer: "1:6",
		inner: "2:6"
	}) : _owned_guard($scope0_owned, 0) && _patch_value($scope0_id, "__tests__/template.marko0", input.note);
}, 1, 0);
