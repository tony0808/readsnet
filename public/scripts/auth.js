const domain = "http://localhost:3000";

function registerUser() {
    const xhttp = new XMLHttpRequest();
    const formData = new FormData(document.getElementById("registration-form"));
    const obj = {};
    formData.forEach((value, key) => (obj[key] = value));
    const jsonData = JSON.stringify(obj);

    xhttp.onreadystatechange = function () {
        if (xhttp.readyState === 4) 
            if (xhttp.status === 200) 
                location.href = "/";
            else 
                console.log(xhttp.responseText);
    };
    xhttp.open("POST", domain + "/auth/register");
    xhttp.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhttp.send(jsonData);
    return false;
}