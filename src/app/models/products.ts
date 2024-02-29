export interface IProducts {
    id: number,
    name: string,
    comment?: string,
    city?: string,
    image?: string,
    large?: string,
    configure?: IProductsConfig
}
export interface IProductsConfig {
    basicServices?: IBasicServices,
    additiveServices?: IAdditiveServices
}
export interface IBasicServices {
    carWashing?: boolean,
    parking?: boolean,
    hotel?: boolean,
    cafe?: boolean,
    shower?: boolean,
    laundry?: boolean,
    minimarket?: boolean,
    tireService?: boolean,
    sauna?: boolean,
    desinfection?: boolean
}
export interface IAdditiveServices {
    wc?: boolean,
    security?: boolean,
    cctv?: boolean,
    fencing?: boolean,
    barrier?: boolean,
    internet?: boolean,
    wifi?: boolean,
    printer?: boolean,
    waitingRoom?: boolean,
    atm?: boolean,
    paymentTerminal?: boolean,
    sparePartsStore?: boolean,
    autoAccessories?: boolean,
    minimarket?: boolean,
    pharmacy?: boolean,
    gasStation?: boolean,
    pallets?: boolean,
    accumulatorCharging?: boolean,
    starterCharger?: boolean,
    tachographRepair?: boolean
}