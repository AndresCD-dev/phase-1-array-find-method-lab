function superbowlWin(records) {
    const  win = records.find(el => el.result === "W")
    if (win){
      return win.year;
    }
        
    
}

