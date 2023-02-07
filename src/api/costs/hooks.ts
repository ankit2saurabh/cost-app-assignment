import { useQuery } from "@tanstack/react-query"
import { getAllCost, getApplications, getListOfApplication, getListOfResources, getResources } from "./function"

const useAllCost = () => {
    return useQuery(["allCost"], getAllCost)
}

const useApplication = () => {
    return useQuery(["applicationList"], getApplications)
}

const useListOfApplication = (applicationName: string) => {
    return useQuery([`applicationList-${applicationName}`], () => getListOfApplication(applicationName))
}

const useResources = () => {
    return useQuery(["resourcesList"], getResources)
}

const useListOfResources = (resourcesName: string) => {
    return useQuery([`resourcesList-${resourcesName}`], () => getListOfResources(resourcesName))
}

export { useAllCost, useApplication, useListOfApplication, useResources, useListOfResources }