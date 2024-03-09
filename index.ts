import { parse, walk } from 'svelte/compiler';

const ast = parse('content');

walk(ast.html, {
	enter: (node) => {
		if (node.type === 'Text') {
			// ...
		}
	},
	leave: () => {}
});
