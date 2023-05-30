function main() {
    console.log(document.getElementById('age-table'))
    console.log(Array.from(document.querySelectorAll('#age-table label')))
    console.log(document.querySelector('#age-table td'))
    console.log(document.querySelector('form', 'search'))
    console.log(document.querySelector('input'))
    console.log(Array.from(document.querySelectorAll('input')).pop())
}