function OpenFeatures() {
    var allElems = document.querySelectorAll(".elem");
    var FullElemPage = document.querySelectorAll('.fullElem')
    var FullElemPageBackBtn = document.querySelectorAll('.fullElem .back')

    allElems.forEach(function (elem) {
        elem.addEventListener('click', function () {
            FullElemPage[elem.id].style.display = 'block'
        })
    })


    FullElemPageBackBtn.forEach(function (back) {
        back.addEventListener('click', function () {
            FullElemPage[back.id].style.display = 'none'

        })
    })
}
OpenFeatures()

let currentTask = [
    {
        task: 'Mandir jaoo',
        details: 'Hanuman ji vale',
        imp: 'true',
    },
    {
        task: 'Recording kroo',
        details: 'cohort ke liyee',
        imp: 'true',
    },
    {
        task: 'lunch kro 2 baje',
        details: 'nahi to mummi dategi',
        imp: 'false',
    },
]

function renderTask() {
    let allTask = document.querySelector('.allTask')

    let sum = ''


    currentTask.forEach(function (elem) {
        sum += `<div class="task">
    <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    <button>Mark As Completed</button>
    </div>`
    })
    allTask.innerHTML = sum

}
renderTask()

let form = document.querySelector('.addTask form')
let taskInput = document.querySelector('.addTask form #task-input')
let taskDetailsInput = document.querySelector('.addTask form textarea')
let taskCheckbox = document.querySelector('.addTask form  #check')

form.addEventListener('submit', function (e) {
    e.preventDefault()
    currentTask.push(
        {
            task: taskInput.value,
            details: taskDetailsInput.value,
            imp: taskCheckbox.checked
        }
    )
    taskInput.value = ''
    taskDetailsInput.value = ''
    taskCheckbox.checked = false

    renderTask()
})


