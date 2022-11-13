import { AsyncVirtualizedGrid } from "./AsyncVirtualizedGrid";
import {render} from "@testing-library/react";

test("empty async virtualized grid", async () => {
    const { container } = render(<AsyncVirtualizedGrid />);
    expect(container).toMatchSnapshot();
});