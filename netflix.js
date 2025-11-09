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

    const quationbox = document.querySelectorAll(".quation-box")

    quationbox.forEach((i) => {
        const answer = i.nextElementSibling;
        const cross = i.querySelector(".cross");

        i.addEventListener("click", function () {
            const isOpen = getComputedStyle(answer).height !== "0px";
            console.log(isOpen);

            document.querySelectorAll(".answer-box").forEach(a => {
                a.style.height = "0px";
                a.style.marginTop = "0px";
                a.style.marginBottom = "0px";
                a.style.padding = "0px 20px";
            });
            document.querySelectorAll(".cross").forEach(c => {
                c.style.transform = "rotate(0deg)";
            });

            if (!isOpen) {
                answer.style.height = "auto";
                answer.style.marginTop = "-2px";
                answer.style.marginBottom = "5px";
                answer.style.padding = "10px 20px";
                cross.style.transform = "rotate(45deg)";
            }

        })
    }

    )
