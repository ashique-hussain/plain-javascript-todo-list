const liNode = document.getElementsByTagName('LI');

if (liNode.length === 0) {
    document.getElementById('clear-list').style.display = 'none';
}

for (let i = 0; i < liNode.length; i++) {
    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'close';
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

const remove = document.getElementsByClassName('remove');

for (let i = 0; i < close.length; i++) {
    remove[i].onclick = function () {
        const div = this.parentElement;
        div.style.display = 'none';
    };
}

const list = document.querySelector('ul');
list.addEventListener(
    'click',
    function (ev) {
        if (ev.target.tagName === 'LI') {
            ev.target.classList.toggle('checked');
        }
    },
    false
);

function onSubmit(e) {
    e.preventDefault();
    AddnewElement();
}

function AddnewElement() {
    document.getElementById('clear-list').style.display = 'block';
    document.getElementById('empty-todo').style.display = 'none';
    const li = document.createElement('li');
    const inputValue = document.getElementById('myInput').value;
    const t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert('Please enter todo item');
    } else {
        document.getElementById('todo-list').appendChild(li);
    }
    document.getElementById('myInput').value = '';

    const span = document.createElement('SPAN');
    const txt = document.createTextNode('\u00D7');
    span.className = 'remove';
    span.appendChild(txt);
    li.appendChild(span);

    for (i = 0; i < remove.length; i++) {
        remove[i].onclick = function () {
            const div = this.parentElement;
            div.style.display = 'none';
        };
    }
}

function removeAll() {
    const lst = document.getElementsByTagName('ul');
    lst[0].innerHTML = '';
    document.getElementById('clear-list').style.display = 'none';
    document.getElementById('empty-todo').style.display = 'flex';
}
