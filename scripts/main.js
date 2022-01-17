// Get database
import { getBusinesses } from "./database.js";
const originalData = getBusinesses()

// Create HTML String for Company List to display
let companyListHTMLString = []

originalData.forEach(object => {
    companyListHTMLString +=
        `<h2>${object.companyName}</h2>
        <section class ="address">
            ${object.addressFullStreet}<br>
            ${object.addressCity}, ${object.addressStateCode} ${object.addressZipCode}
        </section>
        `

})

document.getElementById("companyList").innerHTML = companyListHTMLString

