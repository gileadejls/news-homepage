export function Openmenu(){
    const icon = document.querySelector(".icon-open")
    const close = document.querySelector(".icon-close")
    const mobile = document.querySelector(".mobile-itens")

    console.log(icon)
    
    icon.addEventListener("click", (event)=>{
        mobile.style.display = "block"
        mobile.style.right = "0px"
    })

    close.addEventListener("click", (event)=>{
        mobile.style.display = "none"
    })
}