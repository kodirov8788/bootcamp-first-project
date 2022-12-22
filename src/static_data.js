export const nav = [
    {
        id: 1,
        navName: "Shop",
        route: "shop",
        nav_child: [
            {
                id: 1,
                childName: 'Categories',
                grandChild: [
                    {
                        id: 1,
                        grandChildName: "Bags",
                        route: "/bags",
                        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.officeworks.com.au%2Fshop%2Fofficeworks%2Fp%2Fj-burrows-15-6-recycled-laptop-bag-black-jb15recnbb&psig=AOvVaw1sCsc-eh0MupgPRbuvmRLI&ust=1671640986565000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi3wovSiPwCFQAAAAAdAAAAABAF"

                    },
                    {
                        id: 2,
                        grandChildName: "Clothing",
                        route: "/clothing",
                        image: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.officeworks.com.au%2Fshop%2Fofficeworks%2Fp%2Fj-burrows-15-6-recycled-laptop-bag-black-jb15recnbb&psig=AOvVaw1sCsc-eh0MupgPRbuvmRLI&ust=1671640986565000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi3wovSiPwCFQAAAAAdAAAAABAF"

                    }
                ]
            }
        ]

    },
    {
        id: 2,
        navName: "Bags",
        route: "bags"
    },
    {
        id: 3,
        navName: "Fever, better",
        route: "feverbetter"
    },
    {
        id: 4,
        navName: "Gifts",
        route: "gifts"
    }
]

export const nav_store = [
    {
        id: 1,
        navName: "Store",
        route: "store"
    },
    {
        id: 2,
        navName: "Sign In",
        route: "signin"
    },
]