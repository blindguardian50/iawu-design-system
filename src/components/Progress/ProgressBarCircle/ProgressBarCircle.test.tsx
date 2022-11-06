import { render } from "@testing-library/react";
import React from "react";

import ProgressBarCircle from "./ProgressBarCircle";

describe("ProgressBarCircle", () => {
    test("Renders the ProgressBarCircle component", () => {
        render(<ProgressBarCircle label="Hello world!" />);
    });
});
