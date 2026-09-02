// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button class=step>show</button></main>" });
var template_default = _template_persisted("a", (input) => {
	const $scope0_reason = _persisted_reason();
	const $scope0_id = _scope_id();
	const title = $global().title + "!";
	_html("<main>");
	if ($scope0_reason) _if(() => {}, $scope0_id, "a", 1, 1, 1, 0, 1);
	_html(`<button class=step>show</button>${_el_resume($scope0_id, "b")}</main>`);
	_global_subscribe("a0", $scope0_id);
	_script($scope0_id, "a2");
	$scope0_reason ? _scope($scope0_id, { c: title }) : _patch_write($scope0_id, "c", title);
	_resume_branch($scope0_id);
}, 1, 1);
