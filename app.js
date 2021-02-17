"use strict";
$.ajax({
  type: "GET",
  url: "https://api.covid19api.com/summary",
  success: function (data) {
    data.Countries.forEach(function (country) {
      $(".county >tbody").append(
        `<tr>
        <td>${country.Country}</td>
        <td>${country.NewConfirmed}</td>
        <td>${country.TotalConfirmed}</td>
        <td>${country.NewDeaths}</td>
        <td>${country.TotalDeaths}</td>
        <td>${country.NewRecovered}</td>
        <td>${country.TotalRecovered}</td>
        <td>${country.Date}</td>
        </tr>`
      )
    });
  },
  error: function (error) {
    console.log(error)
  }
})