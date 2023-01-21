export function Openmenu(){
    const icon = document.querySelector(".icon-open")
    const close = document.querySelector(".icon-close")
    const mobile = document.querySelector(".mobile-itens")
    const container = document.querySelector(".container")

    
    icon.addEventListener("click", (event)=>{
        mobile.style.display = "block"
        mobile.style.right = "0"
        mobile.style.transition = "all 2s"
    })

    close.addEventListener("click", (event)=>{
        mobile.style.display = "none"
    })
}