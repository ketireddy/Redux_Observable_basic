
export const fetchStories = () => {
    debugger;
     fetch('http://192.168.0.6:8080/todos')
    .then(resp => {
        debugger;
        console.log("resp--", resp);
        return resp.json();
    })

}