//basic html
<!doctype html>
<html>
    <head>
        <title>Learn</title>  
    </head>
    <script type="text/javascript" script src="./scripts.js"></script>
</html>



//arrays hold a collection of different datatypes and are usually enclosed in square brackets
let names = ['peter', 'john']
names.push(joan) //(will add a name at the end of the list)
names.unshift('hello')  //(will add a name at the beginning of the list)
console.log (names);



for (let i=0; i<=10; i++){
    console.log(i)
}



let i=0;
while (true) {
    console.log(i)
    1++
}



//if conditional statement
let age = 10;
if (age>=18){
    console.log('adult');
}else{
    console.log('under age');
}



let grade = 70;
if(grade >= 60 && grade <=70){
    console.log('A');
}else if(grade >= 50 && grade <=59){
    console.log('B');
}else{
    console.log('fail');
}



switch ('red'){
    case 'red':
        console.log("A");
        break;
        case 'yellow':
            console.log("B");
            break;
            default:
                console.log("None");
}



let age = parseInt(prompt ('How old are you'));
if (age == 18){
    console.log('can drive small car');
}else if(age > 18 && age <=24){
    console.log('can drive big car');
}else if(age > 24){
    console.log('can drive truck');
}else{
    console.log('too young to drive');
}



let age = parseInt(prompt ('How old are you'));
if (age == 18){
    alert('can drive small car');
}else if(age > 18 && age <=24){
    alert('can drive big car');
}else if(age > 24){
    alert('can drive truck');
}else{
    alert('too young to drive');
}



let age = prompt ('How old are you');
function drive(age){
if (age == 18){
    document.write('can drive small car');
}else if(age > 18 && age <=24){
    document.write('can drive big car');
}else if(age > 24){
    document.write('can drive truck');
}else{
    document.write('too young to drive');
}
}



////////////////////////////////////////////////////////////////////////////////////
//html for creating the form
//<!doctype html>
//<html>
    //<head>
        //<title>Learn</title>  
    //</head>
    //<body>
        //<form action="">
            //<input type="text" name="age" id="age">
            //<input type="submit" value="verify" onclick="drive(event)">
        //</form>
        //<div id="log"></div>
    //</body>
    //<script type="text/javascript" script src="./scripts.js"></script>
//</html>

//code being run
function drive(event) {
    event.preventDefault();
    let age = document.getElementById('age').value;
    
    if (age == 18){
        document.getElementById('log').innerHTML='Can drive a small car';
    }else if (age>18 && age<=24){
        document.getElementById('log').innerHTML='Can drive a big car';
    }else if (age>24){
        document.getElementById('log').innerHTML='Can drive a truck';
    }else{
        document.getElementById('log').innerHTML='Too young to drive';
    }
}

////////////////////////////////////////////////////////////////////////////////////////