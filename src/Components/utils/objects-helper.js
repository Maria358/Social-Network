export const updateObjectInArray = (items, itemsId, odjPropName, objProp) => {
    items.map((users) => {
        if (users[odjPropName] === itemsId) {
            return {...users, ...objProp}
        }
        return users
    })
}