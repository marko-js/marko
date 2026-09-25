// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason();
	const $scope0_id = _scope_id();
	let mode = "a";
	let out = "";
	let active = false;
	const pick = _resume(function() {
		return mode === "a" ? () => {
			out = "A";
		} : () => {
			out = "B";
		};
	}, "__tests__/template.marko_0/pick", $scope0_id);
	const getAttrs = _resume(function() {
		return { class: active ? "on" : "off" };
	}, "__tests__/template.marko_0/getAttrs", $scope0_id);
	const cls = _resume(function() {
		return active ? "on" : "off";
	}, "__tests__/template.marko_0/cls", $scope0_id);
	_html(`<button id=pick>${_text_resume($scope0_id, "#text/1", out)}</button>${_el_resume($scope0_id, "#button/0")}<div`);
	_attrs_content({
		id: "spread",
		...getAttrs()
	}, "#div/2", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/2")}<div`);
	_attrs_content({
		id: "before-spread",
		class: cls(),
		...input.rest
	}, "#div/3", $scope0_id, "div");
	_html(`</div>${_el_resume($scope0_id, "#div/3")}<button id=mode>mode</button>${_el_resume($scope0_id, "#button/4")}<button id=toggle>toggle</button>${_el_resume($scope0_id, "#button/5")}`);
	_script($scope0_id, "__tests__/template.marko_0");
	_script($scope0_id, "__tests__/template.marko_0_input_rest#8_cls#14");
	_script($scope0_id, "__tests__/template.marko_0_getAttrs#13");
	_script($scope0_id, "__tests__/template.marko_0_pick#12");
	_scope($scope0_id, {
		input_rest: input.rest,
		mode,
		active,
		pick,
		cls: _serialize_if($scope0_reason, 0) && cls
	}, "__tests__/template.marko", 0, {
		input_rest: ["input.rest"],
		mode: "1:6",
		active: "3:6",
		pick: "4:8",
		cls: "8:8",
		"EventAttributes:#div/2": ["...getAttrs()", "10:21"],
		"EventAttributes:#div/3": ["...input.rest", "11:40"]
	});
}, 1);
