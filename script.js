const value = document.getElementById('value')
const showData = document.getElementById('result')


value.addEventListener('input', (e) => {
     const result = e.target.value * 30.48;
     console.log(result)
     showData.value = result
})

