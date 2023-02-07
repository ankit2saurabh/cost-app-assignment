export interface Tags {
    ["app-name"]: string
    ["business-unit"]: string
    environment: string
}

export interface IRowData {
    ConsumedQuantity: string
    Cost: string
    Date: string
    InstanceId: string
    Location: string
    MeterCategory: string
    ResourceGroup: string
    ResourceLocation: string
    ServiceName: string
    Tags: Tags
    UnitOfMeasure: string
}
