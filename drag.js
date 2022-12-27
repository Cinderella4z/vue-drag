export default {

  mounted (el, binding, vnode, prevVnode) {
    for (let i of el.children) {
      i.setAttribute('draggable', true)
    }
    let source_node
    el.addEventListener('dragstart', (e) => {
      source_node = e.target
      e.target.classList.add(binding.value)
    })
    el.addEventListener('dragenter', (e) => {
      e.preventDefault()
      if (e.target === el || e.target === source_node) {
        return false
      }
      const childer = Array.from(el.children)
      const sourceIndex = childer.indexOf(source_node)
      const targetIndex = childer.indexOf(e.target)
      if (sourceIndex < targetIndex) {
        // 从下往上拖动
        el.insertBefore(source_node, e.target.nextElementSibling)
      } else {
        // 从上往下拖动
        el.insertBefore(source_node, e.target)
      }
    })
    el.addEventListener('dragend', (e) => {
      e.target.classList.remove(binding.value)
    })

  },
}
function clearAllClass (nodes) {
  for (let i of nodes) {
  }
}