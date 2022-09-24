export default {
    minLength: (string, number) =>{
        const value = string.length >= number;
        if(!value) throw new Error(`min length must be ${number} character.`)
        return value;
    },
    maxLength: (string, number) =>{
        const value = string.length <= number;
        if(!value) throw new Error(`max length must be ${number} character.`)
        return value;
    }, 
}