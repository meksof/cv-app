import appSearchbox from "@/components/AppSearchbox.vue";
import { shallowMount } from "@vue/test-utils";

let wrapper;

beforeEach(() => {
  wrapper = shallowMount(appSearchbox, {
    propsData: {},
    methods: {}
  });
});

describe("SEARCHBOX", () => {
  it("should trigger clear function when clear button is clicked", () => {
    wrapper.vm.searchKeyword = "some word";

    wrapper.vm.clearInput = jest.fn();

    const searchBtn = ".clear-icon";
    wrapper.find(searchBtn).trigger("click");

    expect(wrapper.vm.clearInput).toBeCalled();
  });
});
