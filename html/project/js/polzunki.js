const slider = document.getElementById("slider");

if (slider) {
  noUiSlider.create(slider, {
    start: [40, 750],
    connect: true,
    step: 1,
    range: {
      min: 40,
      max: 750,
    },
  });
  const input0 = document.getElementById("input-0");
  const input1 = document.getElementById("input-1");
  const inputs = [input0, input1];
  slider.noUiSlider.on("update", function (values, handle) {
    inputs[handle].value = Math.round(values[handle]);
  });
}
const slider_two = document.getElementById("slider_2");

if (slider_two) {
  noUiSlider.create(slider_two, {
    start: [10, 84],
    connect: true,
    step: 1,
    range: {
      min: 10,
      max: 84,
    },
  });
  const input2 = document.getElementById("input-2");
  const input3 = document.getElementById("input-3");
  const inputss = [input2, input3];
  slider_two.noUiSlider.on("update", function (values, handle) {
    inputss[handle].value = Math.round(values[handle]);
  });
}
const slider_three = document.getElementById("slider_3");

if (slider_three) {
  noUiSlider.create(slider_three, {
    start: [50, 169],
    connect: true,
    step: 1,
    range: {
      min: 50,
      max: 169,
    },
  });
  const input4 = document.getElementById("input-4");
  const input5 = document.getElementById("input-5");
  const inputsss = [input4, input5];
  slider_three.noUiSlider.on("update", function (values, handle) {
    inputsss[handle].value = Math.round(values[handle]);
  });
}
