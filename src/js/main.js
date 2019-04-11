console.log('test')

function todayDay(){
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    
    var d = new Date();
    var i = d.getDate();

    document.querySelector(".todayDay").innerHTML = `Today  ${months[d.getMonth()]} ${i}`
}
todayDay()