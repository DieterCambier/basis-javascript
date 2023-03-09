const invoervelden = document.getElementsByTagName("input");
const foutmelding = document.getElementById("foutmelding");

for(const invoerveld of invoervelden){
    invoerveld.onblur = function(){
        foutmelding.hidden = this.value !== '';
    }
};
