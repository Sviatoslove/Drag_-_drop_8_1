const item = document.querySelector('.item')
//draggable="true" - позволяет перетаскивать элемент, добавляем его в DOM к элементу item.
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)//dragstart - событие начала перетаскивания элемента.
item.addEventListener('dragend', dragend)//dragend - событие завершения перетаскивания элемента, т.е. срабатывает когда отпускаем левую кнопку мыши.

placeholders.forEach(placeholder => {
 placeholder.addEventListener('dragover', dragover)
 placeholder.addEventListener('dragenter', dragenter)
 placeholder.addEventListener('dragleave',dragleave)
 placeholder.addEventListener('drop', dragdrop)
})

function dragstart(event) {
 event.target.classList.add('hold')
 setTimeout(() => event.target.classList.add('hide'), 0)
}

function dragend(event) {
 event.target.className = 'item'
}

function dragover(event) {
 event.preventDefault()
}

function dragenter(event) {
 event.target.classList.add('hovered')
}

function dragleave(event) {
 event.target.classList.remove('hovered')
}

function dragdrop(event) {
 event.target.classList.remove('hovered')
 event.target.append(item)
}