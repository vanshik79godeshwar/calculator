function fxn1(value) 
{
    var display = document.getElementById('display');
    display.value = display.value + value;
}

function fxn2() 
{
    var display = document.getElementById('display');
    display.value = '';
}

function fxn3() 
{
    var display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function fxn4() 
{
    var display = document.getElementById('display');
    display.value = eval(display.value);
}