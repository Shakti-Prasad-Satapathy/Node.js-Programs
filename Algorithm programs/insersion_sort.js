var words = [ "Books", "Pens", "Pencils", "Notebooks", "cat", "Dog" ,"School" ];
//var i = 0;
for (i=0; i<words.length;i++) {
    words[i]=words[i].toLowerCase();
}
for (let i = 1; i < words.length; i++) {
    var key = words[i];
    var j = i - 1;
    while (j >= 0 && words[j] > key) {
        words[j + 1] = words[j];
        j = j - 1;
    }
    words[j + 1] = key;
}
console.log("After Insertion Sort... " +words);






