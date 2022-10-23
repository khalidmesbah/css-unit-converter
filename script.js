/* variables */
const ValueInPixels = document.getElementById(`value-in-pixels`);
const units = document.querySelectorAll(`.unit`);
/* functions */
// copy the best unit
const copyToClipboard = (text) => {
  const el = document.createElement(`textarea`);
  el.value = text;
  document.body.appendChild(el);
  el.select();
  document.execCommand("copy");
  document.body.removeChild(el);
  ValueInPixels.focus();
};
// find the best unit
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
const update = ({ target: { value } }) => {
  cm.textContent = `${parseFloat((value / 37.8).toFixed(2))}cm`;
  mm.textContent = `${parseFloat(((value / 37.8) * 10).toFixed(2))}mm`;
  q.textContent = `${parseFloat(((value / 37.8) * 40).toFixed(2))}q`;
  inc.textContent = `${parseFloat((value / 96).toFixed(2))}in`;
  pc.textContent = `${parseFloat(((value / 96) * 6).toFixed(2))}pc`;
  pt.textContent = `${parseFloat(((value / 96) * 72).toFixed(2))}pt`;
  pe.textContent = `${parseFloat(((100 * value) / 400).toFixed(2))}%`;
  vw.textContent = `${parseFloat(((100 * value) / 400).toFixed(2))}vw`;
  vh.textContent = `${parseFloat(((100 * value) / 300).toFixed(2))}vh`;
  em.textContent = `${parseFloat((value / 16).toFixed(2))}em`;
  rem.textContent = `${parseFloat((value / 16).toFixed(2))}rem`;

  let min = min_length();

  for (child of results.children) {
    if (child.textContent.length === min) {
      copyToClipboard(child.textContent);
      child.classList.remove(`btn-outline-dark`);
      child.classList.add(`btn-success`);
    } else {
      child.classList.remove(`btn-success`);
      child.classList.add(`btn-outline-dark`);
    }
  }
};
update({ target: { value: 100 } });

/* event listeners */
ValueInPixels.addEventListener(`input`, update);
units.forEach((unit) => {
  unit.addEventListener(`click`, () => {
    copyToClipboard(unit.textContent);
  });
});
