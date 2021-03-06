export const del_url = "https://httpbin.org/delete"
export const put_url = "https://httpbin.org/put"
export const post_url = "https://httpbin.org/post"
export const get_url = "https://httpbin.org/get"

export async function deleteRequest() {

    let blog = {
        blog_id: '654',
        user_id: '123'
      };

    let response = await fetch(del_url, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        args: JSON.stringify(blog)
    });

    if (response.ok) {       // if HTTP-status is 200-299 get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        json.args = blog;
        document.getElementById("response").innerHTML = JSON.stringify(json, null, 1);
    }
    else
    {
        alert("HTTP-Error: " + response.status);
    }
}


export async function putRequest() {

    const put_form = new FormData(document.getElementById('form'));

    let response = await fetch(put_url, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(Object.fromEntries(put_form))
    });

    if (response.ok) {       // if HTTP-status is 200-299 get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        json.form = json.json;
        json.json = null;
        json.data = "";
        document.getElementById("response").innerHTML = JSON.stringify(json, null, 1);
    }
    else
    {
        alert("HTTP-Error: " + response.status);
    }
}

export async function postRequest() {

    const post_form = new FormData(document.getElementById('form'));

    let response = await fetch(post_url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        body: JSON.stringify(Object.fromEntries(post_form))
    });

    if (response.ok) {       // if HTTP-status is 200-299 get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        json.form = json.json;
        json.data = "";
        json.json = null;

        document.getElementById("response").innerHTML = JSON.stringify(json, null, 1);
    }
    else
    {
        alert("HTTP-Error: " + response.status);
    }
}

export async function getRequest() {
    const get_form = new FormData(document.getElementById('form'));

    let response = await fetch(get_url, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
          },
        form: JSON.stringify(Object.fromEntries(get_form))
    });

    if (response.ok) {       // if HTTP-status is 200-299 get the response body (the method explained below)
        let json = await response.json();
        console.log(json);
        json.args = Object.fromEntries(get_form);
        document.getElementById("response").innerHTML = JSON.stringify(json, null, 1);
    }
    else
    {
        alert("HTTP-Error: " + response.status);
    }
}