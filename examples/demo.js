/* eslint-disable */
fetch('../src/resources/china.json').then(resp =>
  resp.json().then(china =>
    new Sinomap({
      width: 500,
      height: 400,
      style: {
        color: 'lightcoral',
        borderColor: 'white',
      },
      area: china
    })
  )
)
