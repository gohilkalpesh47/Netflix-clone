 const left = document.querySelector(".left")
    const right = document.querySelector(".right")
    const list = document.querySelector(".ullist")
    const buttonleft=document.querySelector(".buttonleft")
    const buttonright=document.querySelector(".buttonright")

    right.addEventListener("dblclick", function(e){
        
        list.style.left="-1400px"
        left.style.width="40px"
        buttonleft.style.width="25px"
        right.style.width="0px"
        buttonright.style.width="0px"
        list.style.transition="left 1s ease-in-out"
        
    })
    left.addEventListener("dblclick", function (e) {
    
        list.style.left="0px"
        left.style.width="0px"
        buttonleft.style.width="0px"
        list.style.transition="left 1.2s ease-in-out"
        right.style.width="40px"
        buttonright.style.width="25px"
        
        
    })

    right.addEventListener("click", function (e) {
    if(getComputedStyle(list).left==="0px"){
        list.style.left="-980px"
        left.style.width="40px"
        buttonleft.style.width="25px"
        list.style.transition="left 1s ease-in-out"
        
    }
    else if(getComputedStyle(list).left==="-980px"){
        list.style.left="-1400px"
        right.style.width="0px"
        buttonright.style.width="0px"
        list.style.transition="left 0.6s ease-in-out"
        
    }
        
    })
    left.addEventListener("click", function (e) {
    if(getComputedStyle(list).left==="-980px"){
        list.style.left="0px"
        left.style.width="0px"
        buttonleft.style.width="0px"
        // right.style.display="flex"
        // left.style.display="none"
        list.style.transition="left 1.2s ease-in-out"
    }
    else if(getComputedStyle(list).left==="-1400px"){
        list.style.left="-980px"
        // right.style.display="flex"
        right.style.width="40px"
        buttonright.style.width="25px"
        
    }
        
    })