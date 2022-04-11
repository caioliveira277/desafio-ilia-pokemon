import { describe, it, expect, beforeAll } from "vitest";

import { mount, VueWrapper } from "@vue/test-utils";
import { CarouselComponent } from "../";

describe("Carousel Component", () => {
  let wrapper: VueWrapper;
  beforeAll(() => {
    wrapper = mount(CarouselComponent, {
      slots: {
        default: "<div>any item 1</div><div>any item 2</div>",
      },
    });
  });

  it("Should render the elements in the slot", () => {
    expect(wrapper.text()).toContain("any item 1");
    expect(wrapper.text()).toContain("any item 2");
  });
});
