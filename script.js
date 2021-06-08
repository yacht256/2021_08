
document.getElementById('ok').addEventListener('click',function(e){
    let noElement = document.getElementById('no')
    if (noElement.classList.contains('toggleOn')){
        noElement.classList.replace('toggleOn','toggleOff')
    }else if(noElement.classList.contains('toggleOff')){
        noElement.classList.replace('toggleOff','toggleOn')
    }else{
        noElement.classList.add('toogleOn')
    }
})

var borderTick =1
document.getElementById('cancel').style.border = `${borderTick}px solid white`
var cancelElement =document.getElementById('cancel')
cancelElement.addEventListener('mouseover', function(e){
    cancelElement.innerHTML =`
    <div class="container-col">
        <div class="flex-item">
        no 1 </div>
        <div class = "flex-item">
            no 2 
        </div>
        </div>
        `
})
cancelElement.addEventListener('mouseleave',function (e){
    cancelElement.innerHTML = `cancel`
})
var addMargin = document.getElementById('ok')
var Margin_add = 1;

addMargin.addEventListener('click', function (e){
  
       Margin_add+=3
       document.getElementById('cancel').style.margin= `0px ${Margin_add}px `
       document.getElementById('no').style.margin= `0px ${Margin_add}px `
      
    
   
})

var dbChange = document.getElementById('no')
dbChange.addEventListener('dblclick',function (e){
    addMargin.innerHTML = `<div id="ok" class="flex-item">ok, วิชานี้ so easy</div>`
}) 


