function currentTime() {
    let date = new Date(); 
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();
    let session = "AM";
  
    if(hh == 0){
        hh = 12;
    }
    if(hh > 12){
        hh = hh - 12;
        session = "PM";
     }
  
     hh = (hh < 10) ? "0" + hh : hh;
     mm = (mm < 10) ? "0" + mm : mm;
     ss = (ss < 10) ? "0" + ss : ss;
      
     let time = hh + ":" + mm + ":" + ss + " " + session;
  
     console.log('HELLO from time ')
    document.getElementById("clock_two").innerText = time; 
    let t = setTimeout(function(){ currentTime() }, 1000);
  }

  function showElement(element) {
    // const hover = document.getElementById('show');
    const hover = element;
    const hiddeDiv = document.getElementById('clock');
    const hiddenImg = document.getElementById('img');

    console.log('HELLO outside')
    if(hiddeDiv.style.display == 'none') {
        console.log('HELLO from inside');
        hiddenImg.style.display = 'block'
        hiddeDiv.style.display = 'block';
    // } else {
    //     console.log('HELLO ')
    //     hiddeDiv.style.display = 'none';
  }
  currentTime()
 }

//  hover.addEventListener('mouseover', function handleMouseOverEvent() {
//     hiddeDiv.style.display = 'visible';
// });
// } else {
// hover.addEventListener('mouseout', function handleMouseOutEvent() {
//     hiddeDiv.style.display = 'hidden';
// });


  