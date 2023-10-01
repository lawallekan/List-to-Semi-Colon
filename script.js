document.getElementById("convertBtn").addEventListener("click", function() {
    var inputText = document.getElementById("inputText").value;
    var delimiter = document.getElementById("delimiter").value;
    var itemPrefix = document.getElementById("itemPrefix").value;
    var itemSuffix = document.getElementById("itemSuffix").value;
    var resultPrefix = document.getElementById("resultPrefix").value;
    var resultSuffix = document.getElementById("resultSuffix").value;
    
    var items = inputText.split("\n");
    var convertedList = items.map(function(item) {
        return itemPrefix + item + itemSuffix;
    }).join(delimiter);
    
    document.getElementById("outputText").value = resultPrefix + convertedList + resultSuffix;
});
