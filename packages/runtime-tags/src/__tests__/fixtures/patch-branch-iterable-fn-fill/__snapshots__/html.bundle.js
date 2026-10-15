// template.marko
_shells({ a: "a !a2;D%b ;<main><!><button>show</button></main>" });
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 0);
	const $scope0_page = _page_render();
	const $scope0_id = _scope_id();
	const getTitle = _resume(() => input.title, "a0", $scope0_id);
	const api = {
		label: input.title,
		[Symbol.iterator]: _resume(function* () {
			yield getTitle;
		}, "a1", $scope0_id)
	};
	let show = false;
	_html("<main>");
	if ($scope0_page) _if(() => {}, $scope0_id, "a", 1, 1, 0, 0, 1);
	_html(`<button>show</button>${_el_resume($scope0_id, "b")}</main>`);
	_script($scope0_id, "a2");
	_patch_value($scope0_id, "va5", show, 1);
	$scope0_page ? _scope($scope0_id, {
		e: input.title,
		f: getTitle,
		g: api,
		h: api.label
	}) : (_filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va3", api, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 0) && _patch_value($scope0_id, "va4", api.label, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "we", input.title, !_server_guard($scope0_reason, 0)), _filled_guard($scope0_reason, 0) && _patch_write($scope0_id, "wf", getTitle, !_server_guard($scope0_reason, 0)));
}, 1);
