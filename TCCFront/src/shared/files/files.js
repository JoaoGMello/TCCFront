
import { isString } from 'lodash'

function returnIconPath(iconName){

    if(isString(iconName) && iconName !== ''){
        if(import.meta.env.PROD){
            return `../assets/imgs/${iconName.replace('/', '')}`
        }
        return `/src/assets/imgs/${iconName.replace('/', '')}`
    }
    return ''
}

function returnURLImage(iconName){ 
    return new URL(returnIconPath(iconName), import.meta.url)
}


const files = {
    returnURLImage
}

export default files;
