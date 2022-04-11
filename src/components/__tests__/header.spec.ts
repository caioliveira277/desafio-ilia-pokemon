import { describe, it, expect, beforeAll } from "vitest";
import { mount, VueWrapper } from "@vue/test-utils";
import { createRouter, createWebHistory } from "vue-router";
import { HeaderComponent } from "../";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "initial",
      component: {
        template: "",
      },
    },
  ],
});

describe("Header Component", () => {
  let wrapper: VueWrapper;
  beforeAll(() => {
    wrapper = mount(HeaderComponent, {
      global: {
        plugins: [router],
      },
    });
  });

  it("Should render the component", () => {
    expect(wrapper.exists()).toBeTruthy();
    expect(wrapper.element.tagName).toEqual("HEADER");
  });
});
