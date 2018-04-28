// 1. make an on click event for devour button. Updates the devoured boolean
// 2. make an on click event for the submit button. add the info to Sql and add a new burger to the list.

$(() => {
    $('.change-devour').on('click', (event) => {
        
        console.log($(this).data('id'));
        
        let id = $(this).data('id');
        let newDevoured = $(this).data('newdevour');
        let newDevouredState = {
            devoured: newDevoured
        };
        console.log(`devour: ${id}`);
        
        $.ajax(`/api/burgers/ ${id}`, {
            type: 'PUT',
            data: newDevouredState
        }).then(() => {
            console.log(`changed devour ${newDevoured}`);
            location.reload();
        }
        );
    });
    $('.create-form').on('submit', (event) => {
        event.preventDefault();
        let newBurger = {
            name: $('#add').val().trim()
        };
        $.ajax('/api/burgers', {
            type: 'POST',
            data: newBurger
        }).then(() =>{
            console.log('created new burger');
            location.reload();
        });
    });

});