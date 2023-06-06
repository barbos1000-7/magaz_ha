
const initial_state = {
    objData: [
        {
            name: 'telephone',
            price: 1000,
            img: 'https://freesvg.org/img/1685261024Aquarium.png',
            count: 10,
            onLikes: false,
            id: 1
        },
        {
            name: 'phone',
            price: 555,
            img: 'https://freesvg.org/img/1685261595MaryMotherOfJesus-ColourRemix.png',
            count: 7,
            onLikes: false,
            id: 2
        },
        {
            name: 'Phone',
            price: 1234,
            img: 'https://freesvg.org/img/1685261595MaryMotherOfJesus-ColourRemix.png',
            count: 5,
            onLikes: false,
            id: 3
        },
        {
            name: 'крокодил',
            price: 10200,
            img: 'https://w7.pngwing.com/pngs/65/122/png-transparent-black-crocodile-alligator-display-resolution-alligator-pic-animals-reptile-nile-crocodile.png',
            count: 5,
            onLikes: false,
            id: 4
        },
        {
            name: 'кот',
            price: 10200,
            img: 'https://img.freepik.com/free-vector/a-sticker-template-of-cat-cartoon-character_1308-73786.jpg?w=740&t=st=1685556205~exp=1685556805~hmac=a78d938d1bd428b282d742dcbe0722d825f6ce2fed8bc3ea5b4d2443cc195222',
            count: 5,
            onLikes: false,
            id: 5
        },
        {
            name: 'zeus',
            price: 100000,
            img: 'https://freesvg.org/img/1685261595MaryMotherOfJesus-ColourRemix.png',
            count: 5,
            onLikes: false,
            id: 6
        },
        {
            name: 'liker',
            price: 1000,
            img: 'https://freesvg.org/img/1685261024Aquarium.png',
            count: 10,
            onLikes: false,
            id: 7
        },
        {
            name: 'kilka',
            price: 785,
            img: 'https://freesvg.org/img/1685261595MaryMotherOfJesus-ColourRemix.png',
            count: 5,
            onLikes: false,
            id: 8
        },
        {
            name: 'kon',
            price: 631,
            img: 'https://freesvg.org/img/1685261595MaryMotherOfJesus-ColourRemix.png',
            count: 5,
            onLikes: false,
            id: 9
        },
        {
            name: 'gon',
            price: 753,
            img: 'https://w7.pngwing.com/pngs/65/122/png-transparent-black-crocodile-alligator-display-resolution-alligator-pic-animals-reptile-nile-crocodile.png',
            count: 5,
            onLikes: false,
            id: 10
        },
        {
            name: 'curapica',
            price: 342,
            img: 'https://img.freepik.com/free-vector/a-sticker-template-of-cat-cartoon-character_1308-73786.jpg?w=740&t=st=1685556205~exp=1685556805~hmac=a78d938d1bd428b282d742dcbe0722d825f6ce2fed8bc3ea5b4d2443cc195222',
            count: 5,
            onLikes: false,
            id: 11
        },
        {
            name: 'phone',
            price: 10200,
            img: 'https://freesvg.org/img/1685261595MaryMotherOfJesus-ColourRemix.png',
            count: 5,
            onLikes: false,
            id: 12
        },
    ],
    likes: [],
    navData: [
        {text: 'О НАС', to: '/me', id: 1, active: true},
        {text: 'КАТАЛОГ', to: '/katalog', id: 2, active: false},
        {text: 'ПОИСК', to: '/search', id: 3, active: false},
        {text: 'КОРЗИНА', to: '/shopCart', id: 4, active: false},
        {text: 'ВХОД', to: '/login', id: 5, active: false},
    ],
    shopData: [],
    totalCost: 0,
    optionsOfFilter: [
        {value:'name', name:'по названию'},
        {value:'price+', name:'по цене(вверх)'},
        {value:'price-', name:'по цене(вниз)'},
        {value:'likes', name:'сначала избранные'}
    ],
    filter: '',
    search: {
        searchInput: '',
        searchData: []
    },
    isAuth: false
}
export const createLikesAction = (id, onLikes) => {
    return {
        type: 'onLikes',
        id,
        onLikes
    }
}


export const createActiveAction = id => {
    return {
        type: 'onActive',
        id
    }
}
const ShopCart = (arr, arr2) => {
    arr = arr.filter(p => arr2.includes(p.id))
    return arr.map(p => ({...p, meCount: 1, onLikes:true}))
}
export const createOnMeCountAction = (id, plus)=> ({
    type: 'onMeCount',
    plus,
    id
})
export const createValueSelectAction = value => ({type: 'valueOfSelect', value})
const totalCostCounter = arr => {
    let count = 0
    arr.forEach(p => {
        count += p.meCount*p.price
    })
    return count
}

const SearchData = (arr, Inp) => {
    if(Inp !== '') {
        return arr.filter(p => p.name.toLowerCase().includes(Inp.toLowerCase()))
    }
    else return []
}
export const createAuthAction = value => ({type: 'isAuth', value})
export const createSearchAction = value => ({type: 'Search', value})
const sorted = (arr, value) => {
    switch (value) {
        case 'price-':
            return arr.sort((a, b) => b.price - a.price)
        case 'price+':
            return arr.sort((a, b) => a.price - b.price)
        case 'name':
            return arr.sort((a,b)=> a['name'].localeCompare(b['name']))
        case 'likes':
            return arr.sort((a, b) => {
                    a = a.onLikes
                    b = b.onLikes
                    if (a) {
                        if (b) {
                            return 0
                        }
                        else return -1
                    }
                    else if (b) {
                        return 1
                    }
                    else return 0
                }
            )
        default:
            return arr
    }
}

    const Sort = (arr, id, type) => {
        if (type) {
            arr = [...arr, id]
        } else {
            arr = arr.filter(p => (p !== id))
        }
        return [arr, arr.length]
    }
const setMeCount = (arr, id, plus) => {
    arr = arr.map(p =>{
        if(p.id === id) {
            if(plus) {
                if(p.meCount + 1 >= p.count) {
                    return {...p, meCount: p.count}
                }
                else return {...p, meCount: p.meCount + 1}
            }
            else if(p.meCount - 1 >= 0) {
                return {...p, meCount: p.meCount-1}
            }
            else return {...p, meCount: 0}
        }
        else return p
    })
    return arr
}
const KatalogState = (state = initial_state, action) => {
    switch (action.type) {
        case 'onLikes':

            let [a, b] = Sort(state.likes, action.id, action.onLikes)
            let arr = ShopCart(state.objData, a)
            let arr3 = state.objData.map(p => {
                if (p.id === action.id) {
                    return {...p, onLikes: action.onLikes}
                } else return p
            })
            return {
                ...state, objData:  sorted(arr3, state.filter), likes: a,
                navData: state.navData.map(p => {
                    if (p.id === 4) {
                        if(b === 0) {
                            return {...p, text: `КОРЗИНА`}
                        }
                        else return {...p, text: `КОРЗИНА (${b})`}
                    } else return p
                }), shopData: arr, totalCost: totalCostCounter(arr), search: {...state.search, searchData: SearchData(arr3, state.search.searchInput)}}
        case 'onActive':
            if (action.id) {
                return {
                    ...state, navData: state.navData.map(p => {
                        if (p.id === action.id) {
                            return {...p, active: true}
                        } else return {...p, active: false}
                    })
                }
            } else {
                return {
                    ...state, navData: state.navData.map(p => {
                        if (p.to === action.to) {
                            return {...p, active: true}
                        } else return {...p, active: false}
                    })
                }
            }
        case 'onMeCount':
            let arr2 = setMeCount(state.shopData, action.id, action.plus)
            return {...state, shopData: arr2,
            totalCost: totalCostCounter(arr2)}
        case 'valueOfSelect':
            return {...state, filter: action.value, objData: sorted(state.objData, action.value)}
        case 'Search':
            return {...state, search: {...state.search, searchInput: action.value, searchData:SearchData(state.objData, action.value)}}
        case 'isAuth':
            console.log('Я ЕБЛАН')
            if (action.value) {
                return {...state, navData: state.navData.map(p => {
                    if(p.id === 5) {
                        return {...p, text: 'ВЫХОД'}
                    }
                    else return p
                    }), isAuth: true}}
            else return {...state, navData: state.navData.map(p => {
                        if(p.id === 5) {
                            return {...p, text: 'ВХОД'}
                        }
                        else return p
                    }), isAuth: false}
        default:
            return state
    }
};

export default KatalogState;