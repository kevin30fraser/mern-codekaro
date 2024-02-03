//TAR

// T-Trigger
// A-Action
// R-Result


function joined() {
    // i am getting the id named title and storing on a varaible named title
    //  and want not to display on the screen
    //when the button is been triggered

    let title = document.getElementById('title');
    title.style.display = 'none';


    // i am getting the id named result and storing on a varaible named result
    //  and wanted to display on the screen
    //when the button is been triggered;


    let result = document.getElementById('result');
    result.innerText = 'Thank you for joining the class';

    // i am getting the id named btn and storing on a varaible named btn
    // and want not to display on the screen
    //when the button is been triggered


    let btn = document.getElementById('btn');
    btn.style.display = 'none';
}
