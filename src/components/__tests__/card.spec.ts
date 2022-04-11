import { describe, it, expect, beforeAll } from "vitest";

import { mount, VueWrapper } from "@vue/test-utils";
import { CardComponent } from "../";

describe("Card Component", () => {
  let wrapper: VueWrapper;
  beforeAll(() => {
    wrapper = mount(CardComponent, {
      props: {
        id: "any_id",
        types: ["any", "type"],
        title: "any_title",
        cardImageUrl: "http://any_image.png",
        symbolImageUrl: "http://any_image.jpeg",
      },
    });
  });

  it("Should display the parameters", () => {
    expect(wrapper.text()).toContain("any_id");
    expect(wrapper.text()).toContain("any_title");

    const images = wrapper.findAll("img");
    expect(images).toHaveLength(2);
    expect(images[0].attributes("src")).toEqual("http://any_image.png");
    expect(images[1].attributes("src")).toEqual("http://any_image.jpeg");

    const types = wrapper.findAll("li");
    expect(types).toHaveLength(2);
    expect(types[0].text()).toContain("any");
    expect(types[1].text()).toContain("type");
  });

  it("Should return the issued id", () => {
    wrapper.vm.$emit("handleClickMoreDetails", "any_id");
    expect(wrapper.emitted().handleClickMoreDetails).toBeTruthy();
    expect(wrapper.emitted().handleClickMoreDetails[0]).toContain("any_id");
  });
});
