let xhr = new XMLHttpRequest;

    xhr.open('GET', 'https://thatsthespir.it/api', true)

    xhr.onload = function() 
        {
            if (this.status === 200) {

                let quoteString = JSON.parse(this.responseText);
                let quoteAuthor = quoteString.author;
                let quoteQuote = quoteString.quote;
                let quoteImage = quoteString.photo;  

                document.getElementById("author").innerHTML = quoteAuthor
                document.getElementById("quote").innerHTML = quoteQuote
            }
        }
    
    xhr.send();
      