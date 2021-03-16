function find (list, { key, inner }) {
    if (inner) 
        return list.find(a => a[key] === key)
    else if (key) 
        return list.find(a => a === key)
    else
        return null
}

export default {
    populate : (list, data) => {

        if (data && data.length > 0) {

            list.length = 0

            data.forEach(item => {
                list.push(item)
            });
        }

        return list
    },
    get : (list, { key, inner }) => {
        return find(list, { key, inner })
    },
    add : (list, obj) => {
        return list.push(obj)
    },
    edit : (list, { key, inner }) => {

        var existing = find(list, { key, inner })

        if (existing) 
            return Object.assign(existing, key)

        return null
    },
    delete : (list, { key, inner }) => {

        var existing = find(list, { key, inner })

        if (existing) 
            list.splice(list.indexOf(existing), 1)

        return list
    }
}