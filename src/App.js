

      import { useEffect, useState } from 'react';
      import { QueryClient, QueryClientProvider } from 'react-query';
      import { BrowserRouter, Route, Routes} from 'react-router-dom';
      import './App.css';
      import Footer from './component/Footer/Footer';
      import Header from './component/Header/Header';
      import Home from './component/pages/Home/Home';
      import Quiz from './component/pages/Quiz/Quiz';
      import Result from './component/pages/Result/Result';

      const queryClient = new QueryClient()

      function App() {
      const [name, setName] = useState('')
      const [questions, setQuestions] = useState("")
      const [score, setScore] = useState(0)



        useEffect(() => {
          async function getQuestion() {
            const questionFromServer = await fetchQuestions()
            setQuestions(questionFromServer)
          }
          getQuestion()
        },[])

      async function fetchQuestions (category="", difficulty=""){
        const res = await fetch(`https://opentdb.com/api.php?amount=10${category && `&category=${category}`}${difficulty && `&difficulty=${difficulty}`}&type=multiple`)
        const data = await res.json()

        // console.log(data)
        return data.results
        

      }
    return (
      <>
        <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <div className="app" style={{backgroundImage: "url('./ques1.png')"}}>
            <Header />
            <Routes>
              <Route path='/' element={<Home name={name} setName={setName} fetchQuestions={fetchQuestions} />}>
              
              </Route>
              <Route path='/quiz' element={<Quiz name={name} questions={questions} score={score} setScore={setScore} setQuestions={setQuestions}/>}>
              </Route>
            

              
              <Route path='/result' element={<Result name={name} score={score}/>}>

              </Route>
            </Routes>
            
          </div>
          <Footer />
          </BrowserRouter>
        </QueryClientProvider>

      </>
    )}

  export default App;
