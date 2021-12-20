
  let li = $('<li></li>');
  let inputValue = $('#input').val();

  li.append(inputValue);


  if (inputValue === '') {
    alert("Please write something");
  } else {
    $('#list').append(li);
  }

//--------------------Crossing an item out by clicking on it ----------------------
function crossOut(){
li.toggleClass('strike');
}

li.on('dblclick', function crossOut(){
  li.toggleClass('strike');
});


//---------------------Adding in the delete button shown as an "X"----------------

let crossOutButton = $('<crossOutButton><crossOutButton</>')
crossOutButton.append(document.createTextNode('X'));
li.append(crossOutButton);

crossOutButton.on('click' deleteListItem);

//------------------Adding in the class of "Delete" from CSS file------------------

function deleteListItem(){
  li.addClass('delete');
}

}

$('#list').sortable();
