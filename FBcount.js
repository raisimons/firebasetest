let database = firebase.database()


let count = 0
database.ref("counter").on("value",
    function (snapshot) {

        if (snapshot.val() === null) {
            database.ref().set({
                counter: count

            })
        } else {
            count = parseInt(snapshot.val())
        }
    })

setInterval(function () {
    count++
    $("#firstPar").html(count)

    database.ref().update({
        counter: count
    })


}, 1000);