

    console.log("Fetch API");
    const res=fetch("https://jsonplaceholder.typicode.com/todos")
    .then(res=>res.json())
    .then(data=>console.log(data));
