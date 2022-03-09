const min_length = () => {
  let ft = 1,
    min;
  for (child of results.children) {
    if (ft) {
      min = child.textContent.length;
      ft = 0;
    }
    if (min > child.textContent.length) {
      min = child.textContent.length;
    }
    console.log(child.textContent, child.textContent.length, min);
  }
  return min;
};

const update = async () => {
  cm.textContent = `${parseFloat((value.value / 37.8).toFixed(2))}cm`;
  mm.textContent = `${parseFloat(((value.value / 37.8) * 10).toFixed(2))}mm`;
  q.textContent = `${parseFloat(((value.value / 37.8) * 40).toFixed(2))}q`;
  inn.textContent = `${parseFloat((value.value / 96).toFixed(2))}in`;
  pc.textContent = `${parseFloat(((value.value / 96) * 6).toFixed(2))}pc`;
  pt.textContent = `${parseFloat(((value.value / 96) * 72).toFixed(2))}pt`;

  let min = min_length();
  console.log(min);

  for (child of results.children) {
    if (child.textContent.length === min) {
      child.style.borderColor = `green`;
    } else {
      child.style.borderColor = `red`;
    }
  }
};

update();

value.addEventListener(`input`, () => {
  update();
});
