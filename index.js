const colorBtn = document.getElementById("color-btn")
const colorInput = document.getElementById("color")
const dropDownOptions = document.getElementById("dropdown-options")
const colorColumns = document.getElementById("color-columns")
const hexId = document.getElementById("hex-id")
const counter = document.getElementById("counter")

ColorBtn.addEventListener("click", function(e) {
    e.preventDefault()

    const colorInputValue = colorInput.value.slice(1)
    const optionSelectValue = dropDownOptions.value
    const counterValue = counter.value
    

    fetch(`https://www.thecolorapi.com/scheme?hex=${colorInputValue}&mode=${optionSelectValue}&count=${counterValue}`)
        .then(res => res.json())
        .then(data => {
            let colorScheme = ""
            let hexValue= ""

            data.colors.map(color => {
                colorScheme += `<div class ="color-scheme" style="background-color: ${color.hex.value}"></div>`
                hexValue += `<p>${color.hex.value}</p>`
            })

            colorColumns.innerHTML = colorScheme
            hexId.innerHTML = hexValue
            
        })
        
})
