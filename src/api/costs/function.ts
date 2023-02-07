import { costApi } from "../network"
import { IRowData } from "./type"

export const getAllCost = async () => {
    const { data } = await costApi.get<IRowData[]>('raw')
    return data
}

export const getApplications = async () => {
    const { data } = await costApi.get<string[]>('applications')
    return data
}

export const getListOfApplication = async (applicationName: string) => {
    const { data } = await costApi.get<IRowData[]>(`applications/${applicationName}`)
    return data
}

export const getResources = async () => {
    const { data } = await costApi.get<string[]>('resources')
    return data
}

export const getListOfResources = async (resourcesName: string) => {
    const { data } = await costApi.get<IRowData[]>(`resources/${resourcesName}`)
    return data
}