// template.marko
var template_default = _template("__tests__/template.marko", (input) => {
	const $scope0_reason = _scope_reason(), $wg__input_media = _write_guard($scope0_reason, 1), $wg__input_media__OR__input_src = _write_guard($scope0_reason, 0);
	const $scope0_id = _scope_id();
	const $global$1 = $global();
	let show = false;
	_html(`<main><button>show</button>${_el_resume($scope0_id, "#button/0")}`);
	_if(() => {
		if (show) {
			const $scope1_id = _scope_id();
			_html(`<style${_attr("nonce", $global$1.cspNonce)}>main { --a: 1 }</style><style${_attr_nonce()}${_attr("media", input.media)}>main { --b: 1 }</style>${_el_resume($scope1_id, "#style/1", $wg__input_media)}<style${_attr_nonce()} src=x.css${_attr("media", input.media)}>main { --c: 1 }</style>${_el_resume($scope1_id, "#style/2", $wg__input_media)}<style${_attr_nonce()}${_attr("src", input.src)}${_attr("media", input.media)}>main { --d: 1 }</style>${_el_resume($scope1_id, "#style/3", $wg__input_media__OR__input_src)}`);
			_scope($scope1_id, {}, "__tests__/template.marko", "4:4");
			return 0;
		}
	}, $scope0_id, "#text/1");
	_html("</main>");
	_script($scope0_id, "__tests__/template.marko_0");
	_scope($scope0_id, {
		input_media: input.media,
		input_src: input.src
	}, "__tests__/template.marko", 0, {
		input_media: ["input.media"],
		input_src: ["input.src"]
	});
}, 1);
