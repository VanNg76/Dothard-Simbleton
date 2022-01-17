// Create HTML String for Company List to display
export const createHTMLString = (database) => {
    let companyListHTMLString = []

    database.forEach(object => {
        companyListHTMLString +=
        `<h2>${object.companyName}</h2>
            <section class ="businessList--All">
                ${object.addressFullStreet}<br>
                ${object.addressCity}, ${object.addressStateCode} ${object.addressZipCode}
            </section>
        `
    })

    return companyListHTMLString
}

// Create HTML String for NY Company
export const createNYHTMLString = (database) => {
    const filteredNYCompany = database.filter(object => object.addressStateCode === "NY")

    let companyListHTMLString_NewYork = []

    filteredNYCompany.forEach(object => {
        companyListHTMLString_NewYork += 
            `<h2>${object.companyName}</h2>
            <section class ="businessList--newYork">
                ${object.addressFullStreet}<br>
                ${object.addressCity}, ${object.addressStateCode} ${object.addressZipCode}
            </section>
             `
    })

    return companyListHTMLString_NewYork
}

// Create HTML String for companyIndustry="Manufacturing"
export const createManufacturingHTMLString = (database) => {
    const filteredManufacturingCompany = database.filter(object => object.companyIndustry === "Manufacturing")

    let companyListHTMLString_manufacturing = []

    filteredManufacturingCompany.forEach(object => {
        companyListHTMLString_manufacturing += 
            `<h2>${object.companyName}</h2>
            <article class ="businessList--manufacturing">
                ${object.addressFullStreet}<br>
                ${object.addressCity}, ${object.addressStateCode} ${object.addressZipCode}
            </article>
             `
    })

    return companyListHTMLString_manufacturing
}
