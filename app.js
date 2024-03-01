document.body.style.backgroundColor =white;
function generateColor(){
    
    let red = Math.floor(Math.random()*256);    
    let green = Math.floor(Math.random()*256);  
    let blue = Math.floor(Math.random()*256);
            let random= `rgb(${red},${green},${blue})`;
            document.body.style.backgroundColor = random;
            
}
generateColor() 