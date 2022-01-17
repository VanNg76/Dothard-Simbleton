// Get database
import { getBusinesses } from "./database.js";
import { createHTMLString } from "./BusinessList.js";
import { createNYHTMLString } from "./BusinessList.js"
import { createManufacturingHTMLString } from "./BusinessList.js"
import { getAgent } from "./Business.js";
import { createAgentHTMLString } from "./Business.js";

// Display all companies
const originalData = getBusinesses()
const companyListHTMLString = createHTMLString(originalData)
document.getElementById("companyList-All").innerHTML = companyListHTMLString

// Display only NY Companies
const companyListHTMLString_NewYork = createNYHTMLString(originalData)
document.getElementById("companyList-NY").innerHTML = companyListHTMLString_NewYork

// Display only Manufacturing
const companyListHTMLString_Manufacturing = createManufacturingHTMLString(originalData)
document.getElementById("companyList-Manufacturing").innerHTML = companyListHTMLString_Manufacturing

// Display Agents
const agentArray = getAgent(originalData)
const agentHTMLString = createAgentHTMLString(agentArray)
document.getElementById("Agents").innerHTML = agentHTMLString

// Find company
document.getElementById("foundCompanies").innerHTML = "'



