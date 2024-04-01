const colorBtn = document.getElementById("color-btn")
const colorInput = document.getElementById("color")
const dropdownOptions = document.getElementById("dropdown-options")
const colorColumns = document.getElementById("color-columns")
const hexId = document.getElementById("hex-id")
const counter = document.getElementById("counter")

ColorBtn.addEventListener("click", function(e) {
    e.preventDefault()

    const colorInputValue = colorInput.value.slice(1)
    const optionSelectValue = dropdownOptions.value
    const counterValue = counter.value
    const url = `https://www.thecolorapi.com/scheme?hex=${colorInputValue}&mode=${optionSelectValue}&count=${counterValue}`


    fetch(url)
        .then(res => res.json())
        .then(data => {
            let colorHtml = ""
            let hexValueHTML = ""

            data.colors.map(color => {
                colorHtml += `<div class ="color-scheme" style="background-color: ${color.hex.value}"></div>`
                hexValueHTML += `<p>${color.hex.value}</p>`
            })

            colorColumns.innerHTML = colorHtml
            hexId.innerHTML = hexValueHTML
            
        })
        
})
