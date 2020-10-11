var form = document.getElementById('form');
var items = document.getElementById('items');

form.addEventListener('submit', addItem);
items.addEventListener('click', delItem);


function addItem(e){
    e.preventDefault();
    const item=document.getElementById('item').value;
    
    var li = document.createElement('li');
    li.className = 'list-group-item text-left';
    li.appendChild(document.createTextNode(item))

    var btn = document.createElement('button');
    btn.className = 'btn btn-success btn-sm float-right delete';
    btn.appendChild(document.createTextNode('X'));
    li.appendChild(btn)

    items.appendChild(li)
    form.reset();
    console.log(document)
}

function delItem(e){
    if(e.target.className.includes('delete')){
        if(confirm('Do you want to remove the item?')){
            const li = e.target.parentElement;
            items.removeChild(li);
        }
    }
}