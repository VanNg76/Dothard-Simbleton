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

// Find company as text field input
