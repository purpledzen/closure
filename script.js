function countFn(el) {
    return function(event) {
        let count = 0
        document.querySelector(el).addEventListener(event, () => {
            count += 1
            document.querySelector(el).innerHTML = count
        })
    }
}

const field1 = countFn(".field1")
const field2 = countFn(".field2")
field1("click")
field2("mousemove")

//**************************************************************************** */

function urlGenerator(domain) {
    return function(url) {
        return `https://${url}.${domain}`
    }
}

const domenRU = urlGenerator("ru")
console.log(domenRU("yandex"))
console.log(domenRU("rostelecom"))

//************************************************************************** */

function myBind(func, obj) {
    return function() {
        func.call(obj)
    }
}


    function printInfo () {
        console.group(`Person ${this.name}`)
        console.log(`Name: ${this.name}`)
        console.log(`Age: ${this.age}`)
        console.log(`Job: ${this.job}`)
        console.groupEnd
    }

const elena = {
    name: "Elena",
    age: "60",
    job: "worker"
}

const elbind = myBind(printInfo, elena)
elbind()






