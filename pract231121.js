let result = '';
const values = document.querySelector('#values').children
const URLs = document.querySelector('#urls').children
document
    .querySelector('button')
    .addEventListener('click',
    async ({ target: t }) => { 
        let option = '';
        
        for (let index = 0; index < values.length; index++) {
            const value = values[index].innerText;
            const url = URLs[index].innerText;
        
            const resp = await fetch(url + value +'/' + option);
            const fetchResult = await resp.text();
        
            const searchingTag = '<span>';
            const searchingTagEnd = '</span>';
            const answerStartIndex = await fetchResult.search(searchingTag) + searchingTag.length;
            const answerEndIndex = await fetchResult.search(searchingTagEnd);
            const answer = await fetchResult.slice(answerStartIndex, answerEndIndex);
        
            option = '' + answer;
            result += answer;
        }
    
        t.textContent = `Результат: ${result}`;
        console.log(result);
    }
); 
