import { getBusinesses } from "./database.js"

const businesses = getBusinesses()

// Get agent first and last name, companyName, phoneWork
export const getAgent = (database) => {
    const agentArray = database.map(object => {
        const newObject = {}
        newObject.fullname = object.purchasingAgent.nameFirst + " " + object.purchasingAgent.nameLast
        newObject.companyName = object.companyName
        newObject.phoneWork = object.phoneWork
    
        return newObject
    })

    return agentArray
}

// Display agents
export const createAgentHTMLString = (array) => {
    let agentHTMLString = []

    array.forEach(agent => {
        agentHTMLString +=
            `<article class="agents">
            ${agent.fullname}<br>
            ${agent.companyName}<br>
            ${agent.phoneWork}
            </article><br>
            `
    })

    return agentHTMLString
}

document.addEventListener(
    "keypress",
    keyPressEvent => {
        if (keyPressEvent.key === "Enter") {
            const textInput = document.getElementById("companySearch").value
            const foundBusiness =
                businesses.find(object => object.companyName.includes(textInput))
            
            let html = ""

            if (foundBusiness === undefined) {
                window.alert("Company not found")
            } else {
                html =
                `<h2>${foundBusiness.companyName}</h2>
                ${foundBusiness.addressFullStreet}<br>
                ${foundBusiness.addressCity}, ${foundBusiness.addressStateCode} ${foundBusiness.addressZipCode}
                `
            }

            document.querySelector(".foundCompanies").innerHTML = html
        } 
    })

    