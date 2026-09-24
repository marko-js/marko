// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	let out = "";
	let active = false;
	const pick = _resume(function() {
		return () => {
			out = "A";
		};
	}, "a0", $scope0_id);
	const getAttrs = _resume(function() {
		return { class: "off" };
	}, "a1", $scope0_id);
	const cls = _resume(function() {
		return "off";
	}, "a2", $scope0_id);
	_html(`<button id=pick>${_text_resume($scope0_id, "b", out)}</button>${_el_resume($scope0_id, "a")}<div`);
	_attrs_content({
		id: "spread",
		...getAttrs()
	}, "c", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "c")}<div`);
	_attrs_content({
		id: "before-spread",
		class: cls(),
		...input.rest
	}, "d", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "d")}<button id=mode>mode</button>${_el_resume($scope0_id, "e")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "f")}`);
	_script($scope0_id, "a3");
	_script($scope0_id, "a4");
	_script($scope0_id, "a5");
	_script($scope0_id, "a6");
	_scope($scope0_id, {
		i: input.rest,
		j: mode,
		l: active,
		m: pick,
		o: _serialize_if($scope0_reason, 0) && cls
	});
}, 1);
