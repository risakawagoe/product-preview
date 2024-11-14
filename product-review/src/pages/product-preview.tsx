import { OptionList } from "./option-list";
import { ProductList } from "./product-list";
import { Editor } from "./editor";
import { DraggableMaskSVG } from "./test";
import { Canvas } from "./canvas";

export function ProductPreviewer() {
    
    return (
        <div>
            <header>The Sheep Square</header>
            <h1>Product Previewer</h1>
            <p>This is a tool to preview what your customized item will look like. Upload the pictures or designs you plan on customizing your item with. You can drag around the image to change the position of the image.</p>
            <ProductList />
            <OptionList />
            <Editor />
            <Canvas />
            {/* <DraggableMaskSVG /> */}
        </div>
    );
}