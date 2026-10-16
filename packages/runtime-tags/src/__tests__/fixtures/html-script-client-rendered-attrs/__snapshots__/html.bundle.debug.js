// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_a = _write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let show = false;
	let type = "text/plain";
	let items = ["a"];
	_html(`<main><button class=show>show</button>${_el_resume($scope0_id, "#button/0")}<button class=add>add</button>${_el_resume($scope0_id, "#button/1")}<script${_attr_nonce()}${_attr("data-root", input.root)}>(window.ran ||= []).push("root " + document.currentScript.dataset.root)<\/script>${_el_resume($scope0_id, "#script/2", _write_guard($scope0_reason, 1))}<script${_attrs({
		nonce: $global().cspNonce,
		...input.rootAttrs
	}, "#script/3", $scope0_id, "script")}>(window.ran ||= []).push("inline")<\/script>${_el_resume($scope0_id, "#script/3")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<script${_attr_nonce()}${_attr("type", type)}>(window.ran ||= []).push("plain")<\/script><script${_attrs({
				nonce: $global().cspNonce,
				...input.attrs
			}, "#script/1", $scope1_id, "script")}>(window.ran ||= []).push("spread")<\/script>${_el_resume($scope1_id, "#script/1")}<script${_attr_nonce()} src=/never.js${_attr("type", type)}><\/script><script${_attr_nonce()}${_attr("src", input.src)}${_attr("type", type)}><\/script>${_el_resume($scope1_id, "#script/3", _write_guard($scope0_reason, 2))}<script${_attrs({
				nonce: $global().cspNonce,
				...input.external
			}, "#script/4", $scope1_id, "script")}>(window.ran ||= []).push("inline")<\/script>${_el_resume($scope1_id, "#script/4")}<script${_attr_nonce()}${_attr("data-a", input.a)}>${_escape_script(`(window.ran ||= []).push(${_to_text(JSON.stringify(type))} + " " + document.currentScript.dataset.a)`)}<\/script>${_el_resume($scope1_id, "#script/5", $wg__input_a)}<script${_attr_nonce()}${_attr("data-a", input.a)}${_attr_and("type", type && "module", " type=text/javascript")}>(window.ran ||= []).push("both " + document.currentScript.dataset.a)<\/script>${_el_resume($scope1_id, "#script/6", $wg__input_a)}`);
			_script($scope1_id, "__tests__/template.marko_1_input_external#0:12");
			_script($scope1_id, "__tests__/template.marko_1_input_attrs#0:10");
			_scope($scope1_id, {}, "__tests__/template.marko", "9:4", {
				"EventAttributes:#script/1": ["...input.attrs", "11:21"],
				"EventAttributes:#script/4": ["...input.external", "14:21"]
			});
			return 0;
		}
	}, $scope0_id, "#text/4");
	_for_of(items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<script${_attr_nonce()}${_attr("data-item", item)}>(window.ran ||= []).push("row " + document.currentScript.dataset.item)<\/script>${_el_resume($scope2_id, "#script/0")}`);
		_scope($scope2_id, {}, "__tests__/template.marko", "18:4");
	}, 0, $scope0_id, "#text/5", 1, 1, 0, 0, 1);
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0_input_rootAttrs#9");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_attrs: input.attrs,
		input_src: input.src,
		input_external: input.external,
		input_a: input.a,
		type,
		items
	}, "__tests__/template.marko", 0, {
		input_attrs: ["input.attrs"],
		input_src: ["input.src"],
		input_external: ["input.external"],
		input_a: ["input.a"],
		type: "2:6",
		items: "3:6",
		"EventAttributes:#script/3": ["...input.rootAttrs", "8:19"]
	});
}, 1);
