const displayValue = (value) => {
    const container = document.getElementById('container');
    const p = document.createElement('p');
    p.innerText = `${value}`;
    container.appendChild(p);
}
let newValue = 0;

const getvalueByClick = () => {




    // localStorage.setItem('value', 0);
    const previousValue = getValueFromLocalStorage();


    // const previousValue = valueNumber;
    // let newValue = 0;
    newValue = previousValue + 1;

    displayValue(newValue);

    console.log(newValue);
    // value.innerText = newValue;
    localStorage.setItem('value', newValue);
}

const getValueFromLocalStorage = () => {
    const savedValue = localStorage.getItem('value');
    // console.log(savedValue);
    if (isNaN(savedValue)) {
        newValue = 0;
        return newValue;
    }
    else {
        const savedNumberValue = parseInt(savedValue);
        // console.log(savedNumberValue);
        return savedNumberValue;
    }

}
// getValueFromLocalStorage();
displayValue(getValueFromLocalStorage());