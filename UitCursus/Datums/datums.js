const datum = new Date();
console.log('Jaartal:',datum.getFullYear());
console.log('Maand: ', datum.getMonth());
console.log('Dag:', datum.getDate());
console.log('Dag Van de week: ',datum.getDay());
console.log('Uren: ',datum.getHours());
console.log('Minuten: ',datum.getMinutes());
console.log('Seconden:  ',datum.getSeconds());
console.log('Miliseconden: ',datum.getMilliseconds());
console.log('Datum in Belgisch formaat: ',datum.toLocaleDateString("nl-BE"));
console.log('Tijd in Belgisch formaat',datum.toLocaleTimeString("nl-BE"));
console.log('Datum en tijd in Belgisch formaat',datum.toLocaleString("nl-BE"));
