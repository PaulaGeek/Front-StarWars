const getState = ({
    getStore,
    getActions,
    setStore
}) => {
    return {
        store: {
            demo: [{
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],



            personajes: [],
            planets: [],
            unplaneta: {},
            unpersonaje: {},
            vehiculos: [],
            unvehiculo: {},
        },
        actions: {
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            logout: () => {
                localStorage.removeItem('token');
                setStore({
                    auth: false
                })
            },
            login: (userEmail, userPassword) => {
                fetch("https://3000-paulageek-apistarwarsco-q8tnzt036dz.ws-us85.gitpod.io/login", {
                        method: 'POST',
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "email": userEmail,
                            "password": userPassword
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },

            signup: (userEmail, userPassword, userName) => {
                fetch("https://3000-paulageek-apistarwarsco-q8tnzt036dz.ws-us85.gitpod.io/signup", {
                        method: 'POST',
                        // mode: "no-cors",
                        // credentials: "include",
                        headers: {
                            'Content-Type': 'application/json'
                            // 'Content-Type': 'application/x-www-form-urlencoded',
                        },
                        body: JSON.stringify({
                            "username": userName,
                            "password": userPassword,
                            "email": userEmail
                        }) // body data type must match "Content-Type" header
                    })
                    .then((response) => {
                        console.log(response.status);
                        if (response.status === 200) {
                            setStore({
                                auth: true
                            })
                        }
                        return response.json()
                    })
                    .then((data) => {
                        console.log(data)
                        if (data.msg === "Bad email or password") {
                            alert(data.msg)
                        }
                        localStorage.setItem("token", data.access_token)
                    })
                    .catch((err) => console.log(err))
            },

            obtenerInfoPersonajes: () => {
                fetch("https://swapi.dev/api/people/")
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            personajes: data.results,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            obtenerInfoUnPersonaje: (id) => {
                fetch("https://swapi.dev/api/people/" + id)
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            unpersonaje: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            obtenerInfoVehiculos: () => {
                fetch("https://swapi.dev/api/vehicles/")
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            vehiculos: data.results,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            obtenerInfoUnVehiculo: (id) => {
                fetch("https://swapi.dev/api/vehicles/" + id)
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            unvehiculo: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            obtenerInfoPlanetas: () => {
                fetch("https://swapi.dev/api/planets/")
                    .then((res) => res.json())
                    .then((data) =>
                        setStore({
                            planets: data.results,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            obtenerInfoUnPlaneta: (id) => {
                fetch("https://swapi.dev/api/planets/" + id)
                    .then((res) => res.json())
                    // .then(data=>console.log(data))
                    .then((data) =>
                        setStore({
                            unplaneta: data,
                        })
                    )
                    .catch((err) => console.error(err));
            },
            loadSomeData: () => {
                /**
                          	fetch().then().then(data => setStore({ "foo": data.bar }))
                          */
            },
            changeColor: (index, color) => {
                //get the store
                const store = getStore();

                //we have to loop the entire demo array to look for the respective index
                //and change its color
                const demo = store.demo.map((elm, i) => {
                    if (i === index) elm.background = color;
                    return elm;
                });

                //reset the global store
                setStore({
                    demo: demo,
                });
            },
        },
    };
}
export default getState;