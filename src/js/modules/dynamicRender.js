export default function dynamicRender(element, func) {
  const $item = document.querySelector(element);
  const props = $item.dataset.dyrender.split(',');
  const breakpoint = props[0];
  const $from = document.querySelector(props[1]);
  const $to = document.querySelector(props[2]);
  const className = props[3];

  if (window.innerWidth >= breakpoint) {
    $item.classList.add(className);
    $to.appendChild($item);
    func();
  } else {
    $item.classList.remove(className);
    $from.appendChild($item);
  }
}
