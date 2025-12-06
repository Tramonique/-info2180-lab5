window.onload = function () {
    const lookupButton = document.getElementById("lookup");
    const countryInput = document.getElementById("country");
    const resultDiv = document.getElementById("result");
    const citiesButton = document.getElementById("lookup-cities");

    lookupButton.addEventListener("click", function () {
        const country = countryInput.value.trim();
        fetch("world.php?country=" + encodeURIComponent(country))
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                resultDiv.innerHTML = data;
            })
            .catch(function (error) {
                console.error(error);
            });
    });

     citiesButton.addEventListener("click", function () {
        const country = countryInput.value.trim();
        fetch("world.php?country=" + encodeURIComponent(country) + "&lookup=cities")
            .then(function (response) {
                return response.text();
            })
            .then(function (data) {
                resultDiv.innerHTML = data;
            })
            .catch(function (error) {
                console.error(error);
            });
    });

};