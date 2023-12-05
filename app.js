import axios from "axios";

async function getData(id) {

    const user = await axios.get("https://jsonplaceholder.typicode.com/users/" + id);
    const post = await axios ("https://jsonplaceholder.typicode.com/posts?id=" + id );

    const userData = user.data
    const postData = post.data

    const combinedData = [userData, postData]

    console.log(combinedData);
}


export default getData;