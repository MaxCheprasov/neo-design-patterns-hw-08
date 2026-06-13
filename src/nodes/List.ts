import { DocNode } from "../interfaces/DocNode";
import { DocRenderer } from "../interfaces/DocRenderer";
import { RenderEventPublisher } from "../RenderEventPublisher";
import { performance } from 'perf_hooks';

export class List implements DocNode {
    constructor(private items: string[], private renderer: DocRenderer) {}

    render(): string {
        const start = performance.now();
        const result = this.renderer.renderList(this.items);
        const end = performance.now();

        RenderEventPublisher.notify({
            type: 'List',
            content: this.items.join(', '),
            items: this.items,
            renderTime: end - start
        });

        return result;
    }
}