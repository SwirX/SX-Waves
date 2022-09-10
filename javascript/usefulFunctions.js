//        _Useful functions_

//replacing console.log() with printf()
function printf(v){
    console.log(v);
}

// replace a character/list with another character/string
function replace(string = new String(), oldCharacter, newCharacter){
    string = string.split(oldCharacter);
    string = string.join(newCharacter);
    return string
}

// search for a value in a list
function searchlst(list=new Array(), search_value){
    let found = undefined;
    for(i=0; i<list.length; i++){
        if(list[i] === search_value){
            found = list[i];
        }
    }
    return found
}
//re
let re = {
    findall: function(patern, string = new String()){
        this.patern = patern
        this.string = string
        const hits = [];
        let match = null;
        do {
            match = patern.exec(string);
            if(match) {
                hits.push(match[0]);
            }
        } while (match);
        return hits;
    }
}

//Time
let time = {
    time: function(){
        return new Date().getTime();
    },
    ctime: function(secs=null){
        if(secs==null){
            return new Date().toGMTString();
        }else{
            return new Date(secs*1000).toGMTString();
        }
    },
    sleep: function(seconds = 0.5){
        var ms = seconds*1000;
        let timeStart = new Date().getTime();
        while (true) {
        let elapsedTime = new Date().getTime() - timeStart;
        if (elapsedTime > ms) {
            break;
        }
        }
    },
    localtime: function(timezone=null){
        if(timezone==null){
            return new Date().toLocaleDateString()
        }else{
            return new Date().toLocaleDateString(timezone)
        }
    }
}
