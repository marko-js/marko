// template.marko
const $template = "<!><!><!>";
const $walks = "b%c";
async function* stream(items) {
	let tick = 0;
	for (const item of items) {
		if (item === "boom") {
			yield rejectAfter(new Error("boom"), ++tick);
		} else {
			yield resolveAfter(item, ++tick);
		}
	}
}
const $forawait_content__item = ($scope, item) => _text($scope["#text/0"], item);
const $forawait_content__$params = ($scope, $params3) => $forawait_content__item($scope, $params3[0]);
const $catch_content__err_message = ($scope, err_message) => _text($scope["#text/0"], err_message);
const $catch_content__$params = ($scope, $params2) => $catch_content__err_message($scope, $params2[0]?.message);
const $catch_content = _content_resume("__tests__/template.marko_3*content", "<em> </em>", "D ", 0, $catch_content__$params);
const $placeholder_content = _content_resume("__tests__/template.marko_2*content", "<span>loading</span>");
const $try_content__for_await = /*@__PURE__*/ _for_await("#text/0", "<li> </li>", "D ", 0, $forawait_content__$params);
const $try_content__input_items = /*@__PURE__*/ _closure_get("input_items", ($scope) => $try_content__for_await($scope, [stream($scope._.input_items)]));
const $try_content__setup = $try_content__input_items;
const $try = /*@__PURE__*/ _try("#text/0", "<ul><!></ul>", "D%", $try_content__setup);
function $setup($scope) {
	$try($scope, {
		placeholder: attrTag({ content: $placeholder_content($scope) }),
		catch: attrTag({ content: $catch_content($scope) })
	});
}
const $input = ($scope, input) => $input_items($scope, input.items);
const $input_items__closure = /*@__PURE__*/ _closure($try_content__input_items);
const $input_items = /*@__PURE__*/ _const("input_items", $input_items__closure);
var template_default = /*@__PURE__*/ _template("__tests__/template.marko", $template, "b%c", $setup, $input);
