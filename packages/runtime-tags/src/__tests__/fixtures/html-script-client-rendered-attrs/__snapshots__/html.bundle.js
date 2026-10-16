// template.marko
var template_default = _template("a", (input) => {
	const $scope0_reason = _scope_reason();
	_write_guard($scope0_reason, 3);
	const $scope0_id = _scope_id();
	let type = "text/plain";
	let items = ["a"];
	_html(`<main><button class=show>show</button>${_el_resume($scope0_id, "a")}<button class=add>add</button>${_el_resume($scope0_id, "b")}<script${_attr_nonce()}${_attr("data-root", input.root)}>(window.ran ||= []).push("root " + document.currentScript.dataset.root)<\/script>${_el_resume($scope0_id, "c", _write_guard($scope0_reason, 1))}<script${_attrs({
		nonce: $global().cspNonce,
		...input.rootAttrs
	}, "d", $scope0_id, "script")}>(window.ran ||= []).push("inline")<\/script>${_el_resume($scope0_id, "d")}`);
	_if(() => {}, $scope0_id, "e");
	_for_of(items, (item) => {
		const $scope2_id = _scope_id();
		_html(`<script${_attr_nonce()}${_attr("data-item", item)}>(window.ran ||= []).push("row " + document.currentScript.dataset.item)<\/script>${_el_resume($scope2_id, "a")}`);
		_scope($scope2_id, {});
	}, 0, $scope0_id, "f", 1, 1, 0, 0, 1);
	_html("</main>");
	_script($scope0_id, "a2");
	_script($scope0_id, "a3");
	_scope($scope0_id, {
		k: input.attrs,
		l: input.src,
		m: input.external,
		n: input.a,
		p: type,
		q: items
	});
}, 1);
