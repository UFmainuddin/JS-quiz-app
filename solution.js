function solve() {
  let correctCount = 0;
  let totalQuestions = 3;
  let rightAnswers = ['onclick', "JSON.stringify()", 'A programming API for HTML and XML documents']
  let resultText = document.querySelector('.results-inner h1')
  // console.log(resultText);
  let ansArr = [];
  const sections = Array.from(document.querySelectorAll('section'))
 

  sections.forEach((section, index)=>{
    
    section.addEventListener('click', (e)=>{
         
       if(e.target.className ==='answer-text'){

            let answer = e.target.innerText;
            ansArr.push(answer)
            section.classList.add('hidden')
            console.log(ansArr)

            if(index+1<=sections.length-1){
                sections[index+1].classList.remove('hidden'); 
            }else{

                  ansArr = ansArr.filter(e => rightAnswers.includes(e))
                  document.querySelector('#quizzie>ul').style.display = 'block'

                  if(ansArr.length == totalQuestions){
                    resultText.textContent = `​You are recognized as top JavaScript fan!​`
                    console.log(resultText)
                  }else{
                    resultText.textContent =` ​You have ${ansArr.length} right answers `
                    console.log(resultText)
                  }
          
            }

        }
    })

  }) 
}

