((d)=>{
    const $btnMenu=d.querySelector(".rating"),
    $btnSubmit=d.querySelector("#submit"),
    $modal=d.querySelector(".modal"),
    $score=d.querySelector(".score"),
    $component=d.querySelector(".component");
    let $divElement=null;
    $btnMenu.addEventListener("click", e=>{
        // console.log(e.target.matches(".rating"))
        if(!e.target.matches(".rating")){
            if($divElement!=null){
                $divElement.classList.toggle("bg-color")
            }
            $divElement=d.querySelector(`#${e.target.id}`);
            $divElement.classList.toggle("bg-color")
        }
    });

    $btnSubmit.addEventListener("click",e=>{
        e.preventDefault();
        // console.log($divElement)
        if($divElement!=null){
            $modal.classList.toggle("none")
            $component.classList.toggle("none")
            $score.innerHTML=`You selected ${$divElement.id.replace('rating-','')} out of 5`
        }else{
            alert("Please select an option")
        }
    })
})(document);
