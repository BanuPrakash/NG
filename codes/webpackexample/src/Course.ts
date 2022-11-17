// decorator factory
//Object.defineProperty() defines a new property
export default function Course(config:any){
    return function(target:any) {
        Object.defineProperty(target.prototype, "subject", {
            "value": config.name
        })
    }
}