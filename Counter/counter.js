let CounterElement = document.getElementById("counterValue");

function onIncrement() {
    let PreviousCounterValue = CounterElement.textContent;
    let UpdatedValue = parseInt(PreviousCounterValue) + 1;
    CounterElement.textContent = UpdatedValue;
}

function OnDecrement() {
    let PreviousCounterValue = CounterElement.textContent;
    let UpdatedValue = parseInt(PreviousCounterValue) - 1;
    CounterElement.textContent = UpdatedValue;

}

function OnReset() {
    let PreviousCounterValue = CounterElement.textContent;
    CounterElement.textContent = 0;


}