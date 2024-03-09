import { parse, walk } from "svelte/compiler";

const ast = parse("content");

// `walk(ast, {` doesn't fare much better either
walk(ast.html, {
    enter: (node) => {
        if (node.type === "Text") {
            this.skip();
        }
    },
    leave: () => {},
});
